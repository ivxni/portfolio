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
    experience: 'Advanced',
    description: 'Schema Design, CRUD Operations, Aggregation',
    proficiencyLevel: 90
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
    id: 8,
    name: 'React Native',
    icon: 'mobile-alt',
    iconType: 'fas',
    color: '#61DAFB',
    category: 'frontend',
    experience: 'Intermediate',
    description: 'Cross-platform mobile development with React',
    proficiencyLevel: 75
  },
  {
    id: 9,
    name: 'Angular',
    icon: 'angular',
    iconType: 'fab',
    color: '#DD0031',
    category: 'frontend',
    experience: 'Beginner',
    description: 'Components, Services, RxJS',
    proficiencyLevel: 40
  },
  {
    id: 10,
    name: 'C++',
    icon: 'code',
    iconType: 'fas',
    color: '#00599C',
    category: 'backend',
    experience: 'Beginner',
    description: 'Object-Oriented Programming, Memory Management',
    proficiencyLevel: 35
  },
  {
    id: 11,
    name: 'C#',
    icon: 'code',
    iconType: 'fas',
    color: '#239120',
    category: 'backend',
    experience: 'Intermediate',
    description: '.NET Framework, Object-Oriented Programming',
    proficiencyLevel: 65
  },
  {
    id: 12,
    name: 'Python',
    icon: 'python',
    iconType: 'fab',
    color: '#3776AB',
    category: 'backend',
    experience: 'Intermediate',
    description: 'Data Processing, Automation, Web Scraping',
    proficiencyLevel: 70
  },
  {
    id: 13,
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
    id: 14,
    name: 'Docker',
    icon: 'docker',
    iconType: 'fab',
    color: '#2496ED',
    category: 'devops',
    experience: 'Beginner',
    description: 'Containerization, Docker Compose',
    proficiencyLevel: 40
  },
  {
    id: 15,
    name: 'Azure',
    icon: 'cloud',
    iconType: 'fas',
    color: '#0078D4',
    category: 'devops',
    experience: 'Intermediate',
    description: 'App Services, Functions, Storage, DevOps',
    proficiencyLevel: 65
  },
  // Adobe Tools
  {
    id: 21,
    name: 'Photoshop',
    icon: 'adobe',
    iconType: 'fab',
    color: '#31A8FF',
    category: 'tools',
    experience: 'Intermediate',
    description: 'Image manipulation and design with Adobe Photoshop',
    proficiencyLevel: 70
  },
  {
    id: 22,
    name: 'After Effects',
    icon: 'film',
    iconType: 'fas',
    color: '#9999FF',
    category: 'tools',
    experience: 'Advanced',
    description: 'Motion graphics and visual effects',
    proficiencyLevel: 85
  },
  {
    id: 23,
    name: 'Premiere Pro',
    icon: 'video',
    iconType: 'fas',
    color: '#9999FF',
    category: 'tools',
    experience: 'Intermediate',
    description: 'Video editing and production',
    proficiencyLevel: 70
  },
  {
    id: 24,
    name: 'Illustrator',
    icon: 'pen-nib',
    iconType: 'fas',
    color: '#FF9A00',
    category: 'tools',
    experience: 'Intermediate',
    description: 'Vector graphics and illustration',
    proficiencyLevel: 70
  },
];

export default skills; 