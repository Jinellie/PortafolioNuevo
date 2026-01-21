import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Theme } from "../App";
import {
	Mail,
	Linkedin,
	Github,
	Send,
	CheckCircle,
	AlertCircle,
} from "lucide-react";
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

type FormStatus = "idle" | "submitting" | "success" | "error";

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
	const [formStatus, setFormStatus] = useState<FormStatus>("idle");
	const [statusMessage, setStatusMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormStatus("submitting");

		try {
			// Create mailto link as fallback
			const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
			const body = encodeURIComponent(
				`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
			);
			const mailtoLink = `mailto:${data.email}?subject=${subject}&body=${body}`;

			// Open default email client
			window.location.href = mailtoLink;

			// Show success message
			setFormStatus("success");
			setStatusMessage("Opening your email client...");

			// Reset form after delay
			setTimeout(() => {
				setFormData({ name: "", email: "", message: "" });
				setFormStatus("idle");
				setStatusMessage("");
			}, 3000);
		} catch (error) {
			setFormStatus("error");
			setStatusMessage(
				"Something went wrong. Please try again or email me directly."
			);

			setTimeout(() => {
				setFormStatus("idle");
				setStatusMessage("");
			}, 5000);
		}
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
			<div className="max-w-7xl mx-auto">
				{/* Polished Header Section */}
				<motion.div
					initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
					className="mb-16"
				>
					<div className="flex items-center gap-8 lg:gap-12">
						{/* Content */}
						<div className="hidden sm:block flex-shrink-0">
	<AnimatedAvatar theme={theme} />
</div>
						<div className="flex-1 space-y-4">
							<p
								className={`text-sm font-medium tracking-wider uppercase ${
									theme === "dark" ? "text-neutral-500" : "text-neutral-500"
								}`}
							>
								Get In Touch
							</p>

							<h2
								className={`text-4xl lg:text-5xl font-bold tracking-tight ${
									theme === "dark" ? "text-neutral-100" : "text-neutral-900"
								}`}
							>
								Let's Work Together
							</h2>

							<p
								className={`text-lg leading-relaxed max-w-2xl ${
									theme === "dark" ? "text-neutral-400" : "text-neutral-600"
								}`}
							>
								I'm always interested in hearing about new projects and
								opportunities. Whether you have a question or just want to say
								hi, feel free to reach out.
							</p>
						</div>
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
									className={`block mb-2 text-sm font-medium ${
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
									disabled={formStatus === "submitting"}
									className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
										theme === "dark"
											? "bg-neutral-900 border border-neutral-800 text-neutral-100 focus:border-neutral-600 focus:outline-none disabled:opacity-50"
											: "bg-neutral-100 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:outline-none disabled:opacity-50"
									}`}
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className={`block mb-2 text-sm font-medium ${
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
									disabled={formStatus === "submitting"}
									className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
										theme === "dark"
											? "bg-neutral-900 border border-neutral-800 text-neutral-100 focus:border-neutral-600 focus:outline-none disabled:opacity-50"
											: "bg-neutral-100 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:outline-none disabled:opacity-50"
									}`}
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className={`block mb-2 text-sm font-medium ${
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
									disabled={formStatus === "submitting"}
									className={`w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none ${
										theme === "dark"
											? "bg-neutral-900 border border-neutral-800 text-neutral-100 focus:border-neutral-600 focus:outline-none disabled:opacity-50"
											: "bg-neutral-100 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:outline-none disabled:opacity-50"
									}`}
								/>
							</div>

							{/* Status Message */}
							{statusMessage && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className={`flex items-center gap-2 p-4 rounded-lg ${
										formStatus === "success"
											? theme === "dark"
												? "bg-green-900/30 text-green-400"
												: "bg-green-100 text-green-700"
											: theme === "dark"
											? "bg-red-900/30 text-red-400"
											: "bg-red-100 text-red-700"
									}`}
								>
									{formStatus === "success" ? (
										<CheckCircle className="w-5 h-5" />
									) : (
										<AlertCircle className="w-5 h-5" />
									)}
									<span className="text-sm">{statusMessage}</span>
								</motion.div>
							)}

							<motion.button
								type="submit"
								disabled={formStatus === "submitting"}
								className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
									theme === "dark"
										? "bg-neutral-50 text-neutral-950 hover:bg-neutral-200 disabled:hover:bg-neutral-50"
										: "bg-neutral-950 text-neutral-50 hover:bg-neutral-800 disabled:hover:bg-neutral-950"
								}`}
								whileHover={{
									scale:
										prefersReducedMotion || formStatus === "submitting"
											? 1
											: 1.02,
								}}
								whileTap={{ scale: formStatus === "submitting" ? 1 : 0.98 }}
							>
								{formStatus === "submitting" ? "Sending..." : "Send Message"}
								<Send
									className={`w-4 h-4 ${
										formStatus === "submitting" ? "animate-pulse" : ""
									}`}
								/>
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
							<h3
								className={`mb-6 text-2xl font-bold tracking-tight ${
									theme === "dark" ? "text-neutral-100" : "text-neutral-900"
								}`}
							>
								Connect With Me
							</h3>
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
												className={`text-sm mb-1 ${
													theme === "dark"
														? "text-neutral-400"
														: "text-neutral-600"
												}`}
											>
												{link.label}
											</p>
											<p
												className={`font-medium ${
													theme === "dark"
														? "text-neutral-200"
														: "text-neutral-800"
												}`}
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
							<h4
								className={`mb-4 text-xl font-bold tracking-tight ${
									theme === "dark" ? "text-neutral-100" : "text-neutral-900"
								}`}
							>
								Current Availability
							</h4>
							<p
								className={`leading-relaxed ${
									theme === "dark" ? "text-neutral-400" : "text-neutral-600"
								}`}
							>
								I'm currently available for freelance projects and full-time
								opportunities. Let's discuss how we can work together to create
								something exceptional.
							</p>
							<div className="mt-6 flex items-center gap-3">
								<CheckCircle
									className={`w-5 h-5 ${
										theme === "dark" ? "text-green-400" : "text-green-600"
									}`}
								/>
								<span
									className={`font-medium ${
										theme === "dark" ? "text-neutral-300" : "text-neutral-700"
									}`}
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
						© 2026 Jinelle Flores. Scrolled this far? Let's connect!
					</p>
				</motion.div>
			</div>
		</section>
	);
}
