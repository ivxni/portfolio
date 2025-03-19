# Portfolio Web App – Context and Overview

This document provides a structured explanation of how the Portfolio Web App should work and look. It describes the flow of the application, its components, and the core features. The goal is to create a clean, minimalistic, and modern (2025 style) portfolio site built with React, React Router, and SCSS. The design should be responsive and visually appealing on all devices.

---

## 1. Concept & Vision

- **Purpose**: Showcase your professional profile, skills, and projects in a concise manner.  
- **Design Style**:  
  - Clean, minimalistic, and noble look.  
  - Light mode design with the main accent color `#ea591b`.  
  - Use SCSS variables for easy theming (for example, `$accent-color: #ea591b;`).  
  - Smooth hover animations, transitions, and subtle interactions that enrich user experience.  
- **Content Focus**:  
  - A concise landing or "home" section that introduces who you are.  
  - A structured way to display skills as interactive icons (gray on default, colored on hover).  
  - A projects section that highlights key projects using interactive cards.  
  - A dedicated detail view for each project with a short documentation and screenshots.  
  - Contact and social media links.

## Tech Stack

- Frontend: React with JSX and React Router DOM
- UI: SCSS
- AI Processing: Claude-3.7-sonnet

---

## 2. Application Flow

### 2.1 Header

1. **Logo/Name**: A personal brand logo or your name.  
2. **Navigation Links**:  
   - Home  
   - Skills  
   - Projects  
   - Possibly a Contact link that jumps to the footer or opens a contact section.  
3. **Behavior**:  
   - The header remains visible on all main pages (e.g., a persistent element).  
   - Optional: implement a sticky header if you want consistent navigation when scrolling.  

### 2.2 Home (Landing Page)

1. **Hero Section**:  
   - A short tagline (e.g., "Hi, I'm [Name], a Full Stack Developer") or creative headline.  
   - A short description of your career, expertise, or what you focus on.  
   - A clear call-to-action button (e.g., "View My Work" or "Get in Touch") that redirects to your projects section or a contact form.  
2. **Minimalist Background**:  
   - Consider a subtle pattern or gradient that matches the accent color scheme.  
3. **Visual Impact**:  
   - Large typography for main heading.  
   - Potential small profile image or an abstract illustration that relates to your brand.  

### 2.3 Skills Section

1. **Icons & Labels**:  
   - Display icons (e.g., React, Node.js, JavaScript, C++, Python, MongoDB, MySQL, AI, etc.).  
   - These icons are initially in a grayscale or gray color scheme.  
   - On hover, each icon transitions into its official brand color (e.g., React icon turns #61DAFB).  
2. **Grid or Inline Layout**:  
   - If you have many skills, arrange them in a responsive grid that adapts to different screen sizes.  
   - Possibly group them by frontend/backend or language/framework for easier scanning.  
3. **Tooltips (Optional)**:  
   - If you hover over an icon, a small tooltip might show additional info, such as "3+ years experience" or a short skill summary.

### 2.4 Projects Section

1. **Project Cards**:  
   - Each card features a thumbnail, project name, and a brief description.  
   - On hover, the card might have a subtle scale-up or shadow effect.  
   - The user can click the card to open a dedicated project page.  
2. **Interactive Hover Effects**:  
   - Smooth transition from normal state to hover state.  
   - Ensure transitions are consistent across all cards (e.g., same duration, easing).  
3. **Layout**:  
   - A responsive grid that adjusts column count based on screen size.  

### 2.5 Project Detail Page

1. **Project Header**:  
   - Project title, short tagline, and possibly the time frame (e.g., "2022 - Ongoing").  
2. **Project Description & Documentation**:  
   - Explain the project's background, your role, technologies used, and main challenges.  
3. **Screenshots / Gallery**:  
   - Showcase images or GIFs demonstrating the UI or interesting functionalities.  
   - A lightbox or slider plugin for a modern image viewing experience (optional).  
4. **Back Navigation**:  
   - A button or link to return to the projects overview.  

### 2.6 Socials & Footer

1. **Social Media Icons**:  
   - Icons for platforms like LinkedIn, GitHub, Twitter, etc.  
   - These can also be grayscale and reveal brand color on hover.  
2. **Footer Text**:  
   - Copyright info, year, or a small personal note.  
3. **Optional**:  
   - A second set of quick links for major site sections.  
   - A short statement like "Made with React & SCSS."

---

## 3. Key Features & Suggestions

1. **Theme Variables**  
   - Use SCSS variables to define primary, secondary, text, background, and accent colors.  
   - Example:  
     ```scss
     $accent-color: #ea591b;
     $light-bg: #ffffff;
     $dark-text: #1a1a1a;
     // And so on...
     ```

2. **Responsive Design**  
   - Set breakpoints for mobile, tablet, and desktop.  
   - For example, use media queries to adapt grid layouts and typography sizes.

3. **Transitions & Animations**  
   - Use `transition: all 0.3s ease;` or similar in your SCSS to handle hover effects on icons, cards, buttons.  
   - Keep animations subtle and consistent to maintain a polished feel.

4. **React Router Integration**  
   - Each main section (e.g., Home, Skills, Projects) can be a separate route.  
   - Project detail pages can be dynamic routes (e.g., `/projects/:id`).  

5. **Performance Optimization**  
   - Leverage React's lazy loading or code-splitting for project detail pages if the site grows.  
   - Use efficient image formats and responsive images to keep loading times short.

6. **Accessibility**  
   - Implement alt-text for images and aria-labels for icons.  
   - Ensure sufficient color contrast and keyboard focus states for interactive elements.

---

## 4. Potential Extra Touches

1. **GSAP or Framer Motion**  
   - If you want more advanced or creative animations, consider these libraries.  
2. **Custom Cursor**  
   - A subtle custom cursor effect can give a unique touch if that fits your style.  
3. **Animated Headline**  
   - Use a rotating word effect or small text animations to highlight your specialization.  
4. **Dark Mode Toggle (Future)**  
   - Easily introduced later by switching SCSS variable sets on user toggle.

---

## 5. Summary

This Portfolio Web App aims to present a modern, professional, and creative space for showcasing your skills and projects. It features:

- A **minimalist landing** with a clear identity and call to action.  
- A **skills section** highlighting your tech stack with interactive hover effects.  
- A **projects overview** with clickable, animated cards that lead to **project details**.  
- A **responsive layout** that looks polished on any device.  
- **SCSS** for structured styling with variable-based theming.  
- **React Router** for clean navigation between pages.  
- A **footer** containing social media links and essential site info.

---

## 6. Optimal Folder Structure

```
portfolio-web-app/
│
├── frontend/                         # Frontend React application
│   ├── public/                       # Static files
│   │   ├── index.html                # HTML entry point
│   │   ├── favicon.ico               # App favicon
│   │   ├── manifest.json             # Web app manifest
│   │   └── assets/                   # Static assets
│   │       ├── images/               # Image assets
│   │       │   ├── projects/         # Project screenshots/thumbnails
│   │       │   ├── skills/           # Skill icons
│   │       │   └── hero/             # Hero section images
│   │       ├── fonts/                # Custom fonts
│   │       └── icons/                # Icon assets
│   │
│   ├── src/                          # React source code
│   │   ├── components/               # Reusable components
│   │   │   ├── common/               # Common UI components
│   │   │   │   ├── Button/           # Button component
│   │   │   │   │   ├── Button.jsx    
│   │   │   │   │   ├── Button.scss   
│   │   │   │   │   └── index.js      
│   │   │   │   ├── Card/             # Card component
│   │   │   │   ├── Icon/             # Icon component
│   │   │   │   ├── Modal/            # Modal component
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── layout/               # Layout components
│   │   │   │   ├── Header/           # Header component
│   │   │   │   ├── Footer/           # Footer component
│   │   │   │   └── Container/        # Container component
│   │   │   │
│   │   │   ├── home/                 # Home page components
│   │   │   │   ├── Hero/             # Hero section
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── skills/               # Skills section components
│   │   │   │   ├── SkillCard/        # Skill card component
│   │   │   │   └── SkillGrid/        # Skills grid component
│   │   │   │
│   │   │   └── projects/             # Projects section components
│   │   │       ├── ProjectCard/      # Project card component
│   │   │       ├── ProjectGrid/      # Projects grid component
│   │   │       └── ProjectDetail/    # Project detail component
│   │   │
│   │   ├── pages/                    # Page components
│   │   │   ├── HomePage.jsx          # Home page
│   │   │   ├── SkillsPage.jsx        # Skills page
│   │   │   ├── ProjectsPage.jsx      # Projects overview page
│   │   │   ├── ProjectDetailPage.jsx # Project detail page
│   │   │   └── NotFoundPage.jsx      # 404 page
│   │   │
│   │   ├── context/                  # React context (if needed)
│   │   │   └── ThemeContext.jsx      # Theme context for styling
│   │   │
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useScrollPosition.js  # Scroll position hook
│   │   │   └── useMediaQuery.js      # Media query hook
│   │   │
│   │   ├── data/                     # Data files
│   │   │   ├── projects.js           # Projects data
│   │   │   └── skills.js             # Skills data
│   │   │
│   │   ├── styles/                   # Global styles
│   │   │   ├── _variables.scss       # SCSS variables
│   │   │   ├── _mixins.scss          # SCSS mixins
│   │   │   ├── _animations.scss      # SCSS animations
│   │   │   ├── _reset.scss           # CSS reset
│   │   │   └── global.scss           # Global styles
│   │   │
│   │   ├── utils/                    # Utility functions
│   │   │   ├── helpers.js            # Helper functions
│   │   │   └── animations.js         # Animation utilities
│   │   │
│   │   ├── App.jsx                   # Main app component
│   │   ├── index.jsx                 # Entry point
│   │   └── routes.js                 # Route definitions
│   │
│   ├── .eslintrc.js                  # ESLint configuration
│   ├── .prettierrc                   # Prettier configuration
│   ├── jsconfig.json                 # JavaScript configuration
│   ├── package.json                  # Frontend dependencies
│   └── README.md                     # Frontend documentation
│
├── docs/                             # Project documentation
│   ├── CONTEXT.md                    # Project context & overview
│   └── prompts.txt                   # AI prompts for development
│
├── .gitignore                        # Git ignore file
└── README.md                         # Project overview
```

This folder structure follows modern React development practices with a focus on component-based architecture and clear separation of concerns. Key benefits include:

1. **Component Organization**: Components are grouped by type and feature, making it easy to find and reuse them.
2. **Modular Styling**: Each component has its own SCSS file, promoting style encapsulation.
3. **Separation of Concerns**: Clear separation between pages, components, styles, and data.
4. **Scalability**: The structure can easily accommodate new features or sections.
5. **Maintainability**: Following consistent naming and organizational patterns makes the codebase more maintainable.

For larger projects, you might consider adding:
- A `services/` directory for API calls if connecting to a backend
- A `store/` directory if using state management like Redux
- An `assets/` directory inside `src/` for dynamic imports of images and other assets

This structure optimizes for a clean, efficient development workflow while maintaining best practices for React applications.
