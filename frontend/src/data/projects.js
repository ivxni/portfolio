const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    summary: 'A full-featured online shopping platform with user authentication, product catalog, cart, and payment processing.',
    description: `
      This e-commerce platform provides a complete online shopping experience with a clean, intuitive interface. 
      It features user authentication, a comprehensive product catalog with search and filter functionalities, 
      cart management, checkout process, and secure payment processing.
      
      The application was built with React for the frontend, utilizing context API for state management.
      The backend was developed with Node.js and Express, with MongoDB as the database.
      User authentication is handled with JWT tokens, and Stripe is integrated for payment processing.
    `,
    thumbnail: 'https://placehold.co/600x400/orange/white?text=E-Commerce',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'SCSS'],
    liveUrl: 'https://example-ecommerce.com',
    sourceCode: 'https://github.com/janedoe/ecommerce-platform',
    images: [
      'https://placehold.co/1200x800/orange/white?text=E-Commerce+Screenshot+1',
      'https://placehold.co/1200x800/orange/white?text=E-Commerce+Screenshot+2',
      'https://placehold.co/1200x800/orange/white?text=E-Commerce+Screenshot+3'
    ],
    featured: true,
    completionDate: 'December 2023'
  },
  {
    id: 2,
    title: 'Task Management App',
    slug: 'task-management-app',
    summary: 'A productivity application for managing tasks with drag-and-drop, filtering, and calendar views.',
    description: `
      The Task Management App helps users organize their work efficiently with an intuitive and responsive interface.
      Users can create projects, add tasks, set priorities, deadlines, and track progress.
      
      Key features include:
      - Drag-and-drop task organization
      - Multiple view options (list, kanban board, calendar)
      - Task filtering and search
      - Reminders and notifications
      - Team collaboration options
      
      The frontend is built with React and uses Redux for state management.
      The backend API is developed with Node.js and Express, with PostgreSQL as the database.
    `,
    thumbnail: 'https://placehold.co/600x400/5d87e5/white?text=Task+App',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'SCSS'],
    liveUrl: 'https://example-taskapp.com',
    sourceCode: 'https://github.com/janedoe/task-management',
    images: [
      'https://placehold.co/1200x800/5d87e5/white?text=Task+App+Screenshot+1',
      'https://placehold.co/1200x800/5d87e5/white?text=Task+App+Screenshot+2',
      'https://placehold.co/1200x800/5d87e5/white?text=Task+App+Screenshot+3'
    ],
    featured: true,
    completionDate: 'August 2023'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    slug: 'weather-dashboard',
    summary: 'A modern weather application with location-based forecasts, interactive maps, and historical data.',
    description: `
      The Weather Dashboard provides users with detailed weather information for any location around the world.
      It features current conditions, hourly and 7-day forecasts, interactive maps, and historical weather data.
      
      Users can save favorite locations, receive severe weather alerts, and view detailed weather metrics like
      humidity, wind speed, UV index, and precipitation probability.
      
      The application is built with React and uses the OpenWeatherMap API for weather data.
      It features responsive design for optimal viewing on any device.
    `,
    thumbnail: 'https://placehold.co/600x400/59bfb4/white?text=Weather+App',
    technologies: ['React', 'OpenWeatherMap API', 'Leaflet Maps', 'Chart.js', 'SCSS'],
    liveUrl: 'https://example-weather.com',
    sourceCode: 'https://github.com/janedoe/weather-dashboard',
    images: [
      'https://placehold.co/1200x800/59bfb4/white?text=Weather+App+Screenshot+1',
      'https://placehold.co/1200x800/59bfb4/white?text=Weather+App+Screenshot+2',
      'https://placehold.co/1200x800/59bfb4/white?text=Weather+App+Screenshot+3'
    ],
    featured: false,
    completionDate: 'April 2023'
  },
  {
    id: 4,
    title: 'Recipe Finder',
    slug: 'recipe-finder',
    summary: 'A recipe discovery application with search by ingredients, dietary preferences, and meal planning.',
    description: `
      Recipe Finder helps users discover new meals based on their available ingredients, dietary preferences, and nutritional goals.
      The app includes thousands of recipes with detailed instructions, nutritional information, and user reviews.
      
      Key features include:
      - Search by available ingredients
      - Filter by dietary needs (vegetarian, vegan, gluten-free, etc.)
      - Meal planning calendar
      - Shopping list generator
      - Save favorite recipes
      
      Built with React and Redux for the frontend, with a Node.js backend and MongoDB database.
      It integrates with the Spoonacular API for recipe data.
    `,
    thumbnail: 'https://placehold.co/600x400/e55d87/white?text=Recipe+App',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Spoonacular API', 'SCSS'],
    liveUrl: 'https://example-recipes.com',
    sourceCode: 'https://github.com/janedoe/recipe-finder',
    images: [
      'https://placehold.co/1200x800/e55d87/white?text=Recipe+App+Screenshot+1',
      'https://placehold.co/1200x800/e55d87/white?text=Recipe+App+Screenshot+2',
      'https://placehold.co/1200x800/e55d87/white?text=Recipe+App+Screenshot+3'
    ],
    featured: true,
    completionDate: 'February 2023'
  },
  {
    id: 5,
    title: 'Personal Budget Tracker',
    slug: 'budget-tracker',
    summary: 'A financial management application to track income, expenses, and savings goals with data visualization.',
    description: `
      The Personal Budget Tracker helps users manage their finances with intuitive tracking of income and expenses.
      Users can categorize transactions, set budget limits, track savings goals, and visualize spending patterns.
      
      The application features detailed reports and charts for financial analysis, recurring transaction setup,
      and customizable categories and tags for better organization.
      
      Built with React and TypeScript for the frontend, with a Node.js/Express backend and MongoDB database.
      Chart.js is used for data visualization.
    `,
    thumbnail: 'https://placehold.co/600x400/4caf50/white?text=Budget+App',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'SCSS'],
    liveUrl: 'https://example-budget.com',
    sourceCode: 'https://github.com/janedoe/budget-tracker',
    images: [
      'https://placehold.co/1200x800/4caf50/white?text=Budget+App+Screenshot+1',
      'https://placehold.co/1200x800/4caf50/white?text=Budget+App+Screenshot+2',
      'https://placehold.co/1200x800/4caf50/white?text=Budget+App+Screenshot+3'
    ],
    featured: false,
    completionDate: 'November 2022'
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    slug: 'fitness-tracker',
    summary: 'A workout and nutrition tracking application with progress charts, exercise library, and personal records.',
    description: `
      The Fitness Tracker helps users reach their health and fitness goals by tracking workouts, nutrition, and progress.
      Users can log workouts, track sets and reps, monitor body measurements, and track personal records.
      
      The app includes an extensive exercise library with instructions and video demonstrations, customizable workout plans,
      and progress visualization with charts and graphs.
      
      Built with React Native for cross-platform mobile use, with a Node.js backend, MongoDB database,
      and Firebase for authentication.
    `,
    thumbnail: 'https://placehold.co/600x400/9c27b0/white?text=Fitness+App',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Chart.js'],
    liveUrl: 'https://example-fitness.com',
    sourceCode: 'https://github.com/janedoe/fitness-tracker',
    images: [
      'https://placehold.co/1200x800/9c27b0/white?text=Fitness+App+Screenshot+1',
      'https://placehold.co/1200x800/9c27b0/white?text=Fitness+App+Screenshot+2',
      'https://placehold.co/1200x800/9c27b0/white?text=Fitness+App+Screenshot+3'
    ],
    featured: false,
    completionDate: 'September 2022'
  }
];

export default projects; 