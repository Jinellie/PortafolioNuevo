import { motion } from "motion/react";
import { Theme } from "../App";
import { CheckCircle2, ArrowRight, User, Wrench } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HeroCarousel } from "./ui/heroCarrusel";

interface CaseStudyPageProps {
	caseStudyId: string;
	theme: Theme;
	onBack: () => void;
	onNextProject?: (nextId: string) => void;
	prefersReducedMotion: boolean;
	data: any[];
}

export default function CaseStudyPage({
	caseStudyId,
	theme,
	onBack,
	onNextProject,
	prefersReducedMotion,
	data,
}: CaseStudyPageProps) {
	const caseStudy = data.find((cs: any) => cs.id === caseStudyId);
	const details = caseStudy?.details;

	if (!caseStudy || !details) {
		return null;
	}

	return (
		<div className="pt-16 ">
			{/* Hero Section */}
			<div className="h-10"></div>

			<section className="px-6 lg:px-8 pt-24 pb-20">
				<div className="max-w-6xl mx-auto">
					<motion.header
						className="mb-20"
						initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
					>
						{/* Category pill */}
						<span
							className={`
          inline-flex items-center rounded-full px-4 py-2 mb-6
          text-xs uppercase tracking-widest
          ${
						theme === "dark"
							? "bg-neutral-800 text-neutral-300"
							: "bg-neutral-200 text-neutral-600"
					}
        `}
						>
							{caseStudy.category}
						</span>

						{/* Title */}
						<h1
							className="max-w-4xl mb-8 tracking-tight leading-tight"
							style={{
								fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
								fontWeight: 600,
								fontFamily: '"Outfit", sans-serif',
							}}
						>
							{caseStudy.title}
						</h1>

						{/* Description */}
						<p
							className={`
          max-w-3xl text-lg md:text-xl leading-relaxed
          ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}
        `}
						>
							{caseStudy.description}
						</p>

						{/* Meta line (high-signal for recruiters) */}
						<p
							className={`
          mt-6 text-sm
          ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}
        `}
						></p>
					</motion.header>

					{/* Carousel */}
					<motion.div
						initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: prefersReducedMotion ? 0 : 0.8,
							delay: 0.1,
						}}
					>
						<HeroCarousel
							slides={caseStudy.heroCarousel}
							prefersReducedMotion={prefersReducedMotion}
						/>
					</motion.div>
				</div>
			</section>
			<div className="h-10"></div>
			{/* Problem */}

			<Section
				title="The Problem"
				theme={theme}
				prefersReducedMotion={prefersReducedMotion}
			>
				<p
					className={`max-w-4xl ${
						theme === "dark" ? "text-neutral-300" : "text-neutral-700"
					}`}
				>
					{details.problem}
				</p>
			</Section>

			{/* Insights */}
			<Section
				title="Key Insights"
				theme={theme}
				prefersReducedMotion={prefersReducedMotion}
			>
				<div className="grid md:grid-cols-3 gap-6">
					{details.insights.map((insight: string, index: number) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
							className={`p-6 rounded-xl ${
								theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"
							}`}
						>
							<CheckCircle2
								className="w-6 h-6 mb-4"
								style={{ color: caseStudy.color }}
							/>
							<p
								className={
									theme === "dark" ? "text-neutral-300" : "text-neutral-700"
								}
							>
								{insight}
							</p>
						</motion.div>
					))}
				</div>
			</Section>

			{/* Constraints */}
			<Section
				title="Constraints"
				theme={theme}
				prefersReducedMotion={prefersReducedMotion}
			>
				<div className="grid md:grid-cols-2 gap-4">
					{details.constraints.map((constraint: string, index: number) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: prefersReducedMotion ? 0 : index * 0.05 }}
							className="flex items-start gap-3"
						>
							<div
								className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0`}
								style={{ backgroundColor: caseStudy.color }}
							/>
							<p
								className={
									theme === "dark" ? "text-neutral-400" : "text-neutral-600"
								}
							>
								{constraint}
							</p>
						</motion.div>
					))}
				</div>
			</Section>

			{/* Process */}
			<Section
				title="Design Process"
				theme={theme}
				prefersReducedMotion={prefersReducedMotion}
			>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{details.process.map((step: any, index: number) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
							className="relative"
						>
							<div
								className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
								style={{
									backgroundColor: `${caseStudy.color}20`,
									color: caseStudy.color,
								}}
							>
								<span>{index + 1}</span>
							</div>
							<h3 className="mb-3 tracking-tight">{step.title}</h3>
							<p
								className={
									theme === "dark" ? "text-neutral-400" : "text-neutral-600"
								}
							>
								{step.description}
							</p>
							{index < details.process.length - 1 && (
								<ArrowRight className="hidden lg:block absolute top-6 -right-3 w-5 h-5 opacity-30" />
							)}
						</motion.div>
					))}
				</div>
			</Section>

			{/* Solution */}
			<Section
				title="The Solution"
				theme={theme}
				prefersReducedMotion={prefersReducedMotion}
			>
				<p
					className={`max-w-4xl mb-8 ${
						theme === "dark" ? "text-neutral-300" : "text-neutral-700"
					}`}
				>
					{details.solution}
				</p>
				<div
					className={`p-8 rounded-2xl ${
						theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"
					}`}
				>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<div className="flex items-center gap-3 mb-3">
								<User className="w-5 h-5" style={{ color: caseStudy.color }} />
								<h4 className="tracking-tight">My Role</h4>
							</div>
							<p
								className={
									theme === "dark" ? "text-neutral-400" : "text-neutral-600"
								}
							>
								{details.role}
							</p>
						</div>
						<div>
							<div className="flex items-center gap-3 mb-3">
								<Wrench
									className="w-5 h-5"
									style={{ color: caseStudy.color }}
								/>
								<h4 className="tracking-tight">Tools Used</h4>
							</div>
							<div className="flex flex-wrap gap-2">
								{details.tools.map((tool: string, index: number) => (
									<span
										key={index}
										className={`px-3 py-1 rounded-full ${
											theme === "dark" ? "bg-neutral-800" : "bg-neutral-200"
										}`}
									>
										{tool}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* Impact */}
			<Section
				title="Impact & Results"
				theme={theme}
				prefersReducedMotion={prefersReducedMotion}
			>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
					{details.impact.map((item: any, index: number) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
							className="text-center"
						>
							<div
								className="mb-3 tracking-tight"
								style={{
									color: caseStudy.color,
									fontSize: "3rem",
									lineHeight: 1,
								}}
							>
								{item.metric}
							</div>
							<p
								className={
									theme === "dark" ? "text-neutral-400" : "text-neutral-600"
								}
							>
								{item.label}
							</p>
						</motion.div>
					))}
				</div>
			</Section>

			{/* Next Project CTA */}
			<section className="py-24 px-6 lg:px-8">
				<div className="max-w-5xl mx-auto flex flex-row sm:flex-row items-center justify-center gap-4">
					<motion.button
						onClick={onBack}
						className={`px-8 py-4 rounded-full transition-all duration-300 ${
							theme === "dark"
								? "bg-neutral-800 text-neutral-50 hover:bg-neutral-700"
								: "bg-neutral-200 text-neutral-950 hover:bg-neutral-300"
						}`}
						whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						Back to All Projects
					</motion.button>
					<motion.button
						onClick={() => {
							const currentIndex = data.findIndex(
								(cs: any) => cs.id === caseStudyId
							);
							const nextIndex = (currentIndex + 1) % data.length;
							const nextProject = data[nextIndex];
							if (onNextProject) {
								onNextProject(nextProject.id);
							}
						}}
						className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 ${
							theme === "dark"
								? "bg-neutral-50 text-neutral-950 hover:bg-neutral-200"
								: "bg-neutral-950 text-neutral-50 hover:bg-neutral-800"
						}`}
						whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						Next Project
						<ArrowRight className="w-5 h-5" />
					</motion.button>
				</div>
			</section>
		</div>
	);
}

function Section({
	title,
	children,
	theme,
	prefersReducedMotion,
}: {
	title: string;
	children: React.ReactNode;
	theme: Theme;
	prefersReducedMotion: boolean;
}) {
	return (
		<section className="px-6 lg:px-8 mb-24">
			<div className="max-w-5xl mx-auto">
				<motion.h2
					className="mb-12 tracking-tight leading-tight"
					style={{
						fontSize: "clamp(1.5rem, 3vw, 2rem)",
						fontWeight: 600,
						fontFamily: '"Outfit", sans-serif',
					}}
					initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					{title}
				</motion.h2>
				{children}
			</div>
		</section>
	);
}
