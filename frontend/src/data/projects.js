// Import Scrum Poker images
import scrumpokerLanding from '../assets/scrumpoker/landingpage.png';
import scrumpokerGameroom from '../assets/scrumpoker/gameroom.png';
import scrumpokerCreateRoom from '../assets/scrumpoker/create-room-page.png';
import scrumpokerProfile from '../assets/scrumpoker/profilepage.png';
import scrumpokerLogin from '../assets/scrumpoker/loginpage.png';

// Import Lynx AI images
import lynxDashboard from '../assets/lynx/dashboard.webp';
import lynxUpload from '../assets/lynx/upload-document.webp';
import lynxHistory from '../assets/lynx/history.webp';
import lynxProfile from '../assets/lynx/profilepage.webp';
import lynxEditProfile from '../assets/lynx/edit-profile.webp';
import lynxLogin from '../assets/lynx/login.webp';
import lynxCreateAccount from '../assets/lynx/create-account.webp';
import lynxGetStarted from '../assets/lynx/get-started.webp';
import lynxLanguageSettings from '../assets/lynx/language-settings.webp';
import lynxAppearanceSettings from '../assets/lynx/appearance-settings.webp';

const projects = [
  {
    id: 1,
    title: "ScrumPoker - Agile Estimation Tool",
    slug: "scrum-poker",
    summary: "A real-time Scrum Poker web application for agile development teams to efficiently estimate story points.",
    description: "Developed a modern Scrum Poker application for internal company usage, featuring Microsoft SSO authentication, real-time multiplayer sessions, and an intuitive UI. The application allows scrum teams to conduct planning sessions remotely with synchronized timers, hidden card values until reveal, and statistical analysis of team estimates.\n\nThe system implements Socket.io for real-time communication, ensuring seamless interaction between team members during estimation sessions. Room creation and management features allow Scrum Masters to organize multiple sessions with unique join codes.",
    thumbnail: scrumpokerLanding,
    gallery: [
      scrumpokerGameroom,
      scrumpokerCreateRoom,
      scrumpokerProfile,
      scrumpokerLogin
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Microsoft SSO"],
    features: [
      "Microsoft SSO Authentication",
      "Real-time multiplayer Scrum Poker sessions",
      "Room creation with unique 5-letter join codes",
      "Synchronized timer controlled by Scrum Master",
      "Statistical analysis of team estimates",
      "Modern UI with clean aesthetics"
    ],
    challenges: [
      {
        title: "Real-time Synchronization",
        description: "Ensuring all users see the same state across devices during estimation sessions.",
        solution: "Implemented Socket.io with a robust event system to maintain consistent state across all clients."
      },
      {
        title: "Authentication Security",
        description: "Creating a secure, enterprise-grade authentication system.",
        solution: "Integrated Microsoft SSO with JWT token validation and proper session management."
      }
    ],
    type: "Web Application",
    client: "diconium",
    duration: "4 weeks",
    role: "Full Stack Developer"
  },
  {
    id: 2,
    title: "LynxAI - OCR Document Scanner",
    slug: "lynx-ai",
    summary: "A mobile app that converts document images to searchable PDF files using OCR technology and AI processing.",
    description: "LynxAI is a powerful mobile application built with React Native/Expo that allows users to quickly convert physical documents into fully searchable PDF files. The app leverages Mistral OCR API to extract text from images with high accuracy, creating professional digital documents.\n\nThe application features a clean, modern interface with real-time progress tracking during OCR processing, document history management, and multiple sharing options. The backend is built with Node.js/Express and MongoDB for efficient data storage and retrieval.",
    thumbnail: lynxDashboard,
    gallery: [
      lynxGetStarted,
      lynxCreateAccount,
      lynxLogin,
      lynxDashboard,
      lynxUpload,
      lynxHistory,
      lynxProfile,
      lynxEditProfile,
      lynxLanguageSettings,
      lynxAppearanceSettings
    ],
    technologies: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Mistral OCR API"],
    features: [
      "Image capture from camera or gallery",
      "OCR processing with Mistral AI",
      "Real-time conversion progress tracking",
      "Document history and management",
      "Multiple sharing options",
      "Clean, minimalist user interface"
    ],
    challenges: [
      {
        title: "Optimizing Image Processing",
        description: "Ensuring high-quality OCR results from various image sources and qualities.",
        solution: "Implemented image preprocessing techniques and format optimization before sending to the OCR API."
      },
      {
        title: "Cross-platform Compatibility",
        description: "Ensuring consistent experience across iOS and Android devices.",
        solution: "Utilized Expo platform with extensive testing on both operating systems and device-specific optimizations."
      }
    ],
    type: "Mobile Application",
    client: "Internal Project",
    duration: "2 weeks",
    role: "Full Stack Mobile Developer"
  }
];

export default projects; 