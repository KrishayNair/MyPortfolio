export const projects = [
  {
    title: "DAK",
    slug: "dak",
    description: "DAK is a nationwide unified portal for philatelists, enabling seamless purchase of postal materials released by all 24 postal circles of India. It revolutionizes the traditional offline process of opening a Philatelic Deposit Account (PDA) by fully digitizing it, featuring integrated payment gateways and a dedicated forum for collectors. The government dashboard allows postal circles to add and manage products, access real-time analytics, receive preferential notifications, and optimize supply chain logistics to reduce wastage and stamp shortages.",
    detailedDescription: {
      overview: "DAK is a comprehensive digital solution that transforms the traditional philately experience in India. It serves two distinct user groups: philatelists and government postal departments.",
      features: [
        "Unified portal for all 24 postal circles of India",
        "Digital Philatelic Deposit Account (PDA) management",
        "Integrated payment gateways for seamless transactions",
        "Dedicated forum for collectors to connect and trade",
        "Real-time analytics and inventory management",
        "Preferential notifications for new releases",
        "Supply chain optimization to reduce wastage"
      ],
      technicalDetails: [
        "Built with Next.js for frontend and Django for backend",
        "Real-time updates using Firebase",
        "Asynchronous task processing with Celery and Redis",
        "Scalable architecture with Nginx and Cloudflare",
        "Responsive design for all devices"
      ],
      impact: "The project has been recognized as the winning solution in Smart India Hackathon 2024 and is being officially adopted by the Government of India, Department of Post for nationwide implementation."
    },
    tech: "NEXT.js, TAILWIND CSS, DJANGO, CELERY, REDIS, FIREBASE, NGINX, CLOUDFLARE",
    src: "dak_main.jpeg",
    images: [
      "dak_main.jpeg",
      "dak_dashboard.jpeg",
      "dak_forum.jpeg",
      "dak_catalogue.png",
      "dak_pda.png"
    ],
    certificates: [
      {
        title: "Smart India Hackathon 2024 Winner",
        file: "/pdf/sih_winner.pdf",
        image: "/images/dak_winner.jpeg"
      }
    ],
    previewSrc: "dak_main.jpeg",
    githubUrl: "https://github.com/KrishayNair/DAK-Philately",
    detailsUrl: "/projects/dak",
    liveUrls: [
      {
        title: "DAK for Philatelists",
        url: "https://dak-philately.vercel.app"
      },
      {
        title: "DAK Government Portal",
        url: "https://dak-gov.vercel.app"
      }
    ],
    color: "#3B82F6",
    achievements: [
      {
        title: "Smart India Hackathon 2024 Winner",
        icon: "🏆",
        description: "Recognized as the winning project in the prestigious Smart India Hackathon 2024"
      },
      {
        title: "Government Adoption",
        icon: "🏛️",
        description: "Officially being adapted by Government of India, Department of Post for nationwide implementation"
      }
    ]
  },
  {
    title: "Learnify",
    slug: "learnify",
    description: "Learnify is a smart placement preparation and learning platform designed to streamline student upskilling through AI-powered features. It offers customized learning journeys, interactive DSA practice environments, real-time AI mock interviews, and intelligent job matching based on student profiles.",
    detailedDescription: {
      overview: "Learnify bridges the gap between education and employment by offering an end-to-end platform for students preparing for placements. It combines learning, assessment, and recruitment tools into a unified experience.",
      features: [
        "Personalized placement preparation roadmap with progress tracking",
        "AI Mock Interviews powered by Google Gemini for realistic interview experience",
        "Interactive DSA practice portal with analytics and feedback",
        "AI-driven job matching based on candidate skills and market demand",
        "Gamified learning dashboards and performance visualizations"
      ],
      technicalDetails: [
        "Frontend built with Next.js and Tailwind CSS for dynamic and responsive UI",
        "Backend powered by FastAPI for efficient API handling",
        "AI interview evaluation and generation using Google Gemini GenAI",
        "Integrated with Supabase for user authentication and database",
        "Scalable architecture with modular deployment"
      ],
      impact: "Winner of Quasar 2.0 in the Smart Education domain, Learnify is helping students across colleges enhance placement readiness with real-time feedback and AI-led personalized learning."
    },
    tech: "NEXT.js, DRIZZLE ORM, TAILWIND CSS, POSTGRESQL, OPENAI",
    src: "learn.png",
    images: ["learn.png", "learnify_dashboard.png", "learnify_mentoring.png", "learnify_feedback.png", "learnify_visualize.png"],
    certificates: [
      {
        title: "Quasar 2.0 Winning Certificate",
        file: "/images/quasar.png",
        image: "/images/quasar_main.jpg"
      }
    ],
    previewSrc: "learn.png",
    githubUrl: "https://github.com/KrishayNair/Learnify", // Replace with actual repo link
    detailsUrl: "/projects/learnify",
    liveUrls: [
      {
        title: "Learnify Platform",
        url: "https://learnify-placement-assist.vercel.app/" // Replace with actual link if hosted
      }
    ],
    color: "#10B981",
    achievements: [
      {
        title: "Quasar 2.0 Winner",
        icon: "🎓",
        description: "Secured 2nd place in the Smart Education domain at the Quasar 2.0 national-level competition"
      }
    ]
  },
  {
    "title": "LegAIly",
    "slug": "legaily",
    "description": "LegAIly is an AI-powered legal assistant platform designed for lawyers and judges, offering document translation, summarization, drafting, blockchain-based verification, and case management — streamlining legal workflows through intelligent automation.",
    "detailedDescription": {
      "overview": "LegAIly bridges the gap between legal practice and modern AI solutions. It enables professionals to manage documents, get instant translations, generate summaries, conduct legal research, and track court schedules, all within a secure and intuitive interface.",
      "features": [
        "Legal document translation across Indian languages using Llama 3",
        "Summarization and simplified legal language generation",
        "Case law search and legal advisory chatbot powered by RAG-based LLM",
        "Blockchain-based document verification with judge/lawyer access portals",
        "Advocate Diary for managing schedules, court dates, and reminders",
        "Pre-built legal draft templates for efficiency and standardization",
        "Secure multi-role authentication for judges, lawyers, and staff"
      ],
      "technicalDetails": [
        "Frontend built with Next.js and Tailwind CSS for responsive UI",
        "Backend powered by FastAPI for scalable and asynchronous processing",
        "LLM-based features implemented using Llama 3.1 and 3.2 models",
        "Realtime vector search with Pinecone for document and case retrieval",
        "Authentication and user management using Supabase",
        "Flutter-based mobile app and Electron-based desktop version for accessibility",
        "Blockchain document verification integrated with Doc.ai"
      ],
      "impact": "LegAIly has been tested and validated by High Court and Supreme Court advocates. Its practical utility has led to requests for dedicated deployments by law firms and judiciary members."
    },
    "tech": "NEXT.js, FASTAPI, LLAMA 3, FLUTTER, ELECTRON, SUPABASE, PINECONE, DOC.ai, TAILWIND CSS",
    "src": "legaily_main.png",
    "images": [
      "legaily_main.png",
      "legaily_doc.png",
      "legaily_diary.png",
      "legaily_draft.png",
      "legaily_architecture.png",
      "legaily_winner.jpeg"
    ],
    certificates: [
      {
        title: "SynTechXathon Winner Certificate",
        file: "/pdf/syntech_certificate.pdf",
        image: "/images/legaily_winner.jpeg"
      }
    ],
    "previewSrc": "legaily_main.png",
    "githubUrl": "https://github.com/KrishayNair/LegAIly", 
    "detailsUrl": "/projects/legaily",
    "liveUrls": [
      {
        "title": "LegAIly Web Portal",
        "url": "https://legaily.vercel.app/"
      }
    ],
    "color": "#6366F1",
    "achievements": [
      {
        "title": "Adopted by Legal Professionals",
        "icon": "⚖️",
        "description": "Used and recommended by High Court and Supreme Court lawyers"
      },
      {
        "title": "Hackathon Winner",
        "icon": "🏆",
        "description": "Recognized as the winning project in the Legal Tech Hackathon"
      }
    ]
  },

  {
    "title": "Aptos GameVerse",
    "slug": "aptosgameverse",
    "description": "Aptos GameVerse is an AI-powered, no-code platform for building Web3 games with Aptos blockchain integration, automated game generation, smart contract support, and seamless NFT/token implementation.",
    "detailedDescription": {
      "overview": "Aptos GameVerse bridges the gap between AI-powered creativity and blockchain game development. It allows users to create immersive Web3 games using a no-code interface while integrating essential blockchain components like NFTs, tokens, and smart contracts. Built to reduce time, cost, and complexity, it empowers developers, creators, and studios to quickly launch engaging GameFi experiences.",
      "features": [
        "AI-powered automated game generation and level design",
        "Character and asset creation using AI agents",
        "MetaMove Move Agent Kit integration for Aptos blockchain",
        "Seamless NFT and token reward system implementation",
        "Auto-generated and deployed smart contracts",
        "No-code UI for intuitive and fast game creation",
        "Instant deployment and live preview support"
      ],
      "technicalDetails": [
        "Frontend built with React and Tailwind CSS",
        "Aptos blockchain integrated via MetaMove Move Agent Kit",
        "AI agent workflows optimized using caching and refactored APIs",
        "Support for NFT minting and smart contract deployment",
        "Debugging and automated testing scripts for reliability",
        "Supports tokenomics for GameFi use cases",
        "Devfolio project page: https://devfolio.co/projects/aptosgameverse-5c9b"
      ],
      "impact": "Aptos GameVerse has significantly lowered the entry barrier for blockchain-based game development by enabling fast, AI-assisted creation workflows and offering a complete GameFi toolkit. The project was recognized for simplifying Web3 game creation and drawing interest from developers and creators in the blockchain gaming space."
    },
    "tech": "APTOS, METAMOVE, AI AGENTS, REACT, TAILWIND CSS, NFT, SMART CONTRACTS, GAMEFI",
    "src": "aptos_main.png",
    "images": [
      "aptos_main.png",
      "aptos_tool.png",
      "aptos_snake.jpeg",
      "aptos_profile.jpeg",
      "aptos_winner.jpeg"
    ],
    certificates: [
      {
        title: "Move AI Hackathon GameFi Winner",
        file: "https://x.com/metamove_/status/1914329504769818627?s=48",
        image: "/images/aptos_winner.jpeg"
      }
    ],
    "previewSrc": "aptos_main.png",
    "githubUrl": "",
    "detailsUrl": "/projects/aptosgameverse",
    "liveUrls": [
      {
        "title": "Aptos GameVerse on Devfolio",
        "url": "https://devfolio.co/projects/aptosgameverse-5c9b"
      },
      {
        "title": "Aptos GameVerse Live website",
        "url": "https://aptos-game-verse.vercel.app/dashboard"
      }
    ],
    "color": "#10B981",
    "achievements": [
      {
        "title": "🏆 Move AI Hackathon GameFi Winner",
        "icon": "💰🏅",
        "description": "Won 1st prize in the GameFi Track of the Move AI Hackathon, receiving a $13,000 award"
      },
      {
        "title": "Seamless AI + Blockchain Integration",
        "icon": "🧠🔗",
        "description": "Overcame compatibility and latency issues while integrating AI agents with the Aptos blockchain using the MetaMove Move Agent Kit"
      },
      {
        "title": "Empowering GameFi Creators",
        "icon": "🎮🚀",
        "description": "Enabled rapid development and deployment of GameFi experiences through no-code tools and automated smart contract support"
      },
    ]
  },
  {
    "title": "Dori",
    "description": "Dori is a transformative digital platform designed to bridge the gap between local Indian artisans and the global Indian diaspora. It serves as a vibrant, curated marketplace that celebrates the richness of India's diverse cultural heritage through authentic traditional crafts and handmade products. Built with the vision of empowering artisans and reconnecting people with their roots, Dori enables users around the world to explore, discover, and purchase regionally crafted items—from textiles and pottery to jewelry and home décor—each with its own story and tradition.By digitizing the artisan economy, Dori not only provides artisans with wider visibility and market access but also ensures that the values of sustainability, craftsmanship, and heritage are preserved and promoted globally. The platform personalizes the shopping experience through intuitive navigation, artisan profiles, and AI-powered assistance, fostering a meaningful connection between buyers and makers. Dori is more than a marketplace—it's a cultural movement designed to revive, respect, and redefine the legacy of Indian craftsmanship in the modern world.",
    "detailedDescription": {
      "overview": "Dori serves as a bridge between Indian artisans and the global diaspora, providing a platform where traditional crafts meet contemporary demand. By digitizing the artisan economy, Dori enables users worldwide to discover, purchase, and engage with authentic Indian handicrafts, fostering cultural preservation and economic empowerment.",
      "features": [
        "Curated marketplace showcasing diverse Indian handicrafts",
        "User-friendly interface for seamless browsing and purchasing",
        "Dedicated sections for artisans, users, and government stakeholders",
        "Chatbot support for customer inquiries and assistance",
        "Testimonials highlighting diaspora connections and experiences"
      ],
      "technicalDetails": [
        "Frontend developed with modern web technologies for responsive design",
        "Backend infrastructure supporting dynamic content management",
        "Integration of chatbot functionality for enhanced user interaction",
        "Scalable architecture accommodating multiple user roles and interfaces"
      ],
      "impact": "Dori has revitalized the traditional artisan market by providing a global platform for exposure and sales. It empowers artisans by expanding their reach beyond local boundaries, while offering the diaspora a tangible connection to their heritage through authentic crafts."
    },
    "tech": "React, Node.js, Express, MongoDB, Chatbot Integration",
    "src": "dori.png",
    "images": [
      "dori.png",
      "dori_main2.png",
      "dori_shop.png",
      "dori_events.png",
      "dori_order.png"
    ],
    "previewSrc": "dori.png",
    "githubUrl": "",
    "detailsUrl": "/projects/dori",
    "liveUrls": [
      {
        "title": "Dori Platform",
        "url": "https://dori-nu.vercel.app/"
      }
    ],
    "color": "#F59E0B",
    "achievements": [
      {
        "title": "Cultural Preservation Initiative",
        "icon": "🎨",
        "description": "Promoted the preservation of Indian traditional crafts by providing artisans with a global platform."
      },
      {
        "title": "Diaspora Engagement",
        "icon": "🌍",
        "description": "Strengthened connections between the Indian diaspora and their cultural roots through accessible artisan products."
      }
    ]
  },
  
  {
    title: "NextGen police complaint system",
    slug: "nextgen-complaint",
    description: "Introducing a complaint system on Polygon blockchain for seamless and transparent complaint submission and management. Benefit from rapid transactions, low fees, and enhanced security, ensuring swift resolution and accountability. Goodbye to bureaucratic delays with our blockchain-powered solution.",
    detailedDescription: {
      overview: "The NextGen Police Complaint System revolutionizes the traditional complaint filing process by leveraging blockchain technology. It ensures transparency, immutability, and efficiency in handling police complaints while maintaining complete privacy and security.",
      features: [
        "Blockchain-based complaint submission",
        "Real-time complaint tracking",
        "Secure and immutable records",
        "Automated status updates",
        "Transparent resolution process",
        "Low transaction fees using Polygon"
      ],
      technicalDetails: [
        "Built on Polygon blockchain network",
        "Smart contracts for complaint management",
        "Secure user authentication",
        "Real-time status tracking system",
        "Responsive web interface"
      ],
      impact: "This system significantly reduces bureaucratic delays and increases transparency in the complaint resolution process, leading to better public trust and more efficient law enforcement."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "next_main.jpeg",
    images: ["next_main.jpeg", "next_bot.jpeg", "next_complaint.jpeg", "next_complaint2.jpeg"],
    certificates: [
      {
        title: "Top 10 in IIIT Pune Ideathon",
        file: "/pdf/next_certificate.pdf",
        image: "/images/covercomplaint.png"
      }
    ],
    previewSrc: "covercomplaint.png",
    githubUrl: "https://github.com/KrishayNair/NextGen-Complaint-System",
    detailsUrl: "/projects/nextgen-complaint",
    "liveUrls": [
      {
        "title": "NextGen Police complaint system on Devfolio",
        "url": "https://devfolio.co/projects/aptosgameverse-5c9b"
      },
      {
        "title": "Video Demo Link",
        "url": "https://youtu.be/rKCAytXvgBc?si=FGz49MEJnfSCzQaC"
      },
      {
        "title": "Live Website Link",
        "url": "https://nextgen-police-complaint-system.vercel.app/"
      }
    ],
    color: "#E24AA3",
    achievements: [
      {
        title: "Top 10 in IIIT Pune Ideathon",
        icon: "🏆",
        description: "Recognized for significantly reducing complaint resolution time"
      }
      
    ]
  },

  
  {
    title: "Believe Charity",
    slug: "believe-charity",
    description: "Empower charitable giving with our Ethereum blockchain crowdfunding system. Utilizing smart contracts, we offer a transparent, secure platform for seamless donations and impact tracking. Revolutionize philanthropy with blockchain's transparency and efficiency.",
    detailedDescription: {
      overview: "Believe Charity is a revolutionary blockchain-based crowdfunding platform that brings transparency and trust to charitable giving. It enables donors to track their contributions and see the real impact of their donations through smart contracts.",
      features: [
        "Ethereum blockchain integration",
        "Smart contract-based donations",
        "Transparent fund tracking",
        "Real-time impact visualization",
        "Secure payment processing",
        "Donor recognition system"
      ],
      technicalDetails: [
        "Ethereum smart contracts",
        "Web3 integration",
        "Secure payment gateway",
        "Real-time transaction tracking",
        "Responsive frontend design"
      ],
      impact: "Believe Charity has successfully facilitated numerous charitable campaigns, bringing transparency and trust to the donation process while ensuring funds reach their intended recipients."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "coverbelieve.png",
    images: ["coverbelieve.png", "believe_org.jpeg"],
    certificates: [
      {
        title: "Best project on Social Impact Award",
        file: "/images/believe_certificate.jpeg",
        image: "/images/believe_winner.jpeg"
      }
    ],
    previewSrc: "coverbelieve.png",
    githubUrl: "https://github.com/KrishayNair/Believe-Charity",
    detailsUrl: "/projects/believe-charity",
    liveUrl: "https://believe-charity.vercel.app",
    color: "#5CC2F2",
    achievements: [
      {
        title: "Best project on Social Impact Award",
        icon: "🏆",
        description: "Recognized for innovative use of blockchain in philanthropy"
      }
    ]
  },
 
  {
    title: "SecureClick",
    slug: "secureclick",
    description: "To combat rising phishing threats, we propose an AI and ML-powered solution using WHOIS databases for domain insights. Our tool distinguishes phishing from legitimate domains through backend analysis and integrates advanced email/SMS spam detection for comprehensive defense.",
    detailedDescription: {
      overview: "SecureClick is an advanced security solution that leverages artificial intelligence and machine learning to protect users from phishing attacks and spam. It provides real-time analysis of domains and communications to ensure safe browsing and messaging experiences.",
      features: [
        "Real-time domain analysis using WHOIS databases",
        "AI-powered phishing detection",
        "Advanced email and SMS spam filtering",
        "Instant threat alerts and notifications",
        "User-friendly security dashboard",
        "Comprehensive security reports"
      ],
      technicalDetails: [
        "Built with Flask for backend and modern HTML/CSS for frontend",
        "Machine learning models for threat detection",
        "Integration with WHOIS databases",
        "Real-time analysis and processing",
        "Secure API endpoints for threat checking"
      ],
      impact: "SecureClick provides a crucial layer of security in today's digital landscape, helping users and organizations protect themselves from sophisticated phishing attacks and spam."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "secureclick 1.png",
    images: ["secureclick 1.png", "secureclick 2.png", "secureclick 3.png"],
    previewSrc: "secureclick 1.png",
    githubUrl: "https://github.com/KrishayNair/SecureClick",
    detailsUrl: "/projects/secureclick",
    liveUrl: "https://secureclick.vercel.app",
    color: "#E24AA3",
    achievements: [
      {
        title: "Hackathon Winner",
        icon: "🏆",
        description: "Recognized as an innovative security solution in multiple hackathons"
      },
      {
        title: "User Adoption",
        icon: "👥",
        description: "Successfully deployed and used by multiple organizations for security enhancement"
      }
    ]
  },
  

  {
    title: "ICARUS 2023",
    slug: "icarus-2023",
    description: "Introducing the Icarus Fest 2023 website: your gateway to RGITS Technical Fest. Crafted in React.js, our user-friendly platform lets you effortlessly explore events, register, and stay updated with real-time information. Immerse yourself in a visually appealing, responsive, and intuitive UI design for an unforgettable fest experience.",
    detailedDescription: {
      overview: "ICARUS 2023 is a comprehensive technical fest website that serves as the central hub for RGITS's annual technical festival. It provides an engaging platform for students to explore, register, and participate in various technical events.",
      features: [
        "Event registration system",
        "Real-time updates and notifications",
        "Interactive event schedule",
        "Participant dashboard",
        "Live results tracking",
        "Responsive design for all devices"
      ],
      technicalDetails: [
        "Built with React.js",
        "Modern UI/UX design",
        "Real-time data updates",
        "Secure authentication system",
        "Optimized performance"
      ],
      impact: "The ICARUS 2023 website successfully managed the registration and participation of thousands of students across multiple technical events, making it the most successful technical fest in RGITS history."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "covericarus.png",
    images: ["covericarus.png", "icarus2.png", "icarus3.png"],
    previewSrc: "covericarus.png",
    githubUrl: "https://github.com/KrishayNair/ICARUS-2023",
    detailsUrl: "/projects/icarus-2023",
    liveUrl: "https://icarus23.netlify.app/",
    color: "#905BF0",
    achievements: [
      {
        title: "Best Technical Website",
        icon: "🌐",
        description: "Awarded for outstanding web design and functionality"
      },
      {
        title: "User Engagement",
        icon: "📊",
        description: "Achieved record-breaking user engagement during the fest"
      }
    ]
  },
  {
    title: "AyurLeaf AI",
    slug: "ayurleaf-ai",
    description: "Introducing a deep learning-based website revolutionizing Ayurvedic medicine by automating the identification and understanding of medicinal leaves. Traditional methods are time-consuming and error-prone; our platform provides quick and accurate analysis, eliminating the need for expert knowledge.",
    detailedDescription: {
      overview: "AyurLeaf AI is an innovative platform that combines deep learning with traditional Ayurvedic knowledge to provide accurate identification and information about medicinal plants. It helps bridge the gap between traditional medicine and modern technology.",
      features: [
        "AI-powered leaf identification",
        "Comprehensive plant database",
        "Medicinal properties information",
        "Usage guidelines and precautions",
        "Image processing capabilities",
        "Multi-language support"
      ],
      technicalDetails: [
        "Deep learning models for image recognition",
        "Flask backend with Python",
        "Responsive web interface",
        "Image processing pipeline",
        "Secure data storage"
      ],
      impact: "AyurLeaf AI has made significant contributions to preserving and modernizing Ayurvedic knowledge, making it more accessible to both practitioners and the general public."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "coverpython.png",
    images: ["coverpython.png", "ayurleaf2.png", "ayurleaf3.png"],
    previewSrc: "coverpython.png",
    githubUrl: "https://github.com/KrishayNair/AyurLeaf-AI",
    detailsUrl: "/projects/ayurleaf-ai",
    liveUrl: "https://ayurleaf-ai.vercel.app",
    color: "#905BF0",
    achievements: [
      {
        title: "AI Innovation Award",
        icon: "🤖",
        description: "Recognized for innovative use of AI in traditional medicine"
      },
      {
        title: "Healthcare Impact",
        icon: "🏥",
        description: "Successfully deployed in multiple healthcare institutions"
      }
    ]
  },
  {
    title: "GDSC RGIT",
    slug: "gdsc-rgit",
    description: "Introducing the GDSC (RGIT) website: a community informative platform built on ReactJS and Styled components. Showcase events and community details with a focus on responsiveness and UI friendliness. Created by the GDSC RGIT web team, it features carousels and comprehensive activity details.",
    detailedDescription: {
      overview: "The GDSC RGIT website serves as the digital hub for the Google Developer Student Club at RGIT, providing a platform for students to learn about upcoming events, workshops, and community activities.",
      features: [
        "Event management system",
        "Community member profiles",
        "Activity calendar",
        "Resource sharing platform",
        "News and updates section",
        "Interactive UI components"
      ],
      technicalDetails: [
        "React.js frontend",
        "Styled components for styling",
        "Responsive design",
        "Dynamic content management",
        "Performance optimization"
      ],
      impact: "The website has successfully increased community engagement and participation in GDSC activities, making it easier for students to stay connected and informed about tech events and opportunities."
    },
    tech: "FLASK, HTML, CSS, PYTHON, ML",
    src: "covergdsc.png",
    images: ["covergdsc.png", "gdsc2.png", "gdsc3.png"],
    previewSrc: "covergdsc.png",
    githubUrl: "https://github.com/KrishayNair/GDSC-RGIT",
    detailsUrl: "/projects/gdsc-rgit",
    liveUrl: "https://gdscrgit.netlify.app",
    color: "#E24AA3",
    achievements: [
      {
        title: "Community Excellence",
        icon: "👥",
        description: "Recognized as one of the most active GDSC chapters"
      },
      {
        title: "Design Award",
        icon: "🎨",
        description: "Awarded for outstanding UI/UX design"
      }
    ]
  }
];