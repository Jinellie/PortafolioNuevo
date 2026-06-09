import { motion } from "motion/react";
import { Theme } from "../App";
import { CheckCircle2, ArrowRight, User, Wrench } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HeroCarousel } from "./ui/heroCarrusel";

interface ProcessStep {
	title: string;
	description: string;
}

interface ImpactItem {
	metric: string;
	label: string;
}

interface UserType {
	role: string;
	description: string;
}

interface KeyDecision {
	title: string;
	description: string;
}

interface ProcessArtifact {
	image: string;
	caption: string;
}

interface CaseStudyDetails {
	role: string;
	duration: string;
	team: string;
	tools: string[];
	problem: string;
	discovery?: string;
	users?: UserType[];
	insights: string[];
	constraints: string[];
	process: ProcessStep[];
	processArtifacts?: ProcessArtifact[];
	keyDecisions?: KeyDecision[];
	solution: string;
	impact: ImpactItem[];
	retrospective?: string;
}

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
	const details: CaseStudyDetails = caseStudy?.details;

	if (!caseStudy || !details) return null;

	const accentColor = caseStudy.color;

	return (
		<div className="pt-16">
			<div className="h-10"></div>

			{/* Hero */}
			<section className="px-6 lg:px-8 pt-24 pb-20">
				<div className="max-w-6xl mx-auto">
					<motion.header
						className="mb-20"
						initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
					>
						<span
							className={`inline-flex items-center rounded-full px-4 py-2 mb-6 text-xs uppercase tracking-widest ${
								theme === "dark"
									? "bg-neutral-800 text-neutral-300"
									: "bg-neutral-200 text-neutral-600"
							}`}
						>
							{caseStudy.category}
						</span>

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

						<p
							className={`max-w-3xl text-lg md:text-xl leading-relaxed mb-8 ${
								theme === "dark" ? "text-neutral-400" : "text-neutral-600"
							}`}
						>
							{caseStudy.description}
						</p>

						{/* Meta strip */}
						<div className="mt-8 flex flex-wrap gap-12">
							{[
								{ label: "Role", value: details.role },
								{ label: "Duration", value: details.duration },
								{ label: "Team", value: details.team },
							].map(({ label, value }) => (
								<div key={label}>
									<p
										className="text-xs uppercase tracking-widest mb-1"
										style={{ color: accentColor }}
									>
										{label}
									</p>
									<p
										className={`text-sm ${
											theme === "dark" ? "text-neutral-300" : "text-neutral-700"
										}`}
									>
										{value}
									</p>
								</div>
							))}
						</div>
					</motion.header>

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
					className={`max-w-4xl text-lg leading-relaxed ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}
				>
					{details.problem}
				</p>
			</Section>

			{/* Discovery — optional */}
			{details.discovery && (
				<Section
					title="Discovery"
					theme={theme}
					prefersReducedMotion={prefersReducedMotion}
				>
					<p
						className={`max-w-4xl leading-relaxed ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}
					>
						{details.discovery}
					</p>
				</Section>
			)}

			{/* Users — optional */}
			{details.users && details.users.length > 0 && (
				<Section
					title="Users"
					theme={theme}
					prefersReducedMotion={prefersReducedMotion}
				>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
						{details.users.map((user: UserType, index: number) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: prefersReducedMotion ? 0 : index * 0.08 }}
								className={`p-5 rounded-xl border ${
									theme === "dark"
										? "bg-neutral-900 border-neutral-800"
										: "bg-white border-neutral-200"
								}`}
							>
								<p
									className="text-sm font-semibold mb-2"
									style={{ color: accentColor }}
								>
									{user.role}
								</p>
								<p
									className={`text-sm leading-relaxed ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}
								>
									{user.description}
								</p>
							</motion.div>
						))}
					</div>
				</Section>
			)}

			{/* Key Insights */}
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
							className={`p-6 rounded-xl ${theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"}`}
						>
							<CheckCircle2
								className="w-6 h-6 mb-4"
								style={{ color: accentColor }}
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
								className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
								style={{ backgroundColor: accentColor }}
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

			{/* Design Process */}
			<Section
				title="Design Process"
				theme={theme}
				prefersReducedMotion={prefersReducedMotion}
			>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{details.process.map((step: ProcessStep, index: number) => (
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
									backgroundColor: `${accentColor}20`,
									color: accentColor,
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

			{/* Process Artifacts — optional */}
			{details.processArtifacts && details.processArtifacts.length > 0 && (
				<Section
					title="Process Artifacts"
					theme={theme}
					prefersReducedMotion={prefersReducedMotion}
				>
					<div className="mb-8">
						{details.processArtifacts.map(
							(artifact: ProcessArtifact, index: number) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: prefersReducedMotion ? 0 : 0.1 }}
								>
									<div
										className={`rounded-2xl overflow-hidden border mb-4 ${
											theme === "dark"
												? "border-neutral-800"
												: "border-neutral-200"
										}`}
									>
										<img
											src={artifact.image}
											alt={artifact.caption}
											className="w-full object-contain"
											style={{ maxHeight: "600px" }}
										/>
									</div>
									<p
										className={`mb-12 text-sm text-center ${
											theme === "dark" ? "text-neutral-500" : "text-neutral-500"
										}`}
									>
										{artifact.caption}
									</p>
								</motion.div>
							),
						)}
					</div>
				</Section>
			)}

			{/* Key Decisions — optional */}
			{details.keyDecisions && details.keyDecisions.length > 0 && (
				<Section
					title="Key Decisions"
					theme={theme}
					prefersReducedMotion={prefersReducedMotion}
				>
					<div className="space-y-8">
						{details.keyDecisions.map(
							(decision: KeyDecision, index: number) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										delay: prefersReducedMotion ? 0 : index * 0.08,
									}}
									className={`p-6 rounded-xl border-l-2`}
									style={{ borderColor: accentColor }}
								>
									<h4
										className="font-semibold mb-2 tracking-tight"
										style={{
											fontFamily: '"Outfit", sans-serif',
											fontSize: "1rem",
										}}
									>
										{decision.title}
									</h4>
									<p
										className={`leading-relaxed ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}
									>
										{decision.description}
									</p>
								</motion.div>
							),
						)}
					</div>
				</Section>
			)}

			{/* Solution */}
			<Section
				title="The Solution"
				theme={theme}
				prefersReducedMotion={prefersReducedMotion}
			>
				<p
					className={`max-w-4xl mb-8 leading-relaxed ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}
				>
					{details.solution}
				</p>
				<div
					className={`p-8 rounded-2xl ${theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"}`}
				>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<div className="flex items-center gap-3 mb-3">
								<User className="w-5 h-5" style={{ color: accentColor }} />
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
								<Wrench className="w-5 h-5" style={{ color: accentColor }} />
								<h4 className="tracking-tight">Tools Used</h4>
							</div>
							<div className="flex flex-wrap gap-2">
								{details.tools.map((tool: string, index: number) => (
									<span
										key={index}
										className={`px-3 py-1 rounded-full text-sm ${
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
					{details.impact.map((item: ImpactItem, index: number) => (
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
								style={{ color: accentColor, fontSize: "3rem", lineHeight: 1 }}
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

			{/* Retrospective — optional */}
			{details.retrospective && (
				<Section
					title="What I'd Do Differently"
					theme={theme}
					prefersReducedMotion={prefersReducedMotion}
				>
					<p
						className={`max-w-4xl leading-relaxed ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}
					>
						{details.retrospective}
					</p>
				</Section>
			)}

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
								(cs: any) => cs.id === caseStudyId,
							);
							const nextIndex = (currentIndex + 1) % data.length;
							const nextProject = data[nextIndex];
							if (onNextProject) onNextProject(nextProject.id);
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
