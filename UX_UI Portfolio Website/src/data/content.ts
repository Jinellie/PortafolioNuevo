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
			"At Banorte, Mexico’s second-largest bank, I have shaped core parts of the enterprise banking platform, contributing to over 900 screens that will be used daily by more than 100,000 business customers.",
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
      team: "Company Owner, Operations Manager, Solo Designer + 1 Developer",
      tools: ["Figma", "React", "Firebase", "Material Design", "Trello"],
      problem:
        "Metepori's logistics operations ran on manual processes, fragmented package tracking, and zero financial visibility. Employees across warehouses and delivery routes spent the majority of their time on tasks that should have been automated — and the company owner had no centralized view of what was happening across the business.",
      discovery:
        "I worked directly with the company owner and operations manager through recurring meetings that combined discovery, feedback, and iteration — often running in parallel with active development. From those sessions I synthesized 40+ business and operational requirements, first into shared notes, then a spreadsheet, then a Trello board that tracked design decisions, development progress, and requirement changes over time. One important constraint: I never spoke directly with the 90+ employees who would use the system daily. All user understanding was filtered through the client. That shaped how I framed design decisions — I had to rely on what I could learn about each worker type through the operations manager, and build in enough flexibility to account for workflows I couldn't fully observe firsthand.",
      users: [
        {
          role: "Drivers",
          description:
            "Needed a simple mobile-first view of their assigned packages and delivery routes. Nothing else — any extra complexity would slow them down in the field.",
        },
        {
          role: "Warehouse Workers",
          description:
            "Needed visibility into packages at their specific location: status, intake, and outgoing. Also mobile, also non-technical, working on the go.",
        },
        {
          role: "Admin Desk Workers",
          description:
            "Needed broad access across all warehouses — shipment assignment, client registration, payment recording. Desktop-primary with more complex workflows.",
        },
        {
          role: "Super Admin",
          description:
            "Everything above, plus the business dashboard: aggregated data across clients, revenue, shipping status, warehouse inventory, and full user management including role assignment and account access control.",
        },
      ],
      insights: [
        "40+ business requirements identified across discovery sessions with owner and operations manager",
        "Employees spent 50% of their time on manual data entry and tracking tasks",
        "No centralized system for package status, financial reporting, or cross-warehouse visibility",
        "Four distinct user roles with fundamentally different needs and technical comfort levels",
      ],
      constraints: [
        "All user research was indirect — understanding of daily workflows came through the client, not the workers themselves",
        "Solo designer with one developer meant ruthless prioritization across 40+ requirements",
        "Must integrate with existing package tracking systems and workflows",
        "Tight deadline with phased rollout requirements",
      ],
      process: [
        {
          title: "Requirements Gathering",
          description:
            "Recurring discovery sessions with owner and operations manager, synthesizing 40+ requirements into a shared Trello board tracking design, development, and changes",
        },
        {
          title: "Wireframing",
          description:
            "Screen-by-screen wireframes mapping information distribution per role — what data lives where, how dense each view should be, and how to handle the range from driver mobile to super admin desktop",
        },
        {
          title: "Layout Resolution",
          description:
            "Navigated stakeholder tension between table and card layouts — landed on a dual-mode solution that served both admin desktop users and field workers on mobile",
        },
        {
          title: "Design & Build",
          description:
            "High-fidelity UI built on a customized Material Design foundation, with iterative feedback from the client throughout development rather than as a separate phase",
        },
      ],
      processArtifacts: [
        {
          image: "./process/metepori-wireframes.png",
          caption:
            "Early wireframes mapping screen layouts, information hierarchy, and feature distribution across user roles before visual design decisions were made",
        },
      ],
      keyDecisions: [
        {
          title: "Dual layout mode: cards and tables",
          description:
            "The operations manager strongly preferred table-based layouts — familiar and data-dense for desktop admin work. But warehouse workers and drivers using the system on mobile were non-technical users working in the field, and card layouts were clearly more appropriate: easier to scan, touch-friendly, lower cognitive load. Rather than choosing one, we built both. Desktop views offer a table/card toggle for admin-heavy workflows. Mobile views lock to card layout only, optimizing for the workers who need speed and simplicity on the go. This wasn't a compromise — it was the right answer for two genuinely different use contexts.",
        },
        {
          title: "Building on Material Design rather than from scratch",
          description:
            "Given the timeline, team size, and the need to serve non-technical users across multiple roles, I built on top of Material Design rather than creating a custom system from zero. This accelerated both design and development, and gave the platform a familiar interaction foundation. Components were customized to reflect the client's branding so the system felt owned rather than generic. Consistent layouts across roles also served a usability goal — as users move between sections or get promoted to higher-access roles, the system stays familiar.",
        },
        {
          title: "Destructive actions require explicit confirmation",
          description:
            "In a logistics platform, mistakes are costly — a deleted shipment or incorrectly assigned package has real operational impact. Every destructive action (delete, bulk import confirmation) was designed with an explicit confirmation modal that repeats the relevant context so the user knows exactly what they're confirming. Visual hierarchy in these modals is deliberate: cancel is outlined, destructive action is solid red.",
        },
      ],
      solution:
        "A centralized logistics management system with real-time package tracking, role-based access controls, financial reporting dashboards, and automated administrative workflows. The platform serves four distinct user roles from a single system — adapting layout complexity and information density to each context, from a driver checking today's deliveries on a phone to an owner reviewing business metrics on a desktop.",
      impact: [
        { metric: "50%", label: "Reduction in admin task time" },
        { metric: "90+", label: "Employees using the platform" },
        { metric: "40+", label: "Business requirements addressed" },
        { metric: "4", label: "Distinct user roles served" },
      ],
      retrospective:
        "The biggest gap in this project was not having direct access to the end users — particularly the warehouse workers and drivers. The card vs. table tension was resolved well, but there were likely friction points in the daily mobile workflows I couldn't anticipate without observing real usage. If the project continued, I'd push for at least a few contextual sessions with field workers to validate the mobile flows against how people actually move through their day.",
    },
    heroCarousel: [
      {
        image: "./proyectos/METEPORIlogin.png",
        annotations: [
          { number: 1, description: "Split-screen design balances form functionality with brand storytelling" },
          { number: 2, description: "Social login option reduces signup friction" },
          { number: 3, description: "Illustration communicates value proposition immediately" },
        ],
      },
      {
        image: "./proyectos/METEPORItabla.png",
        annotations: [
          { number: 1, description: "Multi-level filtering for precise data access" },
          { number: 2, description: "View toggle (cards/table) accommodates different user preferences" },
          { number: 3, description: "Color-coded status badges provide instant package state recognition" },
          { number: 4, description: "Sortable columns enable custom data organization" },
        ],
      },
      {
        image: "./proyectos/METEPORIcards.png",
        annotations: [
          { number: 1, description: "Card layout groups related info visually — easier scanning than tables on mobile" },
          { number: 2, description: "Action buttons (Devolución, Imprimir QR) accessible without navigating into a menu" },
          { number: 3, description: "Key metrics (quantity, price, destination) prominently displayed" },
        ],
      },
      {
        image: "./proyectos/METEPORIeliminar.png",
        annotations: [
          { number: 1, description: "Destructive action requires explicit confirmation — prevents costly operational mistakes" },
          { number: 2, description: "Order details repeated in modal to ensure user has full context" },
          { number: 3, description: "Visual hierarchy: Cancel (outline) vs. Delete (solid red)" },
        ],
      },
      {
        image: "./proyectos/METEPORIarchivo.png",
        annotations: [
          { number: 1, description: "Drag-and-drop zone reduces friction in bulk data entry" },
          { number: 2, description: "Template download ensures data format compliance before upload" },
          { number: 3, description: "Two-step process (upload, confirm) prevents accidental imports" },
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
      role: "Lead UX/UI Designer & QA Tester",
      duration: "10 months (Aug 2024 - Jun 2025)",
      team: "3 Designers (lead), 1 Developer, Academic Advisors",
      tools: ["Figma", "Component Libraries", "User Flows", "Storyboards"],
      problem:
        "Tec de Monterrey needed a platform to manage mentorship programs for 3,000+ students — but the existing approach was almost entirely manual, engagement was low, and large groups of students contributing in non-mentorship roles (marketing, group study sessions, technology) had no visibility or recognition in the system at all. The institution's focus was almost entirely on mentor students, leaving significant contributor groups without a place in the platform.",
      discovery:
        "Research involved direct interviews with students, mentors, and administrators across multiple roles. A key finding that shaped the entire product direction: the institution was only tracking and celebrating one type of student contribution — mentorship. But a significant portion of the student body was contributing in other meaningful ways: leading group study sessions, doing marketing work, and building the technology infrastructure. These students had no recognition, no progress tracking, and no motivation to stay engaged. This gap became the foundation of the gamification strategy.",
      users: [
        {
          role: "Mentor Students",
          description:
            "The institution's primary focus. Needed tools to manage their mentoring sessions, track student progress, and log their hours.",
        },
        {
          role: "Group Study Session Leaders",
          description:
            "Previously unaccounted for in the system. Needed the same recognition and progress tracking as mentors — their contribution was real but invisible.",
        },
        {
          role: "Marketing & Technology Students",
          description:
            "Also previously unaccounted for. Contributing to the program's operation but receiving no visibility in the system.",
        },
        {
          role: "Coordinators / Admin Staff",
          description:
            "Spending 15+ hours weekly on manual coordination. Needed automated workflows, centralized scheduling, and progress visibility across all student types.",
        },
      ],
      insights: [
        "Students showed low engagement with traditional mentorship programs — no feedback loop or sense of progress",
        "Admin staff spent 15+ hours weekly on manual mentor coordination tasks",
        "Large contributor groups (group study, marketing, technology) were completely absent from the system",
        "Accessibility and mobile responsiveness were critical for student adoption across diverse devices",
      ],
      constraints: [
        "Must support 3,000+ concurrent users with diverse technical capabilities",
        "Integration with existing student information systems",
        "Limited development resources requiring efficient component reuse",
        "Academic calendar constraints driving a phased rollout",
      ],
      process: [
        {
          title: "User Research & Personas",
          description:
            "Interviewed students across all contribution types, mentors, and administrators — uncovering the gap between who the institution was tracking and who was actually contributing",
        },
        {
          title: "Design System Foundation",
          description:
            "Built a 30+ component library from scratch — no prior design system existed. Established tokens, patterns, and documentation to support a team of 3 designers and 5 developers",
        },
        {
          title: "User Flow Design",
          description:
            "Created storyboards and flows for each user type, with particular focus on streamlining admin coordination workflows and making the gamification system feel fair across all contribution types",
        },
        {
          title: "Gamification Integration",
          description:
            "Designed an XP and achievement system that recognized all contribution types equally — not just mentorship hours — directly addressing the engagement and recognition gap identified in research",
        },
      ],
      keyDecisions: [
        {
          title: "Gamification as an equity solution, not just an engagement feature",
          description:
            "The institution's original framing treated gamification as a nice-to-have engagement tool. Our research reframed it as something more important: a way to level the playing field. By designing an XP system that recognized all contribution types — mentorship, group study leadership, marketing, technology — we gave previously invisible students a reason to stay engaged and a way to have their work acknowledged. Engagement increased 25% as a result, but the more meaningful outcome was that the platform finally reflected the actual shape of student contribution.",
        },
        {
          title: "Building the design system before designing screens",
          description:
            "With a team of 3 designers and 5 developers working in parallel, starting without a design system would have created inconsistency and rework. I established the component library first — 30+ components covering all major UI patterns — so that every designer was building from the same foundation. This decision paid off in development speed and cross-platform consistency.",
        },
        {
          title: "Junior designer ownership with structured oversight",
          description:
            "An experimental feature was assigned as full ownership to the junior designer on the team — with my feedback at every stage. This was a deliberate call: the feature was lower-risk enough to support real ownership, and the junior designer needed that experience. It also freed my focus for the higher-stakes core flows.",
        },
      ],
      solution:
        "An intuitive mentorship platform featuring a gamified engagement system that recognizes all contribution types equitably, streamlined admin workflows, a scalable 30+ component design system, and mobile-responsive design. The platform includes achievement systems, leaderboards with division-based filtering, appointment scheduling, and comprehensive progress tracking for students across every role.",
      impact: [
        { metric: "25%", label: "Increase in user engagement" },
        { metric: "3,000+", label: "Users served" },
        { metric: "30+", label: "Reusable components built" },
        { metric: "1st Place", label: "Expo Ingenierías Software Category" },
      ],
      retrospective:
        "The biggest design risk was building a gamification system without being able to test it with real users before launch — we validated through research and feedback sessions but not live usage data. If I were doing this again I'd push for a soft launch with a smaller cohort specifically to test whether the XP system felt fair across contribution types before rolling out to 3,000+ users.",
    },
    heroCarousel: [
      {
        image: "./proyectos/MAEmovil.png",
        annotations: [
          { number: 1, description: "Podium visualization makes top performers immediately recognizable" },
          { number: 2, description: "User's position highlighted in yellow for quick self-location" },
          { number: 3, description: "XP system provides clear progression metric across all contribution types" },
          { number: 4, description: "Division filter allows fair comparison within peer groups" },
        ],
      },
      {
        image: "./proyectos/MAEleaderboard.png",
        annotations: [
          { number: 1, description: "Responsive design maintains visual hierarchy across devices" },
          { number: 2, description: "Highlighted user row creates immediate personal connection to the data" },
          { number: 3, description: "Sidebar navigation provides clear context switching between sections" },
        ],
      },
      {
        image: "./proyectos/MAEhome.png",
        annotations: [
          { number: 1, description: "Action-oriented CTAs with gradient design guide user workflow" },
          { number: 2, description: "Group tutoring sessions surfaced prominently — previously invisible in the system" },
          { number: 3, description: "Carousel pattern allows content discovery without overwhelming the home view" },
        ],
      },
      {
        image: "./proyectos/MAEperfil.png",
        annotations: [
          { number: 1, description: "Achievement showcase with progress indicators maintains motivation over time" },
          { number: 2, description: "Virtual currency system adds a gamification layer beyond simple point tracking" },
          { number: 3, description: "Schedule at-a-glance with color coding for quick parsing" },
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
      team: "Xcien (real-world stakeholder), Network Engineers, Academic Team",
      tools: ["Figma", "React", "AI/Conversational UI", "Data Visualization"],
      problem:
        "Xcien's network engineers were managing complex capacity data scattered across multiple systems, spending 10+ hours weekly compiling reports for executive stakeholders who couldn't interpret raw technical data anyway. There was no centralized monitoring tool, no accessible visualization layer, and no way for non-technical leadership to engage with network health without going through an engineer.",
      discovery:
        "This was an academic project with Xcien as a real-world stakeholder — they provided the brief based on an actual operational problem they were facing and evaluated the final solution. I worked directly with network engineering directives to understand the data structures, reporting needs, and the gap between what engineers produced and what executives could actually use. The key tension that emerged: engineers needed technical depth and granularity; executives needed an at-a-glance summary they could act on without a technical background. The platform had to serve both without making either group feel like they were using a tool designed for someone else.",
      users: [
        {
          role: "Network Engineers",
          description:
            "Needed granular, real-time capacity data, trend visualization, and full technical detail. Comfortable with dense information layouts.",
        },
        {
          role: "Executive Stakeholders",
          description:
            "Needed an accessible overview of network health and capacity status without needing to interpret raw technical data. Required clear hierarchy and plain-language summaries.",
        },
      ],
      insights: [
        "Network engineers spent 10+ hours weekly compiling capacity reports from multiple disconnected sources",
        "Executive stakeholders couldn't interpret raw technical data — reports required manual translation",
        "No centralized system for monitoring network usage trends across locations",
        "Two fundamentally different user profiles needed to coexist in the same platform",
      ],
      constraints: [
        "Must integrate with existing network monitoring infrastructure",
        "Real-time data processing requirements for accurate capacity tracking",
        "Security and access control for sensitive network information",
        "Had to serve both highly technical and non-technical users without two separate products",
      ],
      process: [
        {
          title: "Stakeholder & Technical Discovery",
          description:
            "Direct sessions with Xcien network engineers to understand data structures, reporting needs, and the gap between technical output and executive consumption",
        },
        {
          title: "Dual-audience Information Architecture",
          description:
            "Designed a tiered structure — executive summary up front, technical detail in further sections — that worked for both user profiles within the same interface",
        },
        {
          title: "Dashboard & Visualization Design",
          description:
            "Translated complex network data into accessible visualizations: circular progress indicators for at-a-glance health, dual-axis charts for capacity planning, color-coded alert hierarchy",
        },
        {
          title: "AI Conversational UI",
          description:
            "Built a natural language query interface so non-technical stakeholders could ask questions about network data without relying on engineers to pull reports",
        },
      ],
      keyDecisions: [
        {
          title: "Tiered information architecture for two audiences",
          description:
            "The stakeholder feedback that shaped the platform most: executives wanted an overview, engineers wanted everything. Rather than building two separate views, we designed a tiered structure — an executive summary layer with high-level health indicators and key alerts up front, with full technical detail accessible in further sections. This same progressive disclosure logic was applied to both the reporting system and the dashboard itself, so both user types could use the same tool without either feeling like they were getting a watered-down version.",
        },
        {
          title: "AI chatbot for non-technical data access",
          description:
            "The most significant time cost wasn't the monitoring itself — it was engineers having to translate data for executives on demand. The conversational UI let non-technical stakeholders query network data in plain language, removing engineers from that loop entirely. This was the decision that drove the 70% reduction in report generation time.",
        },
        {
          title: "Visual hierarchy that reflects urgency",
          description:
            "In a network monitoring context, the cost of missing a critical alert is high. The dashboard hierarchy was designed so that critical status is impossible to miss — not buried in a table or requiring a filter to surface. Color, size, and position all reinforce the same urgency signal.",
        },
      ],
      solution:
        "A comprehensive network capacity monitoring platform with a tiered information architecture serving both technical and executive users, real-time dashboard visualizations, AI-powered conversational queries for plain-language data access, and automated report generation that eliminated the manual aggregation bottleneck.",
      impact: [
        { metric: "70%", label: "Reduction in report generation time" },
        { metric: "AI", label: "Conversational UI for natural language queries" },
        { metric: "Real-time", label: "Network capacity monitoring" },
        { metric: "2 profiles", label: "Technical and executive users served" },
      ],
      retrospective:
        "The dual-audience architecture worked conceptually, but I'd want to validate with actual usage data whether executives adopted the conversational UI or still defaulted to asking engineers. The design assumes they'll engage with the tool independently — that assumption would be worth testing early in a real deployment.",
    },
    heroCarousel: [
      {
        image: "./proyectos/RETRONETgrafica.png",
        annotations: [
          { number: 1, description: "Clear hierarchy with task-oriented heading" },
          { number: 2, description: "Contextual filtering for multi-network management" },
          { number: 3, description: "Critical status with clear visual hierarchy — 99% warrants immediate attention" },
          { number: 4, description: "Progressive disclosure: time-series data shows trends without overwhelming" },
        ],
      },
      {
        image: "./proyectos/RETRONETdashboard.png",
        annotations: [
          { number: 1, description: "At-a-glance network health using circular progress for quick scanning" },
          { number: 2, description: "Usage level categorization helps prioritize admin actions" },
          { number: 3, description: "Critical alerts front and center — multiple instances signal a systemic issue" },
          { number: 4, description: "Dual-axis chart comparing usage vs. capacity for planning decisions" },
        ],
      },
      {
        image: "./proyectos/RETRONETmenu.png",
        annotations: [
          { number: 1, description: "Icon + label navigation reduces cognitive load" },
          { number: 2, description: "Separated admin functions prevent accidental access" },
          { number: 3, description: "Persistent user context and branding" },
        ],
      },
      {
        image: "./proyectos/RETRONETroles.png",
        annotations: [
          { number: 1, description: "Bulk management capabilities for admin efficiency" },
          { number: 2, description: "Inline editing prevents context switching" },
          { number: 3, description: "Visual distinction between admin and user roles" },
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
      tools: ["Figma", "React", "Node.js", "AI Integration", "Voice UI"],
      problem:
        "The DREAM Lab innovation space had no booking system — scheduling was manual, resources were underutilized, and new users faced a steep learning curve just to reserve a space. With 80% of students booking on mobile and 60% of booking attempts abandoned before completion, the friction was measurable and the impact was real: the lab was operating at 45% capacity not because demand was low, but because the process was too hard.",
      discovery:
        "We conducted user interviews with students across different usage patterns and ran formal usability tests on high-fidelity prototypes and on the final implemented system — using that feedback to make iterative improvements. The research surfaced a clear hierarchy of problems: the booking flow itself had too many steps, equipment availability wasn't visible until late in the process, and new users had no guidance on how the system worked. The voice assistant and AI recommendations were not design explorations — both were fully implemented features driven directly by what we learned about how students wanted to interact with the system on mobile.",
      users: [
        {
          role: "Students",
          description:
            "Primary users booking spaces and equipment. 80% on mobile, diverse technical comfort levels. Needed a fast, guided experience — especially for first-time bookings.",
        },
        {
          role: "Mentors",
          description:
            "Booking spaces for group sessions with students. Needed visibility into capacity and equipment availability to plan sessions effectively.",
        },
        {
          role: "Lab Administrators",
          description:
            "Managing equipment inventory, resolving conflicts, and overseeing utilization. Needed a backend management view and reporting on space usage.",
        },
      ],
      insights: [
        "60% of booking attempts abandoned due to a complex, multi-step process with poor visibility",
        "Lab resources operated at only 45% capacity — not a demand problem, a friction problem",
        "New users took 15+ minutes to complete their first booking",
        "80% of students booking on mobile required a mobile-first design approach from the start",
      ],
      constraints: [
        "Three distinct user roles with different needs in the same system",
        "Integration with existing lab equipment inventory",
        "Accessibility requirements for a diverse student population",
        "Full implementation required — not a prototype, a shipped product",
      ],
      process: [
        {
          title: "User Research & Testing",
          description:
            "Interviews with students, mentors, and administrators to map booking patterns and pain points, followed by formal usability tests on both prototype and implemented system",
        },
        {
          title: "UX & Information Architecture",
          description:
            "Redesigned the booking flow to surface equipment availability earlier, reduce steps, and provide clear progress signals throughout",
        },
        {
          title: "AI & Voice Integration",
          description:
            "Implemented AI-powered personalized recommendations and a voice assistant — both driven by research findings about how students wanted to interact on mobile",
        },
        {
          title: "Usability Testing & Iteration",
          description:
            "Ran formal tests on the high-fidelity prototype and again on the shipped system, making targeted improvements based on observed friction points",
        },
      ],
      keyDecisions: [
        {
          title: "Gamification tied to real lab behavior",
          description:
            "Priority points and progress bars weren't decorative — they were designed to encourage the specific behaviors the lab needed: on-time arrivals, equipment returns, and consistent usage. The competitive element (points displayed prominently, upcoming reservations surfaced to reduce no-shows) was grounded in what we observed about student motivation during research.",
        },
        {
          title: "Voice assistant as a genuine accessibility feature",
          description:
            "On mobile, typing out a booking request across multiple form fields is slow and error-prone. The voice assistant wasn't a novelty feature — it was a direct response to observed input fatigue during usability testing, particularly for first-time users who weren't sure what fields were required.",
        },
        {
          title: "3D space visualization for context before commitment",
          description:
            "Students were abandoning bookings because they couldn't tell what they were reserving. A 3D visualization of the physical space, paired with a calendar-first design, gave users the context they needed to commit to a booking without having to visit the lab first.",
        },
      ],
      solution:
        "A fully implemented booking platform with AI-powered personalized recommendations, voice-activated booking, real-time availability tracking, 3D space visualization, and a mobile-optimized interface across three user roles. The gamification system drives the specific behaviors — on-time arrival, equipment care, consistent usage — that improve lab utilization.",
      impact: [
        { metric: "40%", label: "Reduction in booking friction for new users" },
        { metric: "30+", label: "Features designed across 3 user roles" },
        { metric: "3", label: "User roles served" },
        { metric: "2×", label: "Usability test rounds — prototype and shipped system" },
      ],
      retrospective:
        "We tested the system after launch, which is better than most academic projects manage — but I'd want longer-term usage data to know whether the gamification system actually sustained engagement over a full semester, or just drove early adoption. Retention metrics over time would be the next thing to measure.",
    },
    heroCarousel: [
      {
        image: "./proyectos/DREAMLABperfil.png",
        annotations: [
          { number: 1, description: "Gamification drives engagement — progress bars tied to real lab behaviors" },
          { number: 2, description: "Priority points displayed prominently create accountability and motivation" },
          { number: 3, description: "Upcoming reservations surfaced to reduce no-shows" },
          { number: 4, description: "Clear logout action prevents accidental navigation" },
        ],
      },
      {
        image: "./proyectos/DREAMLABreserva.png",
        annotations: [
          { number: 1, description: "3D visualization gives users context about the physical space before committing to a booking" },
          { number: 2, description: "Calendar-first design aligns with how students mentally model reservations" },
          { number: 3, description: "Capacity information surfaces competitive urgency without creating anxiety" },
          { number: 4, description: "Capacity slider provides flexible group size selection" },
        ],
      },
      {
        image: "./proyectos/DREAMLABequipment.png",
        annotations: [
          { number: 1, description: "Visual product cards with +/- controls for intuitive quantity selection" },
          { number: 2, description: "Real-time selection summary reduces cognitive load during equipment choice" },
          { number: 3, description: "Clear CTA to move forward — single action per step" },
        ],
      },
    ],
  },
 
  {
    id: "ecommerce-checkout",
    title: "Mobile Checkout Experience",
    category: "Design Challenge",
    description:
      "Mobile-first checkout flow for an electronics and office supplies ecommerce site — designed to reduce friction at every step for higher-consideration purchases",
    thumbnail: "./covers/Ecommerce.png",
    year: "2024",
    color: "#f59e0b",
    details: {
      role: "Solo Designer — user research framing, user flow, wireframes, high-fidelity UI, design rationale",
      duration: "1 week",
      team: "Solo",
      tools: ["Figma", "User Flows", "Wireframing"],
      problem:
        "Mobile checkout is a high-stakes moment where friction directly affects conversion. The challenge gets harder when the items in cart are expensive — a $200 ergonomic chair isn't an impulse buy, and users feel that weight before they tap 'Place order.' The core risks: excessive steps killing momentum, forced account creation blocking first-time buyers, unclear total cost eroding trust, and input fatigue on small screens.",
      discovery:
        "Rather than designing for a generic user, I started by mapping the distinct mindsets that show up at checkout for higher-consideration purchases. Five user types emerged: the first-time buyer who doesn't want commitment, the returning customer who wants speed, the mobile multitasker with limited attention, the price-sensitive shopper watching totals at every step, and the distrustful user who needs to feel safe before paying. The primary mindset driving every decision: 'I want to finish this quickly without mistakes.' From there I mapped a full user flow before touching any screen design — including decision branches, error states, and recovery paths.",
      users: [
        {
          role: "First-time Buyer",
          description:
            "Doesn't want to create an account. Needs reassurance that the process is safe and that they can complete the purchase without commitment.",
        },
        {
          role: "Returning Customer",
          description:
            "Knows what they want. Needs speed — saved addresses, saved payment, minimal steps.",
        },
        {
          role: "Mobile Multitasker",
          description:
            "Limited attention, easily distracted. Needs clear progress indicators and no unnecessary interruptions.",
        },
        {
          role: "Price-sensitive Shopper",
          description:
            "Watching the total at every step. Needs cost transparency early — no surprises at review.",
        },
        {
          role: "Distrustful User",
          description:
            "Needs trust signals before paying. Card brand icons, familiar patterns, explicit security cues.",
        },
      ],
      insights: [
        "Higher-consideration purchases require more trust signals than typical ecommerce — users feel the weight of the decision",
        "Forced account creation is one of the most documented causes of checkout abandonment",
        "Shipping is the highest cognitive load step — minimize typing and make costs visible early",
        "Payment is the highest anxiety moment — trust and clarity matter more than speed here",
      ],
      constraints: [
        "Mobile only — no desktop or responsive design required",
        "Had to work for both guest and logged-in users without creating two separate flows",
        "Higher-priced items raised the bar for trust, reassurance, and error prevention",
      ],
      process: [
        {
          title: "User & Context Framing",
          description:
            "Mapped five distinct user mindsets for higher-consideration mobile purchases before touching any screen design",
        },
        {
          title: "User Flow Mapping",
          description:
            "Mapped the complete checkout lifecycle including guest vs. logged-in branches, error states (payment failure, address validation, out-of-stock), and recovery paths at each step",
        },
        {
          title: "Wireframing",
          description:
            "Low-fidelity wireframes establishing information hierarchy, screen structure, and the 3-step model before visual design decisions",
        },
        {
          title: "High-fidelity UI & Rationale",
          description:
            "Final screens with per-decision rationale — documenting not just what was designed but why each choice was made",
        },
      ],
      processArtifacts: [
        {
          image: "./process/ecommerce-userflow.png",
          caption:
            "Full checkout user flow mapping the complete lifecycle from product page to order confirmation, including guest vs. logged-in branches, error states, and recovery paths",
        },
        {
          image: "./process/ecommerce-wireframes.png",
          caption:
            "Early wireframes establishing the 3-step model structure, information hierarchy, and screen layout before visual design",
        },
      ],
      keyDecisions: [
        {
          title: "Guest checkout as the primary path",
          description:
            "Forced account creation is one of the most documented causes of checkout abandonment — and first-time buyers of higher-consideration items are especially likely to bail if they feel pressured into commitment before they've completed the purchase. 'Continue as guest' is the primary CTA. Account creation is offered post-purchase confirmation as an opt-in, not a gate. Conversion comes first; account acquisition follows.",
        },
        {
          title: "3-step model with a visible stepper",
          description:
            "Shipping → Payment → Review maps to how people mentally model a purchase. The stepper shows remaining effort at a glance, which reduces anxiety and increases perceived speed. For higher-consideration purchases, the Review step is especially important — users want to feel in control and see everything before committing. One-page checkout trades that control for speed; for this product type, the stepped model is the right call.",
        },
        {
          title: "Modals for address and card entry",
          description:
            "Both 'Change address' and 'Add card' open as modals rather than navigating to new pages. This keeps the user oriented in the checkout flow, reduces navigation depth, and feels faster on mobile — the same reason for both decisions, applied consistently.",
        },
        {
          title: "Cost visibility at every step",
          description:
            "For a price-sensitive shopper, discovering unexpected costs at the review step is enough to cause abandonment. The total is shown persistently at the bottom of every screen, and shipping costs are surfaced during the shipping step — not revealed at review.",
        },
        {
          title: "Post-purchase account creation offer",
          description:
            "For guest users, account creation is offered on the confirmation screen — after the purchase is complete and the user is in a positive emotional state. The framing is benefit-led ('save your details for next time'), not obligation. This approach encourages account creation without the abandonment risk of pre-purchase gating.",
        },
      ],
      solution:
        "A mobile checkout flow for higher-consideration purchases designed around five distinct user mindsets. The 3-step model (Shipping → Payment → Review) is anchored by a persistent stepper, modals for secondary actions, and cost transparency at every stage. Guest checkout is the primary path; account creation is a post-purchase offer. Trust signals are concentrated at the payment step where anxiety peaks.",
      impact: [
        { metric: "5", label: "User types mapped and designed for" },
        { metric: "3-step", label: "Streamlined checkout model" },
        { metric: "6", label: "Edge cases considered and planned for" },
        { metric: "0", label: "Steps requiring account creation" },
      ],
      retrospective:
        "This was a design challenge without real usage data to validate against. The decisions are grounded in established ecommerce research and clear user reasoning, but I'd want to A/B test the 3-step model against a one-page checkout to measure whether the perceived control advantage actually outweighs the additional steps for this specific product category. I'd also want to track guest vs. account conversion rates on the post-purchase offer to see if the timing and framing are landing.",
    },
    heroCarousel: [
      {
        image: "./proyectos/ECOMMERCEcart.png",
        annotations: [
          { number: 1, description: "Cart as a pop-up keeps users in context — no navigation away from the product page" },
          { number: 2, description: "Total visible immediately before entering checkout — reduces hesitation" },
          { number: 3, description: "Quantity adjustments inline, no extra steps" },
        ],
      },
      {
        image: "./proyectos/ECOMMERCEguest.png",
        annotations: [
          { number: 1, description: "Guest checkout is the primary CTA — conversion before account acquisition" },
          { number: 2, description: "Login available as secondary option for returning users who want saved details" },
          { number: 3, description: "Benefit-led framing: 'Checkout faster' not 'You must log in'" },
        ],
      },
      {
        image: "./proyectos/ECOMMERCEshipping.png",
        annotations: [
          { number: 1, description: "Autofill for returning users — minimize typing at the highest cognitive load step" },
          { number: 2, description: "Shipping costs visible here, not at review — no surprises" },
          { number: 3, description: "Persistent total at bottom throughout the flow" },
        ],
      },
      {
        image: "./proyectos/ECOMMERCEpayment.png",
        annotations: [
          { number: 1, description: "Multiple payment methods with card brand icons — trust signals at the highest anxiety moment" },
          { number: 2, description: "Billing address toggle reduces unnecessary input" },
          { number: 3, description: "Add card via modal — keeps checkout context, same pattern as address change" },
        ],
      },
      {
        image: "./proyectos/ECOMMERCEreview.png",
        annotations: [
          { number: 1, description: "Everything visible before committing — delivery, payment, items, total" },
          { number: 2, description: "Edit shortcuts for each section without losing place in flow" },
          { number: 3, description: "CTA includes price — 'Place order • $199' — final transparency signal" },
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
