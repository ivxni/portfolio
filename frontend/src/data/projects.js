const projects = [
  {
    id: 1,
    title: "",
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
    featured: false
  },
  {
    id: 2,
    title: "",
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
    featured: false
  }
];

export default projects; 