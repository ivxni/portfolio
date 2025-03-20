const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    summary: "A full-featured e-commerce platform with user authentication, product management, and payment processing.",
    description: "This project is a comprehensive e-commerce solution built with React, Node.js, and MongoDB. It features a responsive design, user authentication with JWT, product management for admins, a shopping cart system, and integration with Stripe for payment processing.\n\nThe application follows modern development practices including state management with Redux, component reusability, and responsive design for all device types. The backend API is RESTful and includes comprehensive error handling and data validation.",
    thumbnail: "/images/projects/ecommerce-thumb.jpg",
    gallery: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Stripe API", "SCSS"],
    features: [
      "User registration and authentication",
      "Product browsing with filtering and sorting",
      "Shopping cart and wishlist functionality",
      "Secure checkout with Stripe integration",
      "Admin dashboard for product and order management",
      "Responsive design for all device sizes"
    ],
    challenges: [
      {
        title: "State Management Complexity",
        description: "Managing state across multiple components while handling asynchronous API calls and user interactions.",
        solution: "Implemented Redux with thunk middleware to centralize state management and handle async operations cleanly."
      },
      {
        title: "Payment Processing Security",
        description: "Ensuring secure handling of payment information and preventing fraud.",
        solution: "Used Stripe's secure elements to handle card information on the client side and webhook verification on the server."
      }
    ],
    type: "Web Application",
    client: "Personal Project",
    duration: "3 months",
    role: "Full Stack Developer",
    demoLink: "https://ecommerce-demo.example.com",
    sourceLink: "https://github.com/username/ecommerce-platform",
    featured: true
  },
  {
    id: 2,
    title: "Task Management Application",
    slug: "task-management-app",
    summary: "A collaborative task management tool with real-time updates and team functionality.",
    description: "This task management application allows teams to collaborate effectively by organizing tasks, setting deadlines, and tracking progress. The application features real-time updates using WebSockets, drag-and-drop interfaces, and a clean, intuitive design.\n\nThe frontend is built with React and uses Context API for state management. The backend uses Node.js with Express and MongoDB, with Socket.io for real-time communication between clients.",
    thumbnail: "/images/projects/taskmanager-thumb.jpg",
    gallery: [
      "/images/projects/taskmanager-1.jpg",
      "/images/projects/taskmanager-2.jpg",
      "/images/projects/taskmanager-3.jpg",
    ],
    technologies: ["React", "Context API", "Node.js", "Express", "MongoDB", "Socket.io", "CSS Grid"],
    features: [
      "Task creation, assignment, and tracking",
      "Real-time updates across all team members",
      "Kanban board with drag-and-drop interface",
      "Deadline notifications and reminders",
      "Team management and permission settings",
      "Activity logs and task history"
    ],
    challenges: [
      {
        title: "Real-time Data Synchronization",
        description: "Ensuring all users see the same task states in real-time without conflicts.",
        solution: "Implemented Socket.io with a message queue system to handle concurrent updates and ensure data consistency."
      },
      {
        title: "Performance with Many Tasks",
        description: "Maintaining fast load times and smooth interactions when dealing with hundreds of tasks.",
        solution: "Used virtualized lists and pagination combined with efficient MongoDB queries to optimize performance."
      }
    ],
    type: "Web Application",
    client: "Internal Tool",
    duration: "2 months",
    role: "Frontend Developer",
    demoLink: "https://taskmanager-demo.example.com",
    sourceLink: "https://github.com/username/task-management-app",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    summary: "A clean and interactive weather dashboard with 7-day forecasts and location search.",
    description: "This weather dashboard provides current conditions and forecasts for any location worldwide. Users can search for cities, save favorite locations, and view detailed weather information including temperature, humidity, wind speed, and more.\n\nThe application uses the OpenWeatherMap API for weather data and the Mapbox API for location services. It's built with a focus on clean UI and intuitive user experience.",
    thumbnail: "/images/projects/weather-thumb.jpg",
    gallery: [
      "/images/projects/weather-1.jpg",
      "/images/projects/weather-2.jpg",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API", "Mapbox API", "LocalStorage"],
    features: [
      "Current weather conditions display",
      "7-day weather forecast",
      "Location search with autocomplete",
      "Save favorite locations",
      "Responsive design for mobile and desktop",
      "Unit conversion (Celsius/Fahrenheit)"
    ],
    challenges: [
      {
        title: "API Rate Limiting",
        description: "Handling API rate limits while ensuring the application remains responsive.",
        solution: "Implemented caching strategy with localStorage to reduce API calls and added exponential backoff for retries."
      }
    ],
    type: "Web Application",
    duration: "3 weeks",
    role: "Frontend Developer",
    demoLink: "https://weather-demo.example.com",
    sourceLink: "https://github.com/username/weather-dashboard",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    slug: "portfolio-website",
    summary: "A modern, responsive portfolio website built with React and SCSS.",
    description: "This portfolio website showcases my skills, projects, and professional experience in an engaging and interactive way. The website features smooth animations, responsive design, and intuitive navigation.\n\nThe site is built with React for the frontend, uses SCSS for styling, and implements various modern web development techniques to ensure optimal performance and user experience across all devices.",
    thumbnail: "/images/projects/portfolio-thumb.jpg",
    gallery: [
      "/images/projects/portfolio-1.jpg",
      "/images/projects/portfolio-2.jpg",
    ],
    technologies: ["React", "SCSS", "React Router", "Framer Motion", "Responsive Design"],
    features: [
      "Interactive project showcase",
      "Skills visualization with progress indicators",
      "Contact form with validation",
      "Smooth page transitions and animations",
      "Responsive design for all device sizes"
    ],
    challenges: [
      {
        title: "Balancing Aesthetics and Performance",
        description: "Creating visually engaging animations without sacrificing load times and performance.",
        solution: "Used code splitting, lazy loading, and optimized animations to maintain smooth performance while preserving visual appeal."
      }
    ],
    type: "Website",
    duration: "2 weeks",
    role: "Frontend Developer",
    demoLink: "https://portfolio-demo.example.com",
    sourceLink: "https://github.com/username/portfolio-website",
    featured: true
  },
  {
    id: 5,
    title: "Recipe Finder Application",
    slug: "recipe-finder-app",
    summary: "An application that helps users discover recipes based on available ingredients.",
    description: "This recipe finder application allows users to input ingredients they have on hand and discover recipes they can make. It features advanced filtering options, recipe saving functionality, and nutritional information.\n\nThe application integrates with the Spoonacular API for recipe data and implements a clean, user-friendly interface designed to make cooking easier and more enjoyable.",
    thumbnail: "/images/projects/recipe-thumb.jpg",
    gallery: [
      "/images/projects/recipe-1.jpg",
      "/images/projects/recipe-2.jpg",
    ],
    technologies: ["JavaScript", "React", "CSS3", "Spoonacular API", "Firebase"],
    features: [
      "Ingredient-based recipe search",
      "Dietary restriction filters (vegan, gluten-free, etc.)",
      "Save favorite recipes",
      "Nutritional information display",
      "Step-by-step cooking instructions"
    ],
    challenges: [
      {
        title: "Complex Search Filtering",
        description: "Implementing a flexible search system with multiple filter combinations.",
        solution: "Developed a modular query builder that constructs API requests based on user selections and optimizes the search parameters."
      }
    ],
    type: "Web Application",
    duration: "1 month",
    role: "Frontend Developer",
    demoLink: "https://recipe-finder-demo.example.com",
    sourceLink: "https://github.com/username/recipe-finder-app",
    featured: false
  },
  {
    id: 6,
    title: "Budget Tracker",
    slug: "budget-tracker",
    summary: "A personal finance application for tracking expenses and income with visual reports.",
    description: "This budget tracking application helps users manage their personal finances by tracking income, expenses, and savings goals. It features interactive charts and reports to visualize spending patterns and financial progress.\n\nThe application is built with React for the frontend, Express and MongoDB for the backend, and uses Chart.js for data visualization. It implements secure user authentication and data privacy measures.",
    thumbnail: "/images/projects/budget-thumb.jpg",
    gallery: [
      "/images/projects/budget-1.jpg",
      "/images/projects/budget-2.jpg",
    ],
    technologies: ["React", "Express", "MongoDB", "Chart.js", "JWT", "CSS3"],
    features: [
      "Income and expense tracking",
      "Category-based transaction organization",
      "Budget setting and goal tracking",
      "Interactive charts and financial reports",
      "Recurring transaction automation"
    ],
    challenges: [
      {
        title: "Date-based Data Aggregation",
        description: "Creating meaningful financial reports across different time periods with varying data densities.",
        solution: "Implemented a flexible aggregation system that adapts to the selected time range and ensures consistent, meaningful visualizations."
      }
    ],
    type: "Web Application",
    duration: "2 months",
    role: "Full Stack Developer",
    demoLink: "https://budget-tracker-demo.example.com",
    sourceLink: "https://github.com/username/budget-tracker",
    featured: false
  }
];

export default projects; 