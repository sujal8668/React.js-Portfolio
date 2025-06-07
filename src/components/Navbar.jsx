import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (id, isMobile = false) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (isMobile) {
      toggleMenu();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <nav className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-4 bg-white shadow fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-black">Sujal</Link>

        <div className="hidden md:flex gap-8 items-center font-semibold text-black">
          <button className="cursor-pointer" onClick={() => handleNavClick('home')}>Home</button>
          <button className="cursor-pointer" onClick={() => handleNavClick('about')}>About</button>
          <button className="cursor-pointer" onClick={() => handleNavClick('portfolio')}>Portfolio</button>
          <button className="cursor-pointer" onClick={() => handleNavClick('contact')}>Contact</button>
          <a href="/Resume.pdf" download className="border-2 px-6 py-2 rounded-3xl">Resume</a>
        </div>

        <div className="md:hidden ">
          <button className="cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white text-black h-screen overflow-hidden flex flex-col justify-center items-center gap-8 pt-24 z-50">
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <Link to="/" className="font-bold text-2xl text-black">Sujal</Link>
            <button className="cursor-pointer" onClick={toggleMenu}>
              <X size={28} />
            </button>
          </div>

          <button 
            onClick={() => handleNavClick('home', true)} 
            className="text-xl font-semibold cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('about', true)} 
            className="text-xl font-semibold cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('portfolio', true)} 
            className="text-xl font-semibold cursor-pointer"
          >
            Portfolio
          </button>
          <button 
            onClick={() => handleNavClick('contact', true)} 
            className="text-xl font-semibold cursor-pointer"
          >
            Contact
          </button>
          <a href="/Resume.pdf" download className="text-xl font-semibold border-2 px-6 py-2 rounded-3xl">Resume</a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;