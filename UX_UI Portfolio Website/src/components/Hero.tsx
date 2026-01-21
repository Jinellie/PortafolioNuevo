import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, MotionValue } from 'motion/react';
import { ArrowDown } from 'lucide-react';

type Theme = 'light' | 'dark';

interface HeroProps {
  theme: Theme;
  prefersReducedMotion: boolean;
  data: {
    name: string;
    role: string;
    heroTagline: string;
    heroDescription: string;
  };
}

// Magnetic Grid Component with Dots
function MagneticGrid({ theme, prefersReducedMotion }: { theme: Theme; prefersReducedMotion: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [gyroOffset, setGyroOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Gyroscope support for mobile
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta !== null && e.gamma !== null && containerRef.current) {
        // beta: front-to-back tilt (-180 to 180)
        // gamma: left-to-right tilt (-90 to 90)
        
        // Map device orientation to screen coordinates
        // Clamp values and scale to screen dimensions
        const x = ((e.gamma + 90) / 180) * dimensions.width;
        const y = ((e.beta + 90) / 180) * dimensions.height;
        
        setGyroOffset({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    // Request permission on iOS 13+
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any).requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          }
        })
        .catch(console.error);
    } else {
      // No permission needed
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [dimensions, mouseX, mouseY]);

 // Create grid of dots - responsive to screen width
  const cols = dimensions.width < 768 ? 12 : 20;
  const rows = dimensions.width < 768 ? 10 : 15;
  const dots = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push({ col, row, index: row * cols + col });
    }
  }

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0">
        {dots.map(({ col, row, index }) => (
          <MagneticDot
            key={`dot-${col}-${row}`}
            col={col}
            row={row}
            totalCols={cols}
            totalRows={rows}
            mouseX={mouseX}
            mouseY={mouseY}
            theme={theme}
            dimensions={dimensions}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </svg>
    </div>
  );
}

// Magnetic Dot Component
function MagneticDot({
  col,
  row,
  totalCols,
  totalRows,
  mouseX,
  mouseY,
  theme,
  dimensions,
  index,
  prefersReducedMotion,
}: {
  col: number;
  row: number;
  totalCols: number;
  totalRows: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  theme: Theme;
  dimensions: { width: number; height: number };
  index: number;
  prefersReducedMotion: boolean;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [idleOffset, setIdleOffset] = useState({ x: 0, y: 0 });
  
  const smoothMouseX = useSpring(mouseX, { 
    damping: 30, 
    stiffness: 150, 
    mass: 0.1 
  });
  const smoothMouseY = useSpring(mouseY, { 
    damping: 30, 
    stiffness: 150, 
    mass: 0.1 
  });

  const baseX = (dimensions.width / (totalCols - 1)) * col;
  const baseY = (dimensions.height / (totalRows - 1)) * row;

  // Gentle idle animation
  useEffect(() => {
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      
      // Create flowing wave motion across the grid
      // Wave travels diagonally across the grid
      const waveX = Math.sin(elapsed * 0.8 + (col * 0.15) - (row * 0.1)) * 4;
      const waveY = Math.cos(elapsed * 0.6 + (row * 0.15) - (col * 0.1)) * 4;
      
      setIdleOffset({ x: waveX, y: waveY });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [col, row, prefersReducedMotion]);

  const updatePosition = React.useCallback((currentMouseX: number, currentMouseY: number) => {
    if (!dimensions.width) {
      setPosition({ x: baseX, y: baseY });
      return;
    }

    const distance = Math.sqrt(
      Math.pow(currentMouseX - baseX, 2) + Math.pow(currentMouseY - baseY, 2)
    );
    
    const influenceRadius = 180;
    let offsetX = 0;
    let offsetY = 0;
    
    if (distance < influenceRadius && distance > 0) {
      const normalizedDist = distance / influenceRadius;
      const falloff = (Math.cos(normalizedDist * Math.PI) + 1) / 2;
      const strength = falloff * 40;
      
      const angle = Math.atan2(currentMouseY - baseY, currentMouseX - baseX);
      offsetX = Math.cos(angle) * strength;
      offsetY = Math.sin(angle) * strength;
    }
    
    // Combine mouse influence with idle animation
    setPosition({ 
      x: baseX + offsetX + (prefersReducedMotion ? 0 : idleOffset.x), 
      y: baseY + offsetY + (prefersReducedMotion ? 0 : idleOffset.y)
    });
  }, [dimensions, prefersReducedMotion, baseX, baseY, idleOffset]);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    let frameId: number;

    const animate = () => {
      const x = smoothMouseX.get();
      const y = smoothMouseY.get();
      updatePosition(x, y);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [dimensions, smoothMouseX, smoothMouseY, updatePosition]);

  const dotAnimationDelay = index * 0.003;

  // Animated grayscale gradient - shifts over time
  const [colorIntensity, setColorIntensity] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      
      // Create a traveling wave of brightness
      const wave = Math.sin(elapsed * 0.5 + (col * 0.1) + (row * 0.1));
      // Map from -1,1 to a grayscale range
      const intensity = (wave + 1) / 2; // 0 to 1
      
      setColorIntensity(intensity);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [col, row, prefersReducedMotion]);

  // Grayscale that shifts from dark to light
  const grayValue = Math.floor(100 + (colorIntensity * 155)); // 100-255 range
  const dotColor = theme === 'dark' 
    ? `rgb(${grayValue}, ${grayValue}, ${grayValue})` 
    : `rgb(${Math.floor(grayValue * 0.7)}, ${Math.floor(grayValue * 0.7)}, ${Math.floor(grayValue * 0.7)})`;

  return (
    <motion.circle
      cx={position.x}
      cy={position.y}
      r="1.5"
      fill={dotColor}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: dotAnimationDelay,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        filter: 'blur(0.3px)',
      }}
    />
  );
}

function Hero({ theme, prefersReducedMotion, data }: HeroProps) {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate when grid animation completes
  // Last dot delay: 300 * 0.003 = 0.9s, Duration: 0.6s = ~1.5s
  const gridAnimationComplete = prefersReducedMotion ? 0 : 1.5;
  const heroContentDelay = gridAnimationComplete;

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Magnetic Grid */}
      <MagneticGrid theme={theme} prefersReducedMotion={prefersReducedMotion} />

      <div className="max-w-7xl w-full relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Role Label */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: heroContentDelay + 0.2 }}
            className="mb-8"
          >
            <span className={`inline-block px-6 py-2 rounded-full border tracking-wider uppercase ${
              theme === 'dark' 
                ? 'border-neutral-700 text-neutral-400 bg-neutral-950' 
                : 'border-neutral-300 text-neutral-600 bg-neutral-50'
            }`} style={{ fontSize: '0.75rem' }}>
              {data.role}
            </span>
          </motion.div>

          {/* Main Name - Extra Large */}
          <motion.h1
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: heroContentDelay + 0.4 }}
            className="mb-8 tracking-tighter leading-none"
            style={{ 
              fontSize: 'clamp(3rem, 12vw, 9rem)',
              fontWeight: 600,
              letterSpacing: '-0.04em'
            }}
          >
            {data.name}
          </motion.h1>

          {/* Tagline - Bold Statement */}
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: heroContentDelay + 0.6 }}
            className={`mb-8 tracking-tight ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
            }`}
            style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 2.5rem)',
              fontWeight: 500,
              lineHeight: 1.2
            }}
          >
            {data.heroTagline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: heroContentDelay + 0.8 }}
            className={`max-w-3xl mx-auto mb-16 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.6 }}
          >
            {data.heroDescription}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToWork}
            className={`group inline-flex items-center gap-4 px-12 py-5 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-neutral-50 text-neutral-950 hover:bg-neutral-200 hover:shadow-2xl hover:shadow-neutral-400/20'
                : 'bg-neutral-950 text-neutral-50 hover:bg-neutral-800 hover:shadow-2xl hover:shadow-neutral-950/20'
            }`}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: heroContentDelay + 1 }}
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ fontSize: '1.125rem', fontWeight: 500 }}
          >
            View Featured Work
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.button>

          {/* Decorative Elements */}
          <div className="mt-24 flex items-center justify-center gap-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`w-16 h-px ${
                  theme === 'dark' ? 'bg-neutral-700' : 'bg-neutral-300'
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 0.8, 
                  delay: heroContentDelay + 1.2 + (index * 0.1) 
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: heroContentDelay + 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: prefersReducedMotion ? 0 : 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`flex flex-col items-center gap-2 ${
            theme === 'dark' ? 'text-neutral-600' : 'text-neutral-400'
          }`}
        >
         
          <div className={`w-px h-12 ${
            theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-300'
          }`} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;