// Portfolio Content - Edit this file to update all content across the site

export const contentData = {
  personal: {
    name: "Jinelle Flores",
    role: "UX/UI Designer",
    heroTagline: "Crafting Digital Experiences That Feel Effortless",
    heroDescription: "I design intelligent, elegant interfaces that bridge user needs with business goals. Every pixel, every interaction—intentional and purposeful.",
    email: "jinelle@example.com",
    linkedin: "linkedin.com/in/jinelleflores",
    github: "github.com/jinelleflores",
    availability: "Available for new projects"
  },
  
  about: {
    title: "Designing with Purpose",
    paragraphs: [
      "I'm a product designer with 6+ years of experience crafting digital experiences for startups and Fortune 500 companies. My work spans fintech, healthcare, e-commerce, and SaaS—always with a focus on solving real problems for real people.",
      "I believe the best design is invisible. It's intuitive, accessible, and gets out of the way so users can accomplish their goals effortlessly. My approach combines rigorous research, strategic thinking, and meticulous craft.",
      "When I'm not designing, you'll find me exploring design systems, reading about cognitive psychology, or mentoring emerging designers. I'm passionate about making design more inclusive and the design community more welcoming."
    ],
    values: [
      {
        title: "Craft Excellence",
        description: "Every pixel matters. I obsess over details that most will never notice, because those details create experiences people love."
      },
      {
        title: "Human-Centered",
        description: "Technology should serve people, not the other way around. I design with empathy, accessibility, and inclusion at the core."
      },
      {
        title: "Strategic Thinking",
        description: "Great design solves business problems. I bridge user needs with business goals to create meaningful impact."
      }
    ]
  },
  
  caseStudies: [
    {
      id: "fintech-dashboard",
      title: "FinTech Analytics Dashboard",
      category: "Product Design",
      description: "Transforming complex financial data into actionable insights for institutional investors",
      thumbnail: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMjQxODA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2024",
      color: "#3B82F6",
      details: {
        role: "Lead Product Designer",
        duration: "6 months",
        team: "Design Lead, 2 Designers, 4 Engineers, Product Manager",
        tools: ["Figma", "Adobe Creative Suite", "Miro", "Maze"],
        problem: "Institutional investors were overwhelmed by fragmented data sources and complex interfaces, leading to slow decision-making and missed opportunities in fast-moving markets.",
        insights: [
          "Users spent 40% of their time switching between 6+ different platforms",
          "Critical decisions delayed by 3-4 hours due to data reconciliation",
          "Mobile usage increased 200% YoY but existing solution was desktop-only"
        ],
        constraints: [
          "Strict regulatory compliance requirements (SEC, FINRA)",
          "Must integrate with 12 legacy data providers",
          "Real-time data processing under 100ms latency",
          "Support for 50,000+ concurrent users during market hours"
        ],
        process: [
          {
            title: "Research & Discovery",
            description: "15 stakeholder interviews, competitive analysis, and heuristic evaluation of existing platform"
          },
          {
            title: "Define & Ideate",
            description: "Created user personas, journey maps, and information architecture frameworks"
          },
          {
            title: "Prototype & Test",
            description: "Rapid prototyping with weekly user testing sessions across 3 user segments"
          },
          {
            title: "Build & Iterate",
            description: "Collaborated with engineering on component library and design system"
          }
        ],
        solution: "A unified, intelligent dashboard that aggregates multi-source financial data with customizable views, predictive analytics, and mobile-first responsive design. The interface prioritizes information hierarchy and uses progressive disclosure to manage complexity.",
        impact: [
          { metric: "67%", label: "Reduction in decision time" },
          { metric: "4.8/5", label: "User satisfaction score" },
          { metric: "89%", label: "Daily active users" },
          { metric: "$2.4M", label: "ARR increase in Q1" }
        ]
      }
    },
    {
      id: "health-app",
      title: "WellPath Health App",
      category: "Mobile Design",
      description: "Patient-centered telemedicine platform connecting users with healthcare providers",
      thumbnail: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMjUyOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2024",
      color: "#10B981",
      details: {
        role: "Senior UX/UI Designer",
        duration: "4 months",
        team: "2 Designers, 3 Engineers, Healthcare Consultant",
        tools: ["Figma", "Principle", "UserTesting", "Optimal Workshop"],
        problem: "Patients struggled to access timely healthcare due to fragmented appointment systems, lack of provider availability transparency, and poor mobile experiences.",
        insights: [
          "73% of users abandoned appointment booking after 3+ steps",
          "Provider search resulted in 45% bounce rate",
          "Accessibility compliance was critical for aging demographics"
        ],
        constraints: [
          "HIPAA compliance and patient data security",
          "Integration with 200+ healthcare provider systems",
          "Support for low-bandwidth connections",
          "WCAG 2.1 AA accessibility standards"
        ],
        process: [
          {
            title: "User Research",
            description: "Contextual inquiries with patients and providers, analyzing pain points in current workflows"
          },
          {
            title: "Design System",
            description: "Built accessible component library with focus on readability and touch targets"
          },
          {
            title: "Usability Testing",
            description: "Conducted moderated sessions with diverse user groups including elderly users"
          },
          {
            title: "Refinement",
            description: "Iterated based on feedback, reducing booking flow from 8 to 3 steps"
          }
        ],
        solution: "A patient-first telemedicine platform featuring streamlined appointment booking, real-time provider availability, secure video consultations, and integrated health records—all optimized for mobile with full accessibility support.",
        impact: [
          { metric: "92%", label: "Booking completion rate" },
          { metric: "4.9/5", label: "App store rating" },
          { metric: "300K", label: "Monthly active users" },
          { metric: "58%", label: "Increase in telehealth visits" }
        ]
      }
    },
    {
      id: "ecommerce-redesign",
      title: "Artisan E-Commerce",
      category: "Web Design",
      description: "Elevating the online shopping experience for handcrafted luxury goods",
      thumbnail: "https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjMzMzg4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2023",
      color: "#F59E0B",
      details: {
        role: "UX/UI Designer",
        duration: "5 months",
        team: "Creative Director, Designer, 5 Engineers",
        tools: ["Figma", "After Effects", "Hotjar", "Google Analytics"],
        problem: "The existing e-commerce experience failed to convey the premium nature of handcrafted goods, resulting in high cart abandonment and low conversion rates.",
        insights: [
          "Cart abandonment rate of 78% (industry avg: 69%)",
          "Product imagery inconsistent and low quality",
          "Mobile conversion rate 3x lower than desktop"
        ],
        constraints: [
          "Limited engineering resources for custom features",
          "Must maintain existing inventory management system",
          "International shipping calculation complexity",
          "Brand consistency across 200+ artisan vendors"
        ],
        process: [
          {
            title: "Audit & Analysis",
            description: "Analytics review, heat mapping, and user session recordings to identify drop-off points"
          },
          {
            title: "Visual Strategy",
            description: "Developed editorial design language emphasizing craftsmanship and storytelling"
          },
          {
            title: "Conversion Optimization",
            description: "A/B tested checkout flows, trust signals, and product presentation formats"
          },
          {
            title: "Responsive Design",
            description: "Mobile-first approach with touch-optimized product galleries and quick-view features"
          }
        ],
        solution: "A refined e-commerce experience with editorial photography, artisan storytelling, streamlined checkout, and immersive product presentations that celebrate the craftsmanship behind each item.",
        impact: [
          { metric: "43%", label: "Increase in conversion rate" },
          { metric: "52%", label: "Reduction in cart abandonment" },
          { metric: "2.8x", label: "Mobile revenue growth" },
          { metric: "186%", label: "Average order value increase" }
        ]
      }
    },
    {
      id: "workspace-platform",
      title: "Collaborative Workspace",
      category: "SaaS Platform",
      description: "Enterprise project management tool built for distributed teams",
      thumbnail: "https://images.unsplash.com/photo-1622127800610-3022cb75dc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMjM5MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      year: "2023",
      color: "#8B5CF6",
      details: {
        role: "Product Designer",
        duration: "8 months",
        team: "3 Designers, 8 Engineers, 2 Product Managers",
        tools: ["Figma", "FigJam", "Maze", "Notion"],
        problem: "Distributed teams struggled with fragmented communication tools, unclear project status, and inefficient collaboration workflows across time zones.",
        insights: [
          "Teams used average of 7 different tools for project management",
          "Status updates consumed 12 hours per week per manager",
          "Asynchronous collaboration caused 2-day average delays"
        ],
        constraints: [
          "Enterprise security and SSO requirements",
          "Must support teams from 5 to 5,000+ members",
          "Offline-first architecture for global accessibility",
          "Integration with 50+ existing business tools"
        ],
        process: [
          {
            title: "Enterprise Research",
            description: "Interviewed 30+ teams across industries to understand collaboration pain points"
          },
          {
            title: "Information Architecture",
            description: "Designed scalable structure supporting projects, tasks, documents, and communication"
          },
          {
            title: "Interaction Design",
            description: "Created intuitive workflows for task management, file sharing, and team coordination"
          },
          {
            title: "Iteration",
            description: "Beta tested with 15 companies, refined based on real-world usage patterns"
          }
        ],
        solution: "An all-in-one workspace platform combining project management, real-time collaboration, document sharing, and team communication with intelligent automation and customizable workflows.",
        impact: [
          { metric: "71%", label: "Reduction in tool switching" },
          { metric: "94%", label: "Team adoption rate" },
          { metric: "15hrs", label: "Time saved per week/team" },
          { metric: "4.7/5", label: "Enterprise satisfaction" }
        ]
      }
    }
  ],
  
  designProcess: [
    {
      title: "Research",
      description: "Deep-dive into user needs, business goals, and market landscape through interviews, analytics, and competitive analysis.",
      color: "#3B82F6"
    },
    {
      title: "Define",
      description: "Synthesize insights into clear problem statements, user personas, and opportunity areas aligned with strategic objectives.",
      color: "#8B5CF6"
    },
    {
      title: "Ideate",
      description: "Explore diverse solutions through sketching, wireframing, and collaborative workshops that push creative boundaries.",
      color: "#EC4899"
    },
    {
      title: "Prototype",
      description: "Build interactive, high-fidelity prototypes that bring ideas to life and enable meaningful testing with real users.",
      color: "#F59E0B"
    },
    {
      title: "Test",
      description: "Validate assumptions through usability testing, A/B experiments, and continuous feedback loops with stakeholders.",
      color: "#10B981"
    },
    {
      title: "Launch",
      description: "Collaborate with engineering to ensure pixel-perfect implementation, then measure impact and iterate based on data.",
      color: "#06B6D4"
    }
  ],
  
  skills: [
    {
      category: "Design",
      items: [
        "User Research",
        "Information Architecture",
        "Interaction Design",
        "Visual Design",
        "Prototyping",
        "Design Systems",
        "Wireframing",
        "Usability Testing"
      ]
    },
    {
      category: "Tools",
      items: [
        "Figma",
        "Adobe Creative Suite",
        "Sketch",
        "Principle",
        "After Effects",
        "Miro",
        "Notion",
        "FigJam"
      ]
    },
    {
      category: "Development",
      items: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Git",
        "Responsive Design",
        "Accessibility (WCAG)",
        "Performance Optimization"
      ]
    },
    {
      category: "Strategy",
      items: [
        "Product Strategy",
        "User Personas",
        "Journey Mapping",
        "A/B Testing",
        "Analytics",
        "Stakeholder Management",
        "Workshop Facilitation",
        "Design Thinking"
      ]
    }
  ],
  
  awards: [
    {
      title: "Awwwards Site of the Day",
      organization: "Awwwards",
      year: "2024",
      description: "Recognition for WellPath Health App design excellence"
    },
    {
      title: "Best UX Innovation",
      organization: "UX Design Awards",
      year: "2023",
      description: "FinTech Analytics Dashboard"
    },
    {
      title: "Featured Designer",
      organization: "Dribbble",
      year: "2023",
      description: "Top 10 designers in product design category"
    }
  ],
  
  certifications: [
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Google",
      year: "2022"
    },
    {
      name: "Certified Usability Analyst (CUA)",
      issuer: "Human Factors International",
      year: "2021"
    },
    {
      name: "Web Accessibility Specialist",
      issuer: "IAAP",
      year: "2022"
    },
    {
      name: "Design Sprint Facilitator",
      issuer: "AJ&Smart",
      year: "2023"
    }
  ]
};

export default contentData;
