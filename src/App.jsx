import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
// components
import Footer from './components/Footer';
// pages
import ComingSoon from './pages/ComingSoon';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';


function App() {

  return (
    <>

      {/* This part will change based on the route */}
      <main className='main-content'>
          <Routes>
            {/* Other routes */}
            <Route path="/" element={<ComingSoon />} />
            <Route path="/features" element={<ComingSoon />} />
            <Route path="/faqs" element={<ComingSoon />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App;
