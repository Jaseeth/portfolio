export const profile = {
  name: 'Jaseeth Mohamed', fullName: 'Mohamed Jaseeth Mohamed Jaleel',
  role: 'Full-Stack Software Developer', location: 'Doha, Qatar',
  email: 'jaseeth2031@gmail.com', phone: '+974 3129 2637', phoneHref: 'tel:+97431292637',
  linkedin: 'https://www.linkedin.com/in/jaseeth', resume: `${import.meta.env?.BASE_URL || '/'}Mohamed_Jaseeth_Software_Developer_CV.pdf`,
}

export const skills = {
  Frontend: ['JavaScript (ES6+)', 'React', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Responsive design'],
  Backend: ['C#', 'ASP.NET Core', 'REST APIs', 'Entity Framework', 'SQL Server', 'MySQL'],
  'CMS & commerce': ['Cofoundry CMS', 'Piranha CMS', 'NopCommerce', 'Shopify', 'WordPress'],
  Mobile: ['Flutter', 'Dart', 'REST API integration'],
  'Automation & delivery': ['n8n', 'Cloudinary', 'IIS', 'Git', 'GitHub', 'Azure DevOps', 'Visual Studio', 'VS Code'],
  'Design & interaction': ['Figma', 'SVG animation', 'Photoshop', 'Illustrator'],
}
export const learning = ['TypeScript', 'xUnit', 'Playwright', 'CI/CD']

export const projects = [
  {
    website: 'https://alemadi.com.qa/', slug: 'al-emadi-property', title: 'Al Emadi Property Platform', category: 'Enterprise Web', type: 'Web & CMS', visual: 'property', accent: '#94b8ff', label: 'Bilingual property platform',
    summary: 'A bilingual, CMS-driven real estate platform combining guided property discovery, real-time customer support, enquiry management, automated reporting, and production website monitoring.',
    tech: ['ASP.NET Core', 'C#', 'Cofoundry CMS', 'Entity Framework Core', 'SQL Server', 'SignalR', 'JavaScript', 'REST APIs', 'Web Push', 'PWA', 'Cloudinary', 'n8n', 'IIS'],
    role: 'Full-stack development and production enhancement across frontend interfaces, ASP.NET Core services, SQL Server data models, CMS integrations, real-time communication, deployment, and monitoring automation.',
    challenge: 'Create a reliable English and Arabic property experience that helps customers discover suitable listings, connect with the correct representative, and allows the business to monitor website content and performance automatically.',
    solution: 'Enhanced the existing ASP.NET Core and Cofoundry platform with dynamic property listings, advanced filters, responsive property pages, REST APIs, enquiry workflows, and Cloudinary image optimization.\n\nImplemented a bilingual, rule-based property assistant and a real-time property chat system using SignalR, SQL Server, browser push notifications, email fallback, OTP-based agent access, conversation history, transcripts, language-based routing, and mobile PWA installation.\n\nBuilt n8n workflows for content synchronization, GA4 traffic reporting, HTTP monitoring, metadata and image validation, response-time measurement, PDF generation, scheduled email delivery, and server-restart recovery.',
    outcome: 'Delivered an integrated property and customer-support platform with bilingual discovery, real-time agent communication, persistent conversation records, configurable admin controls, optimized media delivery, automated daily traffic reports, and health monitoring covering more than 180 production URLs.',
    highlights: ['English / Arabic', 'Real-time agent chat', '180+ monitored URLs'],
    contributions: ['English and Arabic property discovery and filtering', 'Rule-based property recommendation assistant', 'Real-time customer-to-agent chat using SignalR', 'SQL Server conversation, customer and notification models', 'OTP agent authentication and remembered-device sessions', 'Browser push notifications and email fallback', 'Mobile PWA installation and responsive chat interfaces', 'Conversation routing, lifecycle management and transcripts', 'Admin feature controls for chat and property assistance', 'Cloudinary and WebP image optimization', 'SEO and metadata improvements', 'Automated GA4 traffic and website-health PDF reports', 'n8n workflows, scheduled execution and server recovery'],
  },
  {
    slug: 'indoor-wayfinding', title: 'Alhazm Indoor Wayfinding', category: 'Interactive Experience', type: 'Interactive', visual: 'map', accent: '#b6a0ff', label: '30+ stores. One intuitive journey.',
    summary: 'An interactive, touch-enabled indoor navigation system built from scratch for Alhazm Mall.',
    tech: ['JavaScript', 'SVG', 'Cofoundry CMS', 'HTML5', 'CSS3'],
    role: 'Sole frontend developer, taking the project from concept through live deployment.',
    challenge: 'Help shoppers navigate more than 30 stores through a clear, touch-enabled interface.',
    solution: 'Built the interactive navigation experience using SVG path rendering and JavaScript event handling, with Cofoundry CMS supporting destination content.',
    outcome: 'Delivered visual navigation for 30+ stores. Received a Good Work Certificate from the CEO of Al Emadi Enterprises for independently delivering a technically innovative solution.',
    highlights: ['30+ stores', 'Sole frontend developer', 'CEO recognition'],
    contributions: ['Frontend concept and implementation', 'SVG path rendering and destination interactions', 'Touch-enabled navigation behavior', 'Live deployment delivery'],
  },
  {
    website: 'https://alhazm.com/', slug: 'al-hazm-website', title: 'Alhazm Website', category: 'Enterprise Web', type: 'Web & CMS', visual: 'cms', accent: '#a2adff', label: 'A destination, connected.',
    summary: 'Ongoing frontend and backend development for Alhazm’s CMS-driven website.',
    tech: ['ASP.NET Core', 'Cofoundry CMS', 'Bootstrap', 'SQL Server'],
    role: 'Frontend and backend contributor, supporting responsive UI, CMS components and API-driven updates.',
    challenge: 'Keep key pages responsive and consistent while supporting changing content and functional requirements.',
    solution: 'Developed CMS components, improved responsive interfaces and delivered API-driven functional updates across the website.',
    outcome: 'Improved mobile performance and reduced reported layout issues across key pages.',
    highlights: ['Responsive interfaces', 'CMS components', 'API-driven features'],
    contributions: ['Responsive frontend refinements', 'Cofoundry CMS component development', 'Backend-connected functional updates', 'Mobile performance and layout improvements'],
  },
  {
    slug: 'mclaren-cafe', title: 'McLaren Cafe', website: 'https://mclarencafe.com/', visual: 'cms', category: 'Hospitality Website', type: 'Web & CMS', accent: '#b6a0ff', label: 'Coffee, reservations and catering.',
    summary: 'A hospitality website bringing menu discovery, table reservation requests and event catering enquiries into one branded experience.',
    tech: ['WordPress', 'Elementor'],
    roleLabel: 'Project overview', role: 'A WordPress and Elementor website for McLaren Cafe, featuring menu browsing, a gallery, reservation forms and catering enquiries.',
    challenge: 'Help guests explore the café offering and find a clear path to table reservations or event catering.',
    solution: 'The website combines coffee and dessert menus with reservation pages, a photo gallery and contact information. Catering pages present packages and collect event details such as date, time and guest count.',
    outcome: 'A published café website with dedicated journeys for discovering the menu, requesting a table and enquiring about catering.',
    highlights: ['Menu discovery', 'Reservation requests', 'Event catering'],
    contributionsLabel: 'Website features', contributions: ['Coffee, matcha and dessert menus', 'Table reservation request form', 'Catering packages and event enquiry form', 'Gallery and contact pages'],
  },
  {
    website: 'https://teebalhazm.com/', slug: 'teeb-alhazm', title: 'Teeb Alhazm Website', category: 'Brand Experience', type: 'Web & CMS', visual: 'brand', accent: '#cfadff', label: 'From design to production.',
    summary: 'Frontend redesign and backend feature support, translating Figma designs into production templates.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'ASP.NET Core', 'Cofoundry CMS'],
    role: 'Frontend UI contributor with backend feature support, collaborating with the design team.',
    challenge: 'Translate design mockups into a consistent, maintainable production website.',
    solution: 'Worked with the design team to implement Figma mockups, improve page structure and refine visual consistency in CMS-backed templates.',
    outcome: 'Delivered production-ready templates with improved page structure and a more consistent visual experience.',
    highlights: ['Figma to frontend', 'UI redesign', 'CMS-backed templates'],
    contributions: ['Frontend UI redesign', 'Production template implementation', 'Backend feature support', 'Design collaboration and visual consistency'],
  },
  {
    website: 'https://elitesupercars.qa/', slug: 'elite-super-cars', title: 'EliteSuper Cars', category: 'Automotive Platform', type: 'Web & CMS', visual: 'vehicle', accent: '#8bbcff', label: 'Discover. Filter. Explore.',
    summary: 'Custom UI and backend-connected vehicle discovery for a luxury car dealership platform.',
    tech: ['ASP.NET Core', 'JavaScript', 'Bootstrap', 'Cofoundry CMS'],
    role: 'Developer contributing custom UI components and backend-connected features.',
    challenge: 'Make a vehicle inventory easy to explore through dynamic listings, search and filters.',
    solution: 'Built custom interface components and connected them to backend features for vehicle listings, filtering and search.',
    outcome: 'Delivered a dynamic vehicle listing interface supporting search and filtering.',
    highlights: ['Dynamic vehicle listings', 'Search & filters', 'Backend-connected UI'],
    contributions: ['Custom UI components', 'Dynamic vehicle listing interface', 'Search and filtering functionality', 'Backend feature integration'],
  },
  {
    website: 'https://topperformance.qa/', slug: 'top-performance', title: 'Topperformance Web & App', category: 'Web & Mobile', type: 'Mobile', visual: 'mobile', accent: '#a899ff', label: 'One experience. Two platforms.',
    summary: 'Frontend development for the original ASP.NET Core website, alongside mobile interface support. The current live storefront runs on Shopify.',
    tech: ['ASP.NET Core', 'Flutter', 'Dart'],
    role: 'Website frontend developer and contributor to mobile application interface screens.',
    challenge: 'Maintain design consistency between the website and mobile application.',
    solution: 'Developed the website frontend and supported mobile interface screens using Flutter and Dart.',
    outcome: 'Supported a consistent design language across the original web and mobile interfaces. The website has since moved from ASP.NET Core to Shopify; the live link opens the current storefront.',
    highlights: ['Website frontend', 'Flutter screens', 'Consistent design'],
    contributions: ['Website frontend implementation', 'Mobile application UI support', 'Web and mobile design consistency'],
  },
  {
    slug: 'alhazm-mobile-app', title: 'Alhazm Mobile App', category: 'Mobile Application', type: 'Mobile', visual: 'mobile', accent: '#b3a9ff', label: 'Reusable UI. Connected experiences.',
    summary: 'Reusable Flutter interface components and backend integration for the Alhazm Mall app.',
    tech: ['Flutter', 'Dart', 'REST APIs'],
    role: 'Mobile application contributor within a multi-developer team.',
    challenge: 'Deliver key app screens on schedule while coordinating with a broader development team.',
    solution: 'Contributed reusable UI components and backend integration tasks using Flutter, Dart and REST APIs.',
    outcome: 'Helped the team deliver key application screens on schedule.',
    highlights: ['Reusable Flutter UI', 'REST API integration', 'Team delivery'],
    contributions: ['Reusable mobile UI components', 'Backend API integration tasks', 'Collaborative delivery of key screens'],
  },
]

export const experience = [
  {
    period: 'Dec 2023 — Present', title: 'Frontend Developer', subtitle: 'Full-stack development responsibilities', company: 'Al Emadi Enterprises — Alhazm',
    description: 'Building and maintaining enterprise websites, CMS-driven platforms and business applications across the frontend, backend and database layers.',
    points: ['Developed bilingual property listings, search, filters and CMS integrations for Al Emadi Property.', 'Implemented ASP.NET Core features, REST APIs, SQL Server structures and Entity Framework data operations.', 'Improved performance and technical SEO through Cloudinary delivery, WebP images, responsive layouts and metadata.', 'Built n8n monitoring workflows for HTTP health, content synchronization, image validation and automated reports.', 'Implemented enquiry forms, email functionality, security improvements and IIS deployment configurations.', 'Supported websites, eCommerce systems and mobile interfaces through development, testing and production troubleshooting.'],
  },
  {
    period: '2022 — 2023', title: 'Junior Web Developer', company: 'Marazin Pvt. Ltd.',
    description: 'Developed client websites and reusable frontend patterns, connecting design handoffs with responsive implementation.',
    points: ['Delivered 5+ client sites using HTML5, CSS3 and JavaScript with cross-browser compatible code.', 'Refactored CSS and introduced reusable component patterns to improve visual consistency and user experience.', 'Collaborated on interface design using Figma and Photoshop.'],
  },
]
export const education = [
  { period: '2025 — 2026', title: 'BSc (Hons) Software Engineering', institution: 'Universidad Santander Panamá', detail: 'Web Technologies, Software Architecture, Database Systems and Mobile Application Development.' },
  { period: '2022 — 2023', title: 'HND in Computer Software Engineering', institution: 'ESOFT Metro Campus, Sri Lanka', detail: 'Full-stack web development, UI/UX design principles and software engineering practices.' },
]
export const achievements = [
  { title: 'Good Work Certificate', detail: 'Awarded by the CEO of Al Emadi Enterprises for independently delivering the Alhazm Indoor Wayfinding project.' },
  { title: 'ESOFT hackathon participant', detail: 'Built a functional HTML, CSS and JavaScript web application in a time-constrained coding competition.' },
  { title: 'Life Beyond HND', detail: 'Completed an outbound workshop on digital entrepreneurship and product thinking.' },
]
export const certificationsInProgress = ['Meta Frontend Developer Certificate · Coursera', 'Microsoft Azure Fundamentals · AZ-900']
