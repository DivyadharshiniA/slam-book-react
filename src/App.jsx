import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';

function App() {
  return (
    <Router>
      <header className="header">
        <Link to="/" className="logo">
          <img src="download.png" alt="Logo" className="logo-img" />
          <span className="logo-text">ABC</span>
        </Link>
        <nav>
          <ol className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/aboutus" className="nav-link">About Us</Link></li>
            <li><Link to="/contactus" className="nav-link">Contact Us</Link></li>
          </ol>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2024 ABC Website. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
