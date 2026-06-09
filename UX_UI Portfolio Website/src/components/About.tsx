import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Theme } from '../App';
import { Sparkles, Heart, Lightbulb } from 'lucide-react';
import profileImage from "/foto_profesional.jpg";


interface AboutProps {
  theme: Theme;
  prefersReducedMotion: boolean;
  data: {
    title: string;
    paragraphs: string[];
    values: Array<{
      title: string;
      description: string;
    }>;
  };
}

const valueIcons = [Sparkles, Heart, Lightbulb];

export default function About({ theme, prefersReducedMotion, data }: AboutProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="about"
			ref={ref}
			className={`py-24 px-6 lg:px-8 ${
				theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"
			}`}
		>
			<div className="max-w-7xl mx-auto mb-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
					{/* Left Column - Image */}
					<motion.div
						className="lg:col-span-5"
						initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
					>
						<div
							className={`aspect-[1/4] rounded-2xl overflow-hidden ${
								theme === "dark" ? "bg-neutral-800" : "bg-neutral-200"
							}`}
						>
							<img
								src={profileImage}
								alt="Portrait of Jinelle Flores"
								className="w-full h-auto object-cover"
							/>
						</div>
					</motion.div>

					{/* Right Column - Content */}
					<div className="lg:col-span-7">
						<motion.div
							initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: prefersReducedMotion ? 0 : 0.6,
								delay: 0.2,
							}}
						>
							<p
								className={`mb-4 tracking-wider uppercase ${
									theme === "dark" ? "text-neutral-500" : "text-neutral-500"
								}`}
							>
								About Me
							</p>
							<h2 className="mb-6 tracking-tight">{data.title}</h2>
							<div
								className={`space-y-4 mb-12 ${
									theme === "dark" ? "text-neutral-400" : "text-neutral-600"
								}`}
							>
								{data.paragraphs.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</div>
						</motion.div>
					</div>
				</div>
				{/* Values - 3 Column Card Grid */}
				<motion.div
					initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{
						duration: prefersReducedMotion ? 0 : 0.6,
						delay: 0.5,
					}}
					className="pt-16"
				>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{data.values.map((value, index) => {
							const Icon = valueIcons[index];
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
									animate={isInView ? { opacity: 1, y: 0 } : {}}
									transition={{
										duration: prefersReducedMotion ? 0 : 0.6,
										delay: 0.6 + index * 0.1,
									}}
									className={`p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 ${
										theme === "dark"
											? "bg-neutral-800 border border-neutral-700 hover:border-neutral-600"
											: "bg-white border border-neutral-100 shadow-sm hover:shadow-xl"
									}`}
								>
									{/* Icon Container with Subtle Accent */}
									<div
										className={`flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center mb-8 ${
											theme === "dark" ? "bg-neutral-700" : "bg-neutral-100"
										}`}
									>
										<Icon
											className={`w-10 h-10 ${
												theme === "dark" ? "text-indigo-400" : "text-indigo-600"
											}`}
										/>
									</div>

									{/* Card Content */}
									<h3 className="mb-3 text-2xl tracking-tight font-bold">
										{value.title}
									</h3>
									<p
										className={`text-base/relaxed ${
											theme === "dark" ? "text-neutral-400" : "text-neutral-600"
										}`}
									>
										{value.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}