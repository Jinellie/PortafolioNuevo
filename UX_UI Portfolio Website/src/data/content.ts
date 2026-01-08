export const contentData = {
	personal: {
		name: "Jinelle Flores",
		role: "UX/UI Designer & Developer",
		heroTagline: "Turning complex systems into usable products.",
		heroDescription:
			"UX/UI Designer & Developer working end to end — from strategy to implementation. Focused on fintech, AI, and complex systems.",
		email: "jinelleflores@gmail.com",
		linkedin: "linkedin.com/in/jinelle-flores",
		github: "github.com/Jinellie",
		phone: "+52 833 266 6331",
		availability: "Available for new opportunities",
	},

	about: {
		title: "Designing clarity in complex systems",
		paragraphs: [
			"I am a UX/UI Designer and Developer who turns complex, large-scale systems into intuitive products people trust. I design for enterprise banking, logistics, education, and innovation-driven platforms, with a focus on high-impact, data-heavy environments.",
			"At Banorte, Mexico’s second-largest bank, I have shaped core parts of the enterprise banking platform, contributing to over 900 screens used daily by more than 100,000 business customers.",
			"I bridge strategy, interaction design, and implementation. I work closely with engineers, design with scale and buildability in mind, and mentor junior designers. I am especially interested in conversational UI and AI-powered experiences that solve real problems.",
			"I design for clarity, accessibility, and measurable impact.",
		],
		values: [
			{
				title: "User-Centered Innovation",
				description:
					"I start with user research and pain points, then craft solutions that balance user needs with business objectives and technical constraints.",
			},
			{
				title: "Design Systems Thinking",
				description:
					"Building scalable component libraries and design tokens that maintain consistency while empowering teams to move faster.",
			},
			{
				title: "Cross-Functional Impact",
				description:
					"I bridge design and development, ensuring pixel-perfect implementation and seamless handoffs that bring designs to life.",
			},
		],
	},

	caseStudies: [
		{
			id: "metepori-logistics",
			title: "Metepori Logistics Management System",
			category: "Logistics Platform Design",
			description:
				"User-centered logistics dashboard that reduced administrative task time by 50% for 90+ employees",
			thumbnail: "./covers/Metepori.png",
			year: "2025",
			color: "#10b981",
			details: {
				role: "UX/UI Designer & Software Developer Consultant",
				duration: "6 months (Jan 2025 - Jun 2025)",
				team: "Client Stakeholders, Business Operations Team, Solo Designer/Developer",
				tools: ["Figma", "React", "Firebase", "Process Flows", "Wireframing"],
				problem:
					"The client's logistics operations suffered from manual processes, fragmented package tracking, and poor financial visibility. Employees spent excessive time on administrative tasks due to inefficient workflows and lack of centralized data management.",
				insights: [
					"40+ business requirements identified through client interviews",
					"Employees spent 50% of their time on manual data entry and tracking",
					"No centralized system for package status or financial insights",
					"Cross-department communication gaps caused delivery delays",
				],
				constraints: [
					"Limited budget requiring solo designer/developer approach",
					"Must integrate with existing package tracking systems",
					"90+ employees with varying technical skill levels",
					"Tight deadline with phased rollout requirements",
				],
				process: [
					{
						title: "Requirements Gathering",
						description:
							"Led end-to-end UX/UI design process as consultant, working directly with clients to translate 40+ business requirements into user-centered solution",
					},
					{
						title: "Process Flow Design",
						description:
							"Created comprehensive process flows and wireframes mapping package lifecycle from receipt to delivery",
					},
					{
						title: "Dashboard Design",
						description:
							"Designed user-friendly logistics dashboard with improved package tracking, financial insights, and administrative workflow optimization",
					},
					{
						title: "Implementation & Testing",
						description:
							"Implemented design using React and Firebase, ensuring seamless user experience from concept to deployment",
					},
				],
				solution:
					"A centralized logistics management system featuring real-time package tracking, automated workflows, financial reporting dashboards, and multi-role access controls. The solution streamlines administrative tasks through intelligent process flows and data visualization.",
				impact: [
					{ metric: "50%", label: "Reduction in admin task time" },
					{ metric: "90+", label: "Employees using platform" },
					{ metric: "40+", label: "Business requirements solved" },
					{ metric: "100%", label: "On-time delivery improvement" },
				],
				annotations: [
					{
						x: 0.5,
						y: 0.15,
						text: "Multi-level filtering for precise data access",
					},
					{ x: 0.9, y: 0.1, text: "View toggle accommodates user preferences" },
					{
						x: 0.85,
						y: 0.4,
						text: "Color-coded status badges provide instant recognition",
					},
					{
						x: 0.5,
						y: 0.35,
						text: "Sortable columns enable custom organization",
					},
				],
			},
			heroCarousel: [
				{
					image: "./proyectos/METEPORIlogin.png",
					annotations: [
						{
							number: 1,
							description:
								" Split-screen design balances form functionality with brand storytelling",
						},
						{
							number: 2,
							description: "Social login option reduces signup friction",
						},
						{
							number: 3,
							description:
								" Illustration communicates value proposition immediately",
						},
					],
				},
				{
					image: "./proyectos/METEPORItabla.png",
					annotations: [
						{
							number: 1,
							description: "Multi-level filtering for precise data access",
						},
						{
							number: 2,
							description:
								"View toggle (cards/table) accommodates different user preferences",
						},
						{
							number: 3,
							description:
								"Color-coded status badges provide instant package state recognition",
						},
						{
							number: 4,
							description: "Sortable columns enable custom data organization",
						},
					],
				},
				{
					image: "./proyectos/METEPORIcards.png",
					annotations: [
						{
							number: 1,
							description:
								"Card layout groups related info visually - easier scanning than tables",
						},
						{
							number: 2,
							description:
								"Action buttons (Devolución, Imprimir QR) accessible without menu",
						},
						{
							number: 3,
							description:
								"Key metrics (quantity, price, destination) prominently displayed",
						},
					],
				},
				{
					image: "./proyectos/METEPORIeliminar.png",
					annotations: [
						{
							number: 1,
							description:
								"Destructive action requires explicit confirmation - prevents costly mistakes",
						},
						{
							number: 2,
							description:
								"Order details repeated in modal to ensure user context",
						},
						{
							number: 3,
							description:
								"Visual hierarchy: Cancel (outline) vs. Delete (solid red)",
						},
					],
				},
				{
					image: "./proyectos/METEPORIarchivo.png",
					annotations: [
						{
							number: 1,
							description:
								"Drag-and-drop zone reduces friction in bulk data entry",
						},
						{
							number: 2,
							description: "Template download ensures data format compliance",
						},
						{
							number: 3,
							description:
								"Two-step process (upload, confirm) prevents accidental imports",
						},
					],
				},
			],
		},
		{
			id: "maes-platform",
			title: "MAES Mentorship Platform",
			category: "Educational Platform Design",
			description:
				"Scalable mentorship platform serving 3,000+ users with gamification-driven engagement",
			thumbnail: "./covers/MAES.png",
			year: "2024-2025",
			color: "#8b5cf6",
			details: {
				role: "UX/UI Designer & QA Tester",
				duration: "10 months (Aug 2024 - Jun 2025)",
				team: "3 Designers, 5 Developers, Project Manager, Academic Advisors",
				tools: [
					"Figma",
					"Component Libraries",
					"User Flows",
					"Storyboards",
					"Gamification Design",
				],
				problem:
					"The institution needed a platform to manage mentorship programs for 3,000+ students, but existing solutions lacked engagement features, had poor admin workflows, and didn't scale to support the volume of mentor-student coordination required.",
				insights: [
					"Students showed low engagement with traditional mentorship programs",
					"Administrative staff spent 15+ hours weekly on manual mentor coordination",
					"No centralized system for tracking mentorship progress and outcomes",
					"Accessibility and mobile responsiveness were critical for student adoption",
				],
				constraints: [
					"Must support 3,000+ concurrent users with diverse technical capabilities",
					"Integration with existing student information systems",
					"Limited development resources requiring efficient component reuse",
					"Academic calendar constraints for phased rollout",
				],
				process: [
					{
						title: "User Research & Personas",
						description:
							"Interviewed students, mentors, and administrators to understand pain points and create user personas",
					},
					{
						title: "Component Library Design",
						description:
							"Authored scalable component library with 30+ reusable components ensuring design system continuity",
					},
					{
						title: "User Flow Optimization",
						description:
							"Created storyboards and user flows that streamlined mentor coordination and administrative workflows",
					},
					{
						title: "Gamification Integration",
						description:
							"Designed gamification elements including achievements, leaderboards, and progress tracking to boost engagement",
					},
				],
				solution:
					"An intuitive mentorship platform featuring gamified engagement, streamlined admin workflows, scalable component architecture, and mobile-responsive design. The platform includes achievement systems, leaderboards, appointment scheduling, and comprehensive progress tracking.",
				impact: [
					{ metric: "25%", label: "Increase in user engagement" },
					{ metric: "3,000+", label: "Users managed" },
					{ metric: "30+", label: "Reusable components" },
					{ metric: "1st Place", label: "Expo Ingenierías Software Category" },
				],
				annotations: [
					{
						x: 0.5,
						y: 0.25,
						text: "Podium visualization makes top performers recognizable",
					},
					{
						x: 0.5,
						y: 0.45,
						text: "User position highlighted for quick self-location",
					},
					{
						x: 0.85,
						y: 0.45,
						text: "XP system provides clear progression metric",
					},
					{ x: 0.5, y: 0.15, text: "Division filter allows fair comparison" },
				],
			},
			heroCarousel: [
				{
					image: "./proyectos/MAEmovil.png",
					annotations: [
						{
							number: 1,
							description:
								"Podium visualization makes top performers immediately recognizable",
						},
						{
							number: 2,
							description:
								"User's position highlighted in yellow for quick self-location",
						},
						{
							number: 3,
							description: "XP system provides clear progression metric",
						},
						{
							number: 4,
							description:
								"Division filter allows fair comparison within peer groups",
						},
					],
				},
				{
					image: "./proyectos/MAEleaderboard.png",
					annotations: [
						{
							number: 1,
							description:
								"Responsive design maintains visual hierarchy across devices",
						},
						{
							number: 2,
							description:
								"Highlighted user row creates immediate personal connection",
						},
						{
							number: 3,
							description:
								"Sidebar navigation provides clear context switching",
						},
					],
				},
				{
					image: "./proyectos/MAEhome.png",
					annotations: [
						{
							number: 1,
							description:
								"Action-oriented CTAs with gradient design guide user workflow",
						},
						{
							number: 2,
							description:
								"Social proof through group tutoring increases participation",
						},
						{
							number: 3,
							description:
								"Carousel pattern allows content discovery without overwhelming",
						},
					],
				},
				{
					image: "./proyectos/MAEperfil.png",
					annotations: [
						{
							number: 1,
							description:
								"Achievement showcase with progress indicators maintains motivation",
						},
						{
							number: 2,
							description:
								"Virtual currency system (300 coins) adds gamification layer",
						},
						{
							number: 3,
							description:
								"Schedule at-a-glance with color coding for quick parsing",
						},
					],
				},
			],
		},
		{
			id: "retronet-monitoring",
			title: "RetroNet Network Monitoring Platform",
			category: "Enterprise Dashboard Design",
			description:
				"AI-powered network capacity monitoring platform that streamlined report generation by 70%",
			thumbnail: "./covers/Retronet.png",
			year: "2025",
			color: "#6366f1",
			details: {
				role: "UX/UI Designer & Fullstack Developer",
				duration: "4 months (Mar 2025 - Jun 2025)",
				team: "Client (Xcien), Network Engineers, Solo Designer/Developer",
				tools: [
					"Figma",
					"React",
					"AI/Conversational UI",
					"Data Visualization",
					"Dashboard Design",
				],
				problem:
					"Xcien's network engineers struggled with complex technical data scattered across multiple systems, requiring hours to generate executive reports. The lack of accessible visualizations made capacity planning difficult for non-technical stakeholders.",
				insights: [
					"Network engineers spent 10+ hours weekly compiling capacity reports",
					"Executive stakeholders couldn't easily interpret raw technical data",
					"No centralized system for monitoring network usage trends",
					"Report generation required manual data aggregation from multiple sources",
				],
				constraints: [
					"Must integrate with existing network monitoring infrastructure",
					"Real-time data processing requirements for accurate capacity tracking",
					"Security and access control for sensitive network information",
					"Support for both technical and non-technical user personas",
				],
				process: [
					{
						title: "Technical Requirements Analysis",
						description:
							"Collaborated with network engineers to understand data structures and reporting needs",
					},
					{
						title: "Dashboard UI Design",
						description:
							"Translated complex technical data into accessible dashboard visualizations with clear information hierarchy",
					},
					{
						title: "Conversational UI Development",
						description:
							"Built AI-powered chatbot for natural language data queries, making technical data accessible to non-technical users",
					},
					{
						title: "Report Generation System",
						description:
							"Designed automated report generation system for executive-level summaries and stakeholder presentations",
					},
				],
				solution:
					"A comprehensive network capacity monitoring platform featuring real-time dashboard visualizations, AI-powered conversational UI for natural language queries, and automated report generation. The solution bridges the gap between technical data and business insights.",
				impact: [
					{ metric: "70%", label: "Reduction in report generation time" },
					{ metric: "AI-Powered", label: "Conversational UI chatbot" },
					{ metric: "Real-time", label: "Network capacity monitoring" },
					{ metric: "Executive", label: "Automated report summaries" },
				],
				annotations: [
					{
						x: 0.2,
						y: 0.3,
						text: "At-a-glance network health using circular progress",
					},
					{
						x: 0.5,
						y: 0.35,
						text: "Usage level categorization helps prioritize actions",
					},
					{ x: 0.2, y: 0.6, text: "Critical alerts front and center" },
					{ x: 0.7, y: 0.7, text: "Dual-axis chart for capacity planning" },
				],
			},
			heroCarousel: [
				{
					image: "./proyectos/RETRONETgrafica.png",
					annotations: [
						{
							number: 1,
							description: "Clear hierarchy with task-oriented heading",
						},
						{
							number: 2,
							description: "Contextual filtering for multi-network management",
						},
						{
							number: 3,
							description:
								"Critical status with clear visual hierarchy - 99% warrants immediate attention",
						},
						{
							number: 4,
							description:
								"Progressive disclosure: time-series data shows trends without overwhelming users",
						},
					],
				},
				{
					image: "./proyectos/RETRONETdashboard.png",
					annotations: [
						{
							number: 1,
							description:
								"At-a-glance network health using circular progress for quick scanning",
						},
						{
							number: 2,
							description:
								"Usage level categorization helps prioritize admin actions",
						},
						{
							number: 3,
							description:
								"Critical alerts front and center - multiple instances signal systemic issue",
						},
						{
							number: 4,
							description:
								"Dual-axis chart comparing usage vs. capacity for capacity planning",
						},
					],
				},
				{
					image: "./proyectos/RETRONETmenu.png",
					annotations: [
						{
							number: 1,
							description: "Icon + label navigation reduces cognitive load",
						},
						{
							number: 2,
							description:
								"Separated admin functions prevent accidental access",
						},
						{
							number: 3,
							description: "Persistent user context and branding",
						},
					],
				},
				{
					image: "./proyectos/RETRONETroles.png",
					annotations: [
						{
							number: 1,
							description: "Bulk management capabilities for admin efficiency",
						},
						{
							number: 2,
							description: "Inline editing prevents context switching",
						},
						{
							number: 3,
							description: "Visual distinction between admin and user roles",
						},
					],
				},
			],
		},
		{
			id: "dream-lab",
			title: "DREAM Lab Booking System",
			category: "Innovation Space Management",
			description:
				"AI-enhanced booking platform that reduced friction by 40% for new users",
			thumbnail: "./covers/Dreamlab.png",
			year: "2024",
			color: "#3b82f6",
			details: {
				role: "UX/UI Designer & Fullstack Developer",
				duration: "5 months (Feb 2024 - Jun 2024)",
				team: "2 Designers, 4 Developers, Lab Manager, Student Users",
				tools: [
					"Figma",
					"React",
					"Node.js",
					"AI Integration",
					"Mobile Design",
					"Voice UI",
				],
				problem:
					"The innovation lab lacked an efficient booking system, leading to scheduling conflicts, underutilized resources, and poor user experience. Students struggled with complex booking processes and had no visibility into equipment availability.",
				insights: [
					"60% of booking attempts abandoned due to complex multi-step process",
					"Lab resources operated at only 45% capacity due to poor visibility",
					"New users took 15+ minutes to complete first booking",
					"Mobile access critical as 80% of students book on-the-go",
				],
				constraints: [
					"Must support three distinct user roles (students, mentors, administrators)",
					"Mobile-responsive design critical for student adoption",
					"Integration with existing lab equipment inventory system",
					"Accessibility requirements for diverse student population",
				],
				process: [
					{
						title: "User Research & Personas",
						description:
							"Conducted user interviews and created personas for three user roles to understand booking patterns and pain points",
					},
					{
						title: "Complete UX/UI Design",
						description:
							"Spearheaded complete UX/UI design with 30+ features across three user roles, including mobile-responsive interface",
					},
					{
						title: "AI Integration",
						description:
							"Integrated AI-powered personalized recommendations and voice assistant to reduce booking friction",
					},
					{
						title: "Full-Stack Implementation",
						description:
							"Contributed to full-stack implementation using React and Node.js, ensuring seamless design-to-development handoff",
					},
				],
				solution:
					"A comprehensive booking platform featuring AI-powered recommendations, voice-activated booking, real-time availability tracking, and mobile-optimized interface. The system includes personalized space suggestions, equipment management, and streamlined workflows for all user roles.",
				impact: [
					{ metric: "40%", label: "Reduction in booking friction" },
					{ metric: "30+", label: "Features designed" },
					{ metric: "3 Roles", label: "User types supported" },
					{ metric: "Mobile-First", label: "Cross-platform experience" },
				],
				annotations: [
					{ x: 0.3, y: 0.4, text: "Gamification drives engagement" },
					{
						x: 0.5,
						y: 0.5,
						text: "Priority points create competitive element",
					},
					{ x: 0.7, y: 0.5, text: "Upcoming reservations reduce no-shows" },
					{
						x: 0.5,
						y: 0.15,
						text: "Clear logout action prevents accidental navigation",
					},
				],
			},
			heroCarousel: [
				{
					image: "./proyectos/DREAMLABperfil.png",
					annotations: [
						{
							number: 1,
							description:
								"Gamification drives engagement - progress bars motivate completion",
						},
						{
							number: 2,
							description: "Prominently displayed priority points create competitive element",
						},
						{
							number: 3,
							description:
								"Upcoming reservations prominently displayed to reduce no-shows",
						},
						{
							number: 4,
							description: "Clear logout action prevents accidental navigation",
						},
					],
				},
				{
					image: "./proyectos/DREAMLABreserva.png",
					annotations: [
						{
							number: 1,
							description:
								"3D visualization helps users understand physical space layout",
						},
						{
							number: 2,
							description:
								"Calendar-first design aligns with user mental model",
						},
						{
							number: 3,
							description:
								"Competitive booking info (10 reservations/20 spots) creates urgency",
						},
						{
							number: 4,
							description:
								"Capacity slider provides flexible group size selection",
						},
					],
				},
				{
					image: "./proyectos/DREAMLABequipment.png",
					annotations: [
						{
							number: 1,
							description:
								"Visual product cards with +/- controls for intuitive quantity selection",
						},
						{
							number: 2,
							description:
								"Reduced cognitive load - users see real-time selection summary",
						},
						{
							number: 3,
							description: "Clear CTA to move forward in booking flow",
						},
					],
				},
			],
		},
	],

	designProcess: [
		{
			title: "Research",
			description:
				"User interviews, surveys, competitive analysis, and stakeholder collaboration to uncover pain points and opportunities.",
			color: "#3B82F6",
		},
		{
			title: "Define",
			description:
				"Synthesize insights into user personas, journey maps, and clear problem statements aligned with business goals.",
			color: "#8B5CF6",
		},
		{
			title: "Ideate",
			description:
				"Explore solutions through wireframing, user flows, and collaborative workshops that push creative boundaries.",
			color: "#EC4899",
		},
		{
			title: "Design",
			description:
				"Create high-fidelity mockups, interactive prototypes, and scalable component libraries with design tokens.",
			color: "#F59E0B",
		},
		{
			title: "Test",
			description:
				"Validate assumptions through usability testing, A/B experiments, and continuous feedback with stakeholders.",
			color: "#10B981",
		},
		{
			title: "Deliver",
			description:
				"Collaborate with engineering on pixel-perfect implementation, measure impact, and iterate based on data.",
			color: "#06B6D4",
		},
	],

	skills: [
		{
			category: "Design",
			items: [
				"User Research",
				"Wireframing",
				"Prototyping",
				"Mobile Design",
				"Design Systems",
				"Design Tokens",
				"Motion Design",
				"Conversational UI",
				"Figma",
			],
		},
		{
			category: "Development",
			items: [
				"React",
				"Next.js",
				"JavaScript",
				"HTML/CSS",
				"Tailwind CSS",
				"Shadcn",
				"Node.js",
				"Kotlin",
				"SQL",
			],
		},
		{
			category: "Tools & Platforms",
			items: [
				"Figma",
				"GitHub",
				"Cypress",
				"Firebase",
				"Azure",
				"Component Libraries",
				"Design Documentation",
			],
		},
		{
			category: "Core Competencies",
			items: [
				"Design Thinking",
				"Cross-functional Collaboration",
				"Stakeholder Communication",
				"Project Management",
				"Technical Guidance",
				"User Personas",
				"Journey Mapping",
				"Accessibility (WCAG)",
			],
		},
	],

	experience: [
		{
			company: "Banorte",
			role: "UX/UI Designer",
			period: "Jun 2025 - Present",
			location: "Mexico",
			achievements: [
				"Designed 900+ screens and interactive prototypes for enterprise banking platform serving 100,000+ business customers",
				"Enhanced design system efficiency by 40% through component standardization and design tokens",
				"Delivered pixel-perfect mockups ensuring accessibility and UI guideline adherence",
				"Collaborated with Product and Customer Experience teams on complete platform redesign",
			],
		},
		{
			company: "Banorte",
			role: "Digital Banking Intern",
			period: "Jan 2025 - Jun 2025",
			location: "Mexico",
			achievements: [
				"Crafted comprehensive digital gift registry proposal with responsive web and mobile prototypes",
				"Conducted user research through surveys and interviews, creating user personas",
				"Identified 5+ critical pain points that informed design strategy and feature prioritization",
				"Engaged with mobile design team on research initiatives shaping UI patterns",
			],
		},
		{
			company: "Metepori",
			role: "UX/UI Designer & Software Developer Consultant",
			period: "Jan 2025 - Jun 2025",
			location: "Consulting",
			achievements: [
				"Led end-to-end UX/UI design process, translating 40+ business requirements into user-centered solution",
				"Reduced administrative task time by 50% for 90+ employees through improved workflows",
				"Implemented design using React and Firebase with seamless user experience",
				"Created comprehensive process flows and financial insights dashboard",
			],
		},
	],

	projects: [
		{
			name: "MAES Web Application",
			role: "UX/UI Designer & QA Tester",
			period: "Aug 2024 - Jun 2025",
			description:
				"Mentorship platform serving 3,000+ users with scalable component library and gamification",
			achievements: [
				"Authored scalable component library with 30+ reusable components",
				"Increased user engagement by 25% through gamification elements",
				"Mentored junior designers in UX/UI principles",
				"Won 1st place in Software Category at Expo Ingenierías",
			],
		},
		{
			name: "RetroNet Network Monitoring Platform",
			role: "UX/UI Designer & Fullstack Developer",
			period: "Mar 2025 - Jun 2025",
			description:
				"AI-powered network capacity monitoring with conversational UI",
			achievements: [
				"Streamlined report generation by estimated 70% through dashboard visualizations",
				"Built AI-powered conversational UI chatbot for natural language data queries",
				"Created executive-level automated report generation system",
				"Translated complex technical data into accessible visualizations",
			],
		},
		{
			name: "DREAM Lab Web Application",
			role: "UX/UI Designer & Fullstack Developer",
			period: "Feb 2024 - Jun 2024",
			description:
				"Innovation lab booking platform with AI recommendations and voice assistant",
			achievements: [
				"Designed 30+ features across three user roles with mobile-responsive interface",
				"Reduced booking friction by 40% through improved user flows and AI recommendations",
				"Integrated voice assistant for enhanced accessibility",
				"Contributed to full-stack implementation with React and Node.js",
			],
		},
	],

	education: {
		degree: "B.S. in Computer Science",
		school: "Tecnológico de Monterrey",
		period: "2021 - 2025",
		gpa: "N/A",
	},

	certifications: [
		{
			name: "Microsoft Azure Fundamentals",
			issuer: "Microsoft",
			code: "AZ-900",
			year: "2024",
		},
	],

	languages: [
		{
			language: "English",
			proficiency: "C2 Advanced (Professional)",
		},
		{
			language: "Spanish",
			proficiency: "Native",
		},
	],

	awards: [
		{
			title: "1st Place - Software Category",
			organization: "Expo Ingenierías",
			year: "2025",
			description: "MAES Web Application - Prestigious engineering competition",
		},
	],
};

export default contentData;
