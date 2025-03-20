// Importiere benutzerdefinierte Logos, wenn du möchtest
// import typescriptLogo from '../assets/logos/typescript.svg';
// import mongodbLogo from '../assets/logos/mongodb.svg';
// usw.

const skills = [
  {
    id: 1,
    name: 'HTML5',
    icon: 'html5',
    iconType: 'fab',
    // customLogo: null, // Benutze dieses Feld für benutzerdefinierte Logos
    color: '#E34F26',
    category: 'frontend',
    experience: 'Advanced',
    description: 'Semantic HTML, Accessibility, Forms',
    proficiencyLevel: 100 // Prozentsatz der Fähigkeit
  },
  {
    id: 2,
    name: 'CSS3',
    icon: 'css3-alt',
    iconType: 'fab',
    color: '#1572B6',
    category: 'frontend',
    experience: 'Advanced',
    description: 'Flexbox, Grid, Animations, Responsive Design',
    proficiencyLevel: 100
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: 'js',
    iconType: 'fab',
    color: '#F7DF1E',
    category: 'frontend',
    experience: 'Advanced',
    description: 'ES6+, DOM Manipulation, Async/Await',
    proficiencyLevel: 95
  },
  {
    id: 4,
    name: 'React',
    icon: 'react',
    iconType: 'fab',
    color: '#61DAFB',
    category: 'frontend',
    experience: 'Advanced',
    description: 'Hooks, Context API, Custom Hooks',
    proficiencyLevel: 95
  },
  {
    id: 5,
    name: 'Node.js',
    icon: 'node-js',
    iconType: 'fab',
    color: '#83CD29',
    category: 'backend',
    experience: 'Advanced',
    description: 'Express, RESTful APIs, Middleware',
    proficiencyLevel: 90
  },
  {
    id: 6,
    name: 'MongoDB',
    icon: 'database',
    iconType: 'fas',
    color: '#47A248',
    category: 'backend',
    experience: 'Intermediate',
    description: 'Schema Design, CRUD Operations, Aggregation',
    proficiencyLevel: 75
  },
  {
    id: 7,
    name: 'Sass/SCSS',
    icon: 'sass',
    iconType: 'fab',
    color: '#CC6699',
    category: 'frontend',
    experience: 'Advanced',
    description: 'Variables, Mixins, Functions, Architecture',
    proficiencyLevel: 95
  },
  {
    id: 14,
    name: 'Python',
    icon: 'python',
    iconType: 'fab',
    color: '#3776AB',
    category: 'backend',
    experience: 'Intermediate',
    description: 'Data Processing, Automation, Web Scraping',
    proficiencyLevel: 50
  },
  {
    id: 9,
    name: 'TypeScript',
    icon: 'code',
    iconType: 'fas',
    // customLogo: typescriptLogo, // Beispiel für ein benutzerdefiniertes Logo
    color: '#3178C6',
    category: 'frontend',
    experience: 'Intermediate',
    description: 'Types, Interfaces, Generics',
    proficiencyLevel: 70
  },
  {
    id: 10,
    name: 'Redux',
    icon: 'cubes',
    iconType: 'fas',
    color: '#764ABC',
    category: 'frontend',
    experience: 'Intermediate',
    description: 'State Management, Actions, Reducers',
    proficiencyLevel: 75
  },
  {
    id: 11,
    name: 'Figma',
    icon: 'figma',
    iconType: 'fab',
    color: '#F24E1E',
    category: 'design',
    experience: 'Intermediate',
    description: 'UI/UX Design, Prototyping, Components',
    proficiencyLevel: 65
  },
  {
    id: 12,
    name: 'AWS',
    icon: 'aws',
    iconType: 'fab',
    color: '#FF9900',
    category: 'devops',
    experience: 'Beginner',
    description: 'S3, EC2, Lambda, CloudFront',
    proficiencyLevel: 50
  },
  {
    id: 13,
    name: 'Docker',
    icon: 'docker',
    iconType: 'fab',
    color: '#2496ED',
    category: 'devops',
    experience: 'Intermediate',
    description: 'Containerization, Docker Compose, Deployment',
    proficiencyLevel: 68
  },
  {
    id: 17,
    name: 'C++',
    icon: 'code',
    iconType: 'fas',
    color: '#00599C',
    category: 'programming',
    experience: 'Beginner',
    description: 'Object-Oriented Programming, Memory Management, Data Structures',
    proficiencyLevel: 22
  },
  {
    id: 15,
    name: 'GraphQL',
    icon: 'project-diagram',
    iconType: 'fas',
    color: '#E535AB',
    category: 'backend',
    experience: 'Intermediate',
    description: 'Queries, Mutations, Schema Design',
    proficiencyLevel: 65
  }
];

export default skills; 