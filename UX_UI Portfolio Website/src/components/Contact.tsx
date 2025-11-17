import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Theme } from "../App";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import AnimatedAvatar from "./AnimatedAvatar";

interface ContactProps {
	theme: Theme;
	prefersReducedMotion: boolean;
	data: {
		email: string;
		linkedin: string;
		github: string;
		availability: string;
	};
}

export default function Contact({
	theme,
	prefersReducedMotion,
	data,
}: ContactProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const socialLinks = [
		{
			icon: Mail,
			label: "Email",
			href: `mailto:${data.email}`,
			text: data.email,
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: `https://${data.linkedin}`,
			text: data.linkedin,
		},
		{
			icon: Github,
			label: "GitHub",
			href: `https://${data.github}`,
			text: data.github,
		},
	];

	return (
		<section id="contact" ref={ref} className="relative py-24 px-6 lg:px-8">
			{/* ⭐ Your animated avatar here */}

			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
					className="mb-16"
				>
					{/* Wrap title in a flex container */}
          <div className="flex items-center gap-6 mb-6">
            
						<div className="flex-1">
							<p
								className={`mb-4 tracking-wider uppercase ${
									theme === "dark" ? "text-neutral-500" : "text-neutral-500"
								}`}
							>
								Get In Touch
							</p>
							<h2 className="tracking-tight">Let's Work Together</h2>
							<p
								className={`max-w-2xl ${
									theme === "dark" ? "text-neutral-400" : "text-neutral-600"
								}`}
							>
								I'm always interested in hearing about new projects and
								opportunities. Whether you have a question or just want to say
								hi, feel free to reach out.
							</p>
						</div>

						{/* Avatar on the right */}
						<AnimatedAvatar theme={theme} />
					</div>

					
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{
							duration: prefersReducedMotion ? 0 : 0.6,
							delay: 0.2,
						}}
					>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className={`block mb-2 ${
										theme === "dark" ? "text-neutral-300" : "text-neutral-700"
									}`}
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
										theme === "dark"
											? "bg-neutral-900 border border-neutral-800 text-neutral-100 focus:border-neutral-600 focus:outline-none"
											: "bg-neutral-100 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:outline-none"
									}`}
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className={`block mb-2 ${
										theme === "dark" ? "text-neutral-300" : "text-neutral-700"
									}`}
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
										theme === "dark"
											? "bg-neutral-900 border border-neutral-800 text-neutral-100 focus:border-neutral-600 focus:outline-none"
											: "bg-neutral-100 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:outline-none"
									}`}
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className={`block mb-2 ${
										theme === "dark" ? "text-neutral-300" : "text-neutral-700"
									}`}
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className={`w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none ${
										theme === "dark"
											? "bg-neutral-900 border border-neutral-800 text-neutral-100 focus:border-neutral-600 focus:outline-none"
											: "bg-neutral-100 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:outline-none"
									}`}
								/>
							</div>

							<motion.button
								type="submit"
								className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all duration-300 ${
									theme === "dark"
										? "bg-neutral-50 text-neutral-950 hover:bg-neutral-200"
										: "bg-neutral-950 text-neutral-50 hover:bg-neutral-800"
								}`}
								whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Send Message
								<Send className="w-4 h-4" />
							</motion.button>
						</form>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{
							duration: prefersReducedMotion ? 0 : 0.6,
							delay: 0.3,
						}}
						className="space-y-8"
					>
						<div>
							<h3 className="mb-6 tracking-tight">Connect With Me</h3>
							<div className="space-y-4">
								{socialLinks.map((link, index) => (
									<motion.a
										key={index}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
											theme === "dark"
												? "bg-neutral-900 hover:bg-neutral-800"
												: "bg-neutral-100 hover:bg-neutral-200"
										}`}
										whileHover={{ x: prefersReducedMotion ? 0 : 4 }}
										transition={{ duration: 0.2 }}
									>
										<div
											className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
												theme === "dark"
													? "bg-neutral-800 group-hover:bg-neutral-700"
													: "bg-neutral-200 group-hover:bg-neutral-300"
											}`}
										>
											<link.icon className="w-5 h-5" />
										</div>
										<div>
											<p
												className={`mb-1 ${
													theme === "dark"
														? "text-neutral-400"
														: "text-neutral-600"
												}`}
											>
												{link.label}
											</p>
											<p
												className={
													theme === "dark"
														? "text-neutral-200"
														: "text-neutral-800"
												}
											>
												{link.text}
											</p>
										</div>
									</motion.a>
								))}
							</div>
						</div>

						<div
							className={`p-8 rounded-2xl ${
								theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"
							}`}
						>
							<h4 className="mb-4 tracking-tight">Current Availability</h4>
							<p
								className={
									theme === "dark" ? "text-neutral-400" : "text-neutral-600"
								}
							>
								I'm currently available for freelance projects and full-time
								opportunities. Let's discuss how we can work together to create
								something exceptional.
							</p>
							<div className="mt-6 flex items-center gap-3">
								<div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
								<span
									className={
										theme === "dark" ? "text-neutral-300" : "text-neutral-700"
									}
								>
									{data.availability}
								</span>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Footer */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.6 }}
					className={`mt-24 pt-8 border-t text-center ${
						theme === "dark"
							? "border-neutral-800 text-neutral-500"
							: "border-neutral-200 text-neutral-500"
					}`}
				>
					<p>
						© 2024 Jinelle Flores. Designed & built with precision and care.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
