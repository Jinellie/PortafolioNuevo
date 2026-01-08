import { motion } from "motion/react";
import { Theme } from "../App";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyCardProps {
	caseStudy: {
		id: string;
		title: string;
		category: string;
		description: string;
		thumbnail: string;
		year: string;
		color: string;
	};
	theme: Theme;
	onClick: () => void;
	delay: number;
	isInView: boolean;
	prefersReducedMotion: boolean;
}

export default function CaseStudyCard({
	caseStudy,
	theme,
	onClick,
	delay,
	isInView,
	prefersReducedMotion,
}: CaseStudyCardProps) {
	return (
		<motion.article
			initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			whileHover={prefersReducedMotion ? {} : { y: -6 }}
			transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay }}
			className="group cursor-pointer transition-shadow duration-500 hover:shadow-xl hover:shadow-black/10"
			onClick={onClick}
		>
			<div
				className={`relative overflow-hidden rounded-2xl border transition-colors duration-500 ${
					theme === "dark"
						? "bg-neutral-900 hover:bg-neutral-800"
						: "bg-neutral-100 hover:bg-neutral-200"
				}`}
			>
				{/* Image Container */}
				<div className="relative aspect-[16/11] overflow-hidden">
					<motion.div
						whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
						transition={{ duration: 0.6, ease: "linear" }}
						className="w-full h-full"
					>
						<ImageWithFallback
							src={caseStudy.thumbnail}
							alt={caseStudy.title}
							className="w-full h-full object-cover"
						/>
					</motion.div>

					{/* Subtle color accent */}
					<div
						className="absolute left-0 top-0 h-full w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						style={{ backgroundColor: caseStudy.color }}
					/>

					{/* Gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

					{/* Arrow icon */}
					<motion.div
						className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100"
						initial={{ scale: 0.85, opacity: 0 }}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
					>
						<ArrowUpRight className="w-4 h-4 text-white" />
					</motion.div>
				</div>

				{/* Content */}
				<div className="p-5 lg:p-6">
					<div className="flex items-center justify-between mb-2">
						<span
							className="text-[0.7rem] tracking-wider uppercase"
							style={{ color: caseStudy.color }}
						>
							{caseStudy.category}
						</span>
						<span className="text-xs text-neutral-500">{caseStudy.year}</span>
					</div>

					<h3 className="mb-2 tracking-tight">{caseStudy.title}</h3>

					<p
						className={`text-sm leading-relaxed hidden sm:block ${
							theme === "dark" ? "text-neutral-400" : "text-neutral-600"
						}`}
					>
						{caseStudy.description}
					</p>

					{/* Animated underline */}
					<motion.div
						className="mt-4 h-px"
						initial={{ scaleX: 0 }}
						whileHover={{ scaleX: 1 }}
						transition={{ duration: 0.4 }}
						style={{
							transformOrigin: "left",
							backgroundColor: caseStudy.color,
						}}
					/>
				</div>
			</div>
		</motion.article>
	);
}
