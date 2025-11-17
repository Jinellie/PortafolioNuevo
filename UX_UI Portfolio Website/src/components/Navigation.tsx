import { motion } from 'motion/react';
import { Moon, Sun, ArrowLeft } from 'lucide-react';
import { Theme } from '../App';

interface NavigationProps {
  theme: Theme;
  toggleTheme: () => void;
  currentPage: string;
  onBackToHome: () => void;
}

export default function Navigation({ theme, toggleTheme, currentPage, onBackToHome }: NavigationProps) {
  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      onBackToHome();
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ${
      theme === 'dark' ? 'bg-neutral-950/80' : 'bg-neutral-50/80'
    } backdrop-blur-md border-b ${
      theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {currentPage === 'home' ? (
            <motion.button
              onClick={() => scrollToSection('hero')}
              className={`tracking-tight transition-colors ${
                theme === 'dark' ? 'text-neutral-50 hover:text-neutral-300' : 'text-neutral-950 hover:text-neutral-600'
              }`}
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2 }}
            >
              JF
            </motion.button>
          ) : (
            <motion.button
              onClick={onBackToHome}
              className={`flex items-center gap-2 transition-colors ${
                theme === 'dark' ? 'text-neutral-50 hover:text-neutral-300' : 'text-neutral-950 hover:text-neutral-600'
              }`}
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </motion.button>
          )}

          <div className="hidden md:flex items-center gap-8">
            {currentPage === 'home' && (
              <>
                <NavLink onClick={() => scrollToSection('work')} theme={theme}>Work</NavLink>
                <NavLink onClick={() => scrollToSection('about')} theme={theme}>About</NavLink>
                <NavLink onClick={() => scrollToSection('process')} theme={theme}>Process</NavLink>
                <NavLink onClick={() => scrollToSection('contact')} theme={theme}>Contact</NavLink>
              </>
            )}
          </div>

          <motion.button
            onClick={toggleTheme}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              theme === 'dark' 
                ? 'bg-neutral-800 hover:bg-neutral-700' 
                : 'bg-neutral-200 hover:bg-neutral-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : 180, scale: theme === 'dark' ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute"
            >
              <Moon className="w-5 h-5" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? -180 : 0, scale: theme === 'dark' ? 0 : 1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute"
            >
              <Sun className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ onClick, children, theme }: { onClick: () => void; children: React.ReactNode; theme: Theme }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative tracking-tight transition-colors ${
        theme === 'dark' ? 'text-neutral-400 hover:text-neutral-50' : 'text-neutral-600 hover:text-neutral-950'
      }`}
      whileHover="hover"
    >
      {children}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-px ${
          theme === 'dark' ? 'bg-neutral-50' : 'bg-neutral-950'
        }`}
        initial={{ scaleX: 0 }}
        variants={{
          hover: { scaleX: 1 }
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}
