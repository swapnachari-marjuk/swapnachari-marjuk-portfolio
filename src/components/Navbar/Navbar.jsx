// import React, { useState, useEffect } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       // Update active section based on scroll position
//       const sections = ['home', 'about', 'skills', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;
      
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
          
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="nav-container">
//         <div className="nav-logo">
//           <span>Ahmad Marjuk</span>
//         </div>
        
//         <ul className="nav-menu">
//           <li>
//             <button 
//               className={activeSection === 'home' ? 'active' : ''}
//               onClick={() => scrollToSection('home')}
//             >
//               Home
//             </button>
//           </li>
//           <li>
//             <button 
//               className={activeSection === 'about' ? 'active' : ''}
//               onClick={() => scrollToSection('about')}
//             >
//               About
//             </button>
//           </li>
//           <li>
//             <button 
//               className={activeSection === 'skills' ? 'active' : ''}
//               onClick={() => scrollToSection('skills')}
//             >
//               Skills
//             </button>
//           </li>
//           <li>
//             <button 
//               className={activeSection === 'projects' ? 'active' : ''}
//               onClick={() => scrollToSection('projects')}
//             >
//               Projects
//             </button>
//           </li>
//           <li>
//             <button 
//               className={activeSection === 'contact' ? 'active' : ''}
//               onClick={() => scrollToSection('contact')}
//             >
//               Contact
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">Ahmad Marjuk</div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <button
                className={activeSection === item ? "active" : ""}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href="/resume.pdf"
              download
              className="resume-btn"
            >
              <FaDownload /> Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
