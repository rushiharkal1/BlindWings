import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// importing HashRouter
import { HashRouter } from 'react-router-dom';  // Changed from BrowserRouter to HashRouter
// importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// importing css 'index.css'
import './styles/index.css';
// importing App.jsx
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>  {/* Changed from BrowserRouter to HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>
);