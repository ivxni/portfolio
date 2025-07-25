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
    title: "SnapOCR - AI-Powered Document Scanner",
    slug: "snap-ocr",
    summary: "An intelligent mobile app that uses advanced AI and ML technologies to convert document images into searchable PDF files with high accuracy.",
    description: "SnapOCR is a sophisticated AI-powered mobile application built with React Native/Expo and a Python backend that transforms physical documents into fully searchable digital files. The app leverages state-of-the-art Mistral OCR API alongside custom machine learning models for enhanced text extraction and document understanding.\n\nThe application features intelligent document preprocessing using computer vision techniques, including automatic edge detection, perspective correction, and image enhancement. The Python backend, built with FastAPI, implements advanced natural language processing for text post-processing, ensuring high-quality OCR results even from challenging document images.\n\nBeyond simple OCR, the app uses machine learning to understand document structure, classify document types, and extract key information automatically. The system includes smart features like language detection, layout analysis, and semantic search capabilities within scanned documents.",
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
    technologies: ["React Native", "Expo", "Python", "FastAPI", "TensorFlow", "OpenCV", "MongoDB", "Mistral OCR API"],
    features: [
      "AI-powered OCR with 98%+ accuracy",
      "Computer vision for automatic document enhancement",
      "Machine learning-based document classification",
      "Smart text extraction with NLP post-processing",
      "Multi-language support with automatic detection",
      "Real-time conversion progress tracking",
      "Semantic search within scanned documents",
      "Clean, minimalist user interface"
    ],
    challenges: [
      {
        title: "Optimizing AI Model Performance",
        description: "Ensuring fast and accurate OCR processing on mobile devices with limited resources.",
        solution: "Implemented a hybrid approach using edge AI for preprocessing and cloud-based models for heavy OCR tasks, with intelligent caching and optimization strategies."
      },
      {
        title: "Handling Complex Document Layouts",
        description: "Processing documents with tables, columns, and mixed content types accurately.",
        solution: "Developed custom computer vision algorithms using OpenCV and TensorFlow for layout analysis and region detection before OCR processing."
      },
      {
        title: "Cross-platform AI Integration",
        description: "Ensuring consistent AI performance across iOS and Android platforms.",
        solution: "Built a robust Python API backend with FastAPI that handles all AI processing, ensuring platform-independent performance and easy scaling."
      }
    ],
    type: "AI Mobile Application",
    client: "Internal AI Project",
    duration: "3 weeks",
    role: "AI Engineer & Full Stack Developer"
  }
];

export default projects; 