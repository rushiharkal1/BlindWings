import React from 'react';
// importing 'react-router-dom' to use
import { Routes, Route, Navigate } from 'react-router-dom';
// importing css 'App.css'
import './styles/App.css';

// Components
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

// Website Pages
import HomePage from './pages/HomePage.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {
    return (
		<>

			{/* This part is navbar */}
			<NavBar />
	
		    {/* This part will change based on the Route path */}	
		    <main className='main-content'>
		        <Routes>
			        {/* Other routes */}
		            <Route path="/" element={<Navigate to="/home" />} />
		            <Route path="/home" element={<HomePage />} />
					<Route path="/quotes" element={<HomePage />} />
					<Route path="/faqs" element={<HomePage />} />
					<Route path="/privacy" element={<HomePage />} />
					<Route path="/about" element={<HomePage />} />
		            
		            {/* Catch-all route for undefined paths */}
		            <Route path="*" element={<NotFound />} />
		        </Routes>
		    </main>
		      
			{/* This part is footer */}
		  	<Footer />
		</>
    );
}

export default App;