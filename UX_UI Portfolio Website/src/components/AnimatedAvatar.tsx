import { useEffect, useRef, useState } from "react";

interface Props {
	theme: "light" | "dark";
}

export default function AnimatedAvatar({ theme }: Props) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [mouse, setMouse] = useState({ x: 0, y: 0 });

	// Smooth / bouncy pupil movement
	const [pupil, setPupil] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouse = (e: MouseEvent) => {
			if (!wrapperRef.current) return;
			const rect = wrapperRef.current.getBoundingClientRect();
			setMouse({
				x: e.clientX - (rect.left + rect.width / 2),
				y: e.clientY - (rect.top + rect.height / 2),
			});
		};

		window.addEventListener("mousemove", handleMouse);
		return () => window.removeEventListener("mousemove", handleMouse);
	}, []);

	// Smoothed pupil physics
	useEffect(() => {
		const maxMove = 2;
		const targetX = Math.max(Math.min(mouse.x / 40, maxMove), -1);
		const targetY = Math.max(Math.min(mouse.y / 40, maxMove), -1);

		const smooth = 0.15; // damping / "cute bounce"

		let running = true;

		const update = () => {
			if (!running) return;

			setPupil((prev) => ({
				x: prev.x + (targetX - prev.x) * smooth,
				y: prev.y + (targetY - prev.y) * smooth,
			}));

			requestAnimationFrame(update);
		};

		const id = requestAnimationFrame(update);

		return () => {
			running = false;
			cancelAnimationFrame(id);
		};
	}, [mouse.x, mouse.y]);

	const eyeBg = "#ffffff";
	const pupilColor = "#0a0a0a";

	return (
		<div
			ref={wrapperRef}
			className="
        relative w-[140px] h-[140px] flex-shrink-0 rounded-full 
        bg-white overflow-hidden border-4 border-neutral-900
        animate-float
      "
		>
			{/* Base avatar illustration */}
			<img
				src="/file.svg"
				alt="avatar"
				className="w-full h-full object-cover"
			/>

			{/* Eyes overlay */}
			<svg
				width="300"
				height="300"
				viewBox="0 0 120 120"
				className="absolute inset-0 top-0 left-0"
			>
				{/* LEFT EYE */}
				<g>
					{/* white eye shape */}
					<ellipse cx="53" cy="46" rx="4" ry="5.5" fill={eyeBg} />

					{/* pupil (smooth movement) */}
					<ellipse
						cx={53 + pupil.x}
						cy={45 + pupil.y}
						rx="2.5"
						ry="3.5"
						fill={pupilColor}
					/>
				</g>

				{/* RIGHT EYE */}
				<g>
					<ellipse cx="73" cy="45" rx="4" ry="5.5" fill={eyeBg} />

					<ellipse
						cx={73 + pupil.x}
						cy={45 + pupil.y}
						rx="2.5"
						ry="3.5"
						fill={pupilColor}
					/>
				</g>
			</svg>
		</div>
	);
}
