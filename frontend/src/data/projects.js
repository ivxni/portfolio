// Import Scrum Poker images
import scrumpoker1 from '../assets/new-scrumpoker/1.png';
import scrumpoker2 from '../assets/new-scrumpoker/2.png';
import scrumpoker3 from '../assets/new-scrumpoker/3.png';
import scrumpoker4 from '../assets/new-scrumpoker/4.png';
import scrumpoker5 from '../assets/new-scrumpoker/5.png';
import scrumpoker6 from '../assets/new-scrumpoker/6.png';
import scrumpoker7 from '../assets/new-scrumpoker/7.png';
import scrumpoker8 from '../assets/new-scrumpoker/8.png';

// Import SnapOCR images
import snapocr1 from '../assets/new-snapocr/1.webp';
import snapocr2 from '../assets/new-snapocr/2.webp';
import snapocr3 from '../assets/new-snapocr/3.webp';
import snapocr4 from '../assets/new-snapocr/4.webp';
import snapocr5 from '../assets/new-snapocr/5.webp';
import snapocr6 from '../assets/new-snapocr/6.webp';
import snapocr7 from '../assets/new-snapocr/7.webp';
import snapocr8 from '../assets/new-snapocr/8.webp';

const projects = [
  {
    id: 1,
    title: "ScrumPoker - Agile Estimation Tool",
    slug: "scrum-poker",
    summary: "A real-time Scrum Poker web application for agile development teams to efficiently estimate story points.",
    description: "Developed a modern Scrum Poker application for internal company usage, featuring Microsoft SSO authentication, real-time multiplayer sessions, and an intuitive UI. The application allows scrum teams to conduct planning sessions remotely with synchronized timers, hidden card values until reveal, and statistical analysis of team estimates.\n\nThe system implements Socket.io for real-time communication, ensuring seamless interaction between team members during estimation sessions. Room creation and management features allow Scrum Masters to organize multiple sessions with unique join codes.",
    thumbnail: scrumpoker2,
    gallery: [
      scrumpoker1,
      scrumpoker2,
      scrumpoker3,
      scrumpoker4,
      scrumpoker5,
      scrumpoker6,
      scrumpoker7,
      scrumpoker8
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
    title: "SnapOCR - Document Scanner",
    slug: "snap-ocr",
    summary: "A mobile app that converts document images to searchable PDF files using OCR technology and AI processing.",
    description: "SnapOCR is a powerful mobile application built with React Native/Expo that allows users to quickly convert physical documents into fully searchable PDF files. The app leverages Mistral OCR API to extract text from images with high accuracy, creating professional digital documents.\n\nThe application features a clean, modern interface with real-time progress tracking during OCR processing, document history management, and multiple sharing options. The backend is built with Node.js/Express and MongoDB for efficient data storage and retrieval.",
    thumbnail: snapocr1,
    gallery: [
      snapocr1,
      snapocr2,
      snapocr3,
      snapocr4,
      snapocr5,
      snapocr6,
      snapocr7,
      snapocr8
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