import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './utils/fontawesome';

// Browser-Verhalten für Scroll konfigurieren
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Beim ersten Laden zum Anfang scrollen
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

