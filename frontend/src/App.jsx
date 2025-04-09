import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.scss';

// Layout components
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

// Pages
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Import FontAwesome icons
import './utils/fontawesome';

// Verbesserte ScrollToTop-Komponente
const ScrollToTop = () => {
  const { pathname, key } = useLocation();
  const initialized = useRef(false);
  
  useEffect(() => {
    // Skip initial render to avoid blocking initial page load scroll position
    if (!initialized.current) {
      initialized.current = true;
      return;
    }

    // Force multiple attempts to ensure scroll is reset
    const scrollToTop = (attempt = 0) => {
      // Multiple method attempts with both scrollTo methods
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      
      // If not at top, try again up to 3 times with increasing delays
      if (window.scrollY !== 0 && attempt < 3) {
        setTimeout(() => scrollToTop(attempt + 1), 50 * (attempt + 1));
      }
    };
    
    // Execute immediately
    scrollToTop();
    
    // And then after paint cycle to catch cases where rendering affects layout
    requestAnimationFrame(() => {
      scrollToTop();
    });
  }, [pathname, key]);
  
  return null;
};

function App() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
