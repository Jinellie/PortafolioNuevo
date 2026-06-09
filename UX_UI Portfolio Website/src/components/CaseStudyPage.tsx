import { motion, AnimatePresence } from "motion/react";
import { Theme } from "../App";
import {
	CheckCircle2,
	ArrowRight,
	User,
	Wrench,
	ZoomIn,
	ZoomOut,
	X,
	RotateCcw,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { HeroCarousel } from "./ui/heroCarrusel";
import { useState, useEffect, useCallback, useRef } from "react";

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

interface ArtifactModalProps {
	artifact: ProcessArtifact;
	theme: Theme;
	onClose: () => void;
	prefersReducedMotion: boolean;
	accentColor: string;
}

function ArtifactModal({
	artifact,
	theme,
	onClose,
	prefersReducedMotion,
	accentColor,
}: ArtifactModalProps) {
	const [zoom, setZoom] = useState(1);
	const [pan, setPan] = useState({ x: 0, y: 0 });
	const dragState = useRef<{
		dragging: boolean;
		startX: number;
		startY: number;
		originX: number;
		originY: number;
	}>({
		dragging: false,
		startX: 0,
		startY: 0,
		originX: 0,
		originY: 0,
	});
	const hasDragged = useRef(false);

	const MIN_ZOOM = 0.5;
	const MAX_ZOOM = 4;
	const ZOOM_STEP = 0.25;

	const zoomIn = useCallback(
		() => setZoom((z) => Math.min(z + ZOOM_STEP, MAX_ZOOM)),
		[],
	);
	const zoomOut = useCallback(
		() => setZoom((z) => Math.max(z - ZOOM_STEP, MIN_ZOOM)),
		[],
	);
	const resetView = useCallback(() => {
		setZoom(1);
		setPan({ x: 0, y: 0 });
	}, []);

	// Reset pan when zoom returns to 1
	useEffect(() => {
		if (zoom === 1) setPan({ x: 0, y: 0 });
	}, [zoom]);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (e.key === "+" || e.key === "=") zoomIn();
			if (e.key === "-") zoomOut();
			if (e.key === "0") resetView();
		};
		window.addEventListener("keydown", handleKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", handleKey);
			document.body.style.overflow = "";
		};
	}, [onClose, zoomIn, zoomOut, resetView]);

	const handleWheel = useCallback((e: React.WheelEvent) => {
		e.preventDefault();
		setZoom((z) =>
			e.deltaY < 0
				? Math.min(z + ZOOM_STEP, MAX_ZOOM)
				: Math.max(z - ZOOM_STEP, MIN_ZOOM),
		);
	}, []);

	// Pointer drag handlers
	const onPointerDown = useCallback(
		(e: React.PointerEvent) => {
			if (zoom <= 1) return;
			e.currentTarget.setPointerCapture(e.pointerId);
			dragState.current = {
				dragging: true,
				startX: e.clientX,
				startY: e.clientY,
				originX: pan.x,
				originY: pan.y,
			};
			hasDragged.current = false;
		},
		[zoom, pan],
	);

	const onPointerMove = useCallback((e: React.PointerEvent) => {
		if (!dragState.current.dragging) return;
		const dx = e.clientX - dragState.current.startX;
		const dy = e.clientY - dragState.current.startY;
		if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasDragged.current = true;
		setPan({
			x: dragState.current.originX + dx,
			y: dragState.current.originY + dy,
		});
	}, []);

	const onPointerUp = useCallback((e: React.PointerEvent) => {
		dragState.current.dragging = false;
	}, []);

	const onImageClick = useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation();
			if (hasDragged.current) {
				hasDragged.current = false;
				return;
			}
			if (zoom < MAX_ZOOM) zoomIn();
			else resetView();
		},
		[zoom, zoomIn, resetView],
	);

	const onBackdropClick = useCallback(() => {
		if (!hasDragged.current) onClose();
	}, [onClose]);

	const isDragging = zoom > 1;
	const cursor = isDragging
		? dragState.current.dragging
			? "grabbing"
			: "grab"
		: zoom >= MAX_ZOOM
			? "zoom-out"
			: "zoom-in";

	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 z-50 flex flex-col"
				style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
				initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
				onClick={onBackdropClick}
			>
				{/* Toolbar */}
				<div
					className="flex items-center justify-between px-4 py-3 flex-shrink-0"
					style={{
						borderBottom: "1px solid rgba(255,255,255,0.1)",
						backgroundColor: "rgba(0,0,0,0.6)",
					}}
					onClick={(e) => e.stopPropagation()}
				>
					<p className="text-sm text-neutral-400 truncate max-w-xs lg:max-w-lg">
						{artifact.caption}
					</p>

					<div className="flex items-center gap-2 flex-shrink-0 ml-4">
						<button
							onClick={zoomOut}
							disabled={zoom <= MIN_ZOOM}
							className="p-2 rounded-lg transition-colors disabled:opacity-30 hover:bg-white/10 text-neutral-300"
							aria-label="Zoom out"
							title="Zoom out (−)"
						>
							<ZoomOut className="w-4 h-4" />
						</button>

						<button
							onClick={resetView}
							className="px-3 py-1.5 rounded-lg text-xs font-mono transition-colors hover:bg-white/10 text-neutral-300 min-w-[3.5rem] text-center"
							aria-label="Reset view"
							title="Reset view (0)"
						>
							{Math.round(zoom * 100)}%
						</button>

						<button
							onClick={zoomIn}
							disabled={zoom >= MAX_ZOOM}
							className="p-2 rounded-lg transition-colors disabled:opacity-30 hover:bg-white/10 text-neutral-300"
							aria-label="Zoom in"
							title="Zoom in (+)"
						>
							<ZoomIn className="w-4 h-4" />
						</button>

						<div className="w-px h-5 bg-white/20 mx-1" />

						<button
							onClick={resetView}
							className="p-2 rounded-lg transition-colors hover:bg-white/10 text-neutral-300"
							aria-label="Reset view"
							title="Reset (0)"
						>
							<RotateCcw className="w-4 h-4" />
						</button>

						<button
							onClick={onClose}
							className="p-2 rounded-lg transition-colors hover:bg-white/10 text-neutral-300"
							aria-label="Close"
							title="Close (Esc)"
						>
							<X className="w-4 h-4" />
						</button>
					</div>
				</div>

				{/* Image area */}
				<div
					className="flex-1 flex items-center justify-center overflow-hidden"
					onWheel={handleWheel}
					onClick={onBackdropClick}
					style={{ cursor }}
				>
					<motion.img
						src={artifact.image}
						alt={artifact.caption}
						onClick={onImageClick}
						onPointerDown={onPointerDown}
						onPointerMove={onPointerMove}
						onPointerUp={onPointerUp}
						onPointerCancel={onPointerUp}
						animate={{
							scale: zoom,
							x: pan.x,
							y: pan.y,
						}}
						transition={
							dragState.current.dragging || prefersReducedMotion
								? { duration: 0 }
								: { type: "spring", stiffness: 300, damping: 30 }
						}
						style={{
							maxWidth: "90vw",
							maxHeight: "80vh",
							objectFit: "contain",
							transformOrigin: "center center",
							cursor,
							userSelect: "none",
							touchAction: "none",
						}}
						draggable={false}
					/>
				</div>

				{/* Keyboard hint */}
				<div
					className="flex items-center justify-center gap-4 py-2 flex-shrink-0"
					style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
					onClick={(e) => e.stopPropagation()}
				>
					{[
						{ keys: "+ / −", label: "zoom" },
						{ keys: "scroll", label: "zoom" },
						{ keys: "drag", label: "pan" },
						{ keys: "0", label: "reset" },
						{ keys: "Esc", label: "close" },
					].map(({ keys, label }) => (
						<span key={keys} className="text-xs text-neutral-600">
							<kbd className="font-mono text-neutral-500">{keys}</kbd>{" "}
							<span>{label}</span>
						</span>
					))}
				</div>
			</motion.div>
		</AnimatePresence>
	);
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
	const [activeArtifact, setActiveArtifact] = useState<ProcessArtifact | null>(
		null,
	);

	if (!caseStudy || !details) return null;

	const accentColor = caseStudy.color;

	return (
		<div className="pt-16">
			{activeArtifact && (
				<ArtifactModal
					artifact={activeArtifact}
					theme={theme}
					onClose={() => setActiveArtifact(null)}
					prefersReducedMotion={prefersReducedMotion}
					accentColor={accentColor}
				/>
			)}

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
									<button
										onClick={() => setActiveArtifact(artifact)}
										className={`w-full text-left group rounded-2xl overflow-hidden border mb-4 relative transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 ${
											theme === "dark"
												? "border-neutral-800 hover:border-neutral-600"
												: "border-neutral-200 hover:border-neutral-400"
										}`}
										aria-label={`Zoom in: ${artifact.caption}`}
									>
										<img
											src={artifact.image}
											alt={artifact.caption}
											className="w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
											style={{ maxHeight: "600px" }}
											draggable={false}
										/>
										{/* Zoom hint overlay */}
										<div
											className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
											style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
										>
											<div
												className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
												style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
											>
												<ZoomIn className="w-4 h-4 text-white" />
												<span className="text-white text-sm font-medium">
													Click to zoom
												</span>
											</div>
										</div>
									</button>
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
