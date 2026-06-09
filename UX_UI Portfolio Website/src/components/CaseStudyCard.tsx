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
        details?: {
            impact?: Array<{
                metric: string;
                label: string;
            }>;
        };
    };
    theme: Theme;
    onClick: () => void;
    delay: number;
    isInView: boolean;
    prefersReducedMotion: boolean;
    variant?: "default" | "featured";
}

export default function CaseStudyCard({
    caseStudy,
    theme,
    onClick,
    delay,
    isInView,
    prefersReducedMotion,
    variant = "default",
}: CaseStudyCardProps) {
	const highlights = caseStudy.details?.impact?.slice(0, 2) ?? [];

	if (variant === "featured") {
		return (
			<motion.article
				initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				whileHover={prefersReducedMotion ? {} : { y: -4 }}
				transition={{
					duration: prefersReducedMotion ? 0 : 0.5,
					ease: "easeOut",
					delay,
				}}
				onClick={onClick}
				className="group cursor-pointer w-full"
			>
				<div
					className={`relative overflow-hidden rounded-2xl border transition-colors duration-300 ${
						theme === "dark"
							? "bg-neutral-900 hover:bg-neutral-800 border-neutral-800 hover:border-neutral-700"
							: "bg-white hover:bg-neutral-200 border-neutral-200 hover:border-neutral-300"
					}`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 h-[400px]">
						{/* VISUALS (Left Column) */}
						<div
							className={`relative flex items-center justify-center p-8 min-h-[300px] lg:min-h-full overflow-hidden ${
								theme === "dark" ? "bg-neutral-950/30" : "bg-neutral-50/50"
							}`}
						>
							<div className="relative w-32 aspect-[4/3] flex items-center justify-center">
								{[
									"/proyectos/ECOMMERCEcart.png",
									"/proyectos/ECOMMERCEshipping.png",
									"/proyectos/ECOMMERCEreview.png",
								].map((src, index) => {
									// Subtle fanning math
									const isMiddle = index === 1;
									const baseRotate = index === 0 ? -8 : index === 2 ? 8 : 0;
									const baseX = index === 0 ? -105 : index === 2 ? 105 : 0;
									const baseY = isMiddle ? 50 : 70;
									const baseZ = isMiddle ? 20 : 10;

									return (
										<motion.div
											key={src}
											className={`absolute w-[45%] aspect-9/16 rounded-lg overflow-hidden shadow-lg border ${
												theme === "dark"
													? "border-neutral-800 bg-neutral-900/50"
													: "border-neutral-200 bg-white/50"
											}`}
											initial={{
												rotate: baseRotate,
												x: baseX,
												y: baseY,
												zIndex: baseZ,
											}}
											animate={
												prefersReducedMotion
													? {}
													: {
															rotate: baseRotate,
															x: baseX,
															y: baseY,
															zIndex: baseZ,
														}
											}
											whileHover={
												prefersReducedMotion
													? {}
													: {
															y: baseY - 8, // Very subtle lift
															scale: 1.02, // Very subtle scale
														}
											}
											transition={{
												duration: 0.25,
												ease: "easeOut",
											}}
										>
											<img
												src={src}
												alt=""
												className="w-full h-full object-cover pointer-events-none"
											/>
											{/* Soft lighting overlay */}
											<div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />
										</motion.div>
									);
								})}
							</div>
						</div>

						{/* CONTENT (Right Column) */}
						<div className="flex flex-col justify-center px-8 pt-8 pb-8 lg:px-12 lg:border-l border-neutral-200 dark:border-neutral-800/50">
							

							<span
								className="text-[10px] tracking-[0.15em] uppercase font-bold mb-3"
								style={{ color: caseStudy.color }}
							>
								{caseStudy.category}
							</span>

							<h3
								className={`text-[clamp(24px,3vw,36px)] font-semibold leading-tight tracking-tight mb-4 ${
									theme === "dark" ? "text-white" : "text-neutral-900"
								}`}
							>
								{caseStudy.title}
							</h3>

							<p
								className={`text-[15px] leading-relaxed max-w-[400px] mb-8 ${
									theme === "dark" ? "text-neutral-400" : "text-neutral-600"
								}`}
							>
								{caseStudy.description}
							</p>

							<div className="flex flex-wrap gap-2 mt-auto mb-8">
								{["Figma", "User Flows", "Wireframing"].map((tag) => (
									<span
										key={tag}
										className={`text-[11px] font-medium px-3 py-2 rounded-full border ${
											theme === "dark"
												? "border-neutral-800 bg-neutral-900 text-neutral-300"
												: "border-neutral-200 bg-neutral-50 text-neutral-600"
										}`}
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</motion.article>
		);
	}

	// DEFAULT CARD (Metrics Card)
	return (
		<motion.article
			initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			whileHover={prefersReducedMotion ? {} : { y: -4 }}
			transition={{
				duration: prefersReducedMotion ? 0 : 0.4,
				ease: "easeOut",
				delay,
			}}
			className="group cursor-pointer flex flex-col h-full"
			onClick={onClick}
		>
			<div
				className={`relative flex flex-col h-full overflow-hidden rounded-2xl border transition-all duration-300 group-hover:shadow-lg ${
					theme === "dark"
						? "bg-neutral-900 hover:bg-neutral-800 border-neutral-800 hover:border-neutral-700"
						: "bg-white hover:bg-neutral-200 border-neutral-200 hover:border-neutral-300"
				}`}
			>
				{/* Image Container */}
				<div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-950">
					<motion.div className="w-full h-full">
						<ImageWithFallback
							src={caseStudy.thumbnail}
							alt={caseStudy.title}
							className="w-full h-full object-cover"
						/>
					</motion.div>

					{/* Arrow icon */}
					<motion.div
						className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100"
						initial={{ scale: 0.9, opacity: 0 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.2 }}
					>
						<ArrowUpRight className="w-4 h-4 text-white shadow-sm" />
					</motion.div>
				</div>

				{/* Content */}
				<div className="flex flex-col flex-grow p-6 lg:p-7">
					<div className="flex items-center justify-between mb-3">
						<span
							className="text-[10px] tracking-[0.15em] uppercase font-bold"
							style={{ color: caseStudy.color }}
						>
							{caseStudy.category}
						</span>
						<span className="text-[11px] font-medium text-neutral-500">
							{caseStudy.year}
						</span>
					</div>

					<h3
						className={`text-xl font-semibold mb-3 tracking-tight ${theme === "dark" ? "text-white" : "text-neutral-900"}`}
					>
						{caseStudy.title}
					</h3>

					<p
						className={`text-sm leading-relaxed mb-6 line-clamp-2 ${
							theme === "dark" ? "text-neutral-400" : "text-neutral-600"
						}`}
					>
						{caseStudy.description}
					</p>

					{/* REDESIGNED METRICS: Clean soft-box style */}
					{highlights.length > 0 && (
						<div className="mt-auto pt-2 grid grid-cols-2 gap-4">
							{highlights.map((item) => (
								<div
									key={`${item.metric}-${item.label}`}
									className={`p-3.5 rounded-xl flex flex-col justify-top transition-colors ${
										theme === "dark"
											? "bg-white/5 hover:bg-white/10"
											: "bg-black/5 hover:bg-black/10"
									}`}
								>
									<span
										className="text-xl lg:text-2xl font-bold tracking-tight"
										style={{ color: caseStudy.color }}
									>
										{item.metric}
									</span>
									<span
										className={`mt-1 text-[11px] font-medium tracking-wide ${
											theme === "dark" ? "text-neutral-400" : "text-neutral-500"
										}`}
									>
										{item.label}
									</span>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</motion.article>
	);
}