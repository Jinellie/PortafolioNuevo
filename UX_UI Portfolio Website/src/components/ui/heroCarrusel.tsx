import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Annotation } from "./annotation";

interface HeroCarouselProps {
	slides: {
		image: string;
		annotations: { number: number | string; description: string }[];
	}[];
	prefersReducedMotion: boolean;
}

export function HeroCarousel({
	slides,
	prefersReducedMotion,
}: HeroCarouselProps) {
	const [index, setIndex] = useState(0);

	if (!slides || slides.length === 0) return null;

	const total = slides.length;
	const slide = slides[index];

	const next = () => setIndex((i) => (i + 1) % total);
	const prev = () => setIndex((i) => (i - 1 + total) % total);

	/* Keyboard navigation */
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, []);

	return (
		<section
			aria-roledescription="carousel"
			aria-label="Case study visuals with annotations"
			className="relative"
		>
			{/* Slide */}
			<AnimatePresence mode="wait">
				<motion.div
					key={index}
					initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 24 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -24 }}
					transition={{
						duration: prefersReducedMotion ? 0 : 0.45,
						ease: "easeOut",
					}}
					className="
    grid grid-cols-1
    md:grid-cols-2
    gap-6
  "
				>
					{/* Image — LEFT on desktop */}
					<div
						className="
      col-span-1
      md:col-span-1
      relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden
      rounded-2xl border border-white/10
      bg-black/20
      flex items-center justify-center
    "
					>
						<ImageWithFallback
							src={slide.image}
							alt={`Case study screen ${index + 1} of ${total}`}
							className="max-h-full w-auto  object-contain"
						/>
					</div>

					{/* Annotations — RIGHT on desktop */}
					<aside
						aria-live="polite"
						className="
      col-span-1
      md:col-span-1
      flex flex-col gap-4
      rounded-2xl border border-white/10
      bg-white/5 p-5 backdrop-blur-sm
    "
					>
						<div className="flex items-center justify-between">
							<p className="text-xs uppercase tracking-wider text-white/50">
								Key annotations
							</p>
							<span className="text-xs text-white/40">
								{index + 1} / {total}
							</span>
						</div>

						<div className="flex flex-col gap-3">
							{slide.annotations.map((a, i) => (
								<Annotation
									key={i}
									number={a.number}
									description={a.description}
								/>
							))}
						</div>
					</aside>
				</motion.div>
			</AnimatePresence>

			{/* Controls */}
			<div className="mt-6 flex items-center justify-between gap-4">
				<button
					onClick={prev}
					aria-label="Previous slide"
					className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
				>
					<ChevronLeft className="h-4 w-4" />
					Previous
				</button>

				<button
					onClick={next}
					aria-label="Next slide"
					className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
				>
					Next
					<ChevronRight className="h-4 w-4" />
				</button>
			</div>

			{/* Progress bar */}
			<div className="mt-4 flex justify-center gap-2">
				{slides.map((_, i) => (
					<span
						key={i}
						aria-hidden
						className={`h-1 w-8 rounded-full transition ${
							i === index ? "bg-white/70" : "bg-white/20"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
