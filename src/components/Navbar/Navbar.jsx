import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import t from '../../assets/Travel/t.jpg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const navigateToWeatherPage = () => {
    window.location.href = '/Weather';
  };
  const navigateToLoginPage = () => {
    window.location.href = '/Signup';
  };
  

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Toggle button for mobile menu */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
              <a href="/" onClick={() => scrollToSection('home')} className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Home</a>
                
                <a href="/about" onClick={() => scrollToSection('about')} className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">About</a>
                <a href="/Travel" onClick={() => scrollToSection('travel')} className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Travel</a>
                <a href="" onClick={() => scrollToSection('destination')} className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Destinations</a>
                {/* <a href="/Blog" onClick={() => scrollToSection('blog')} className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Blog</a>
                <a href="/App" onClick={() => scrollToSection('contact')} className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Plan Your Trip</a>
              */}
              
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex items-center">
      <div className="ml-3 relative cursor-pointer" onClick={toggleProfileMenu}>
        {/* Add the weather symbol with onClick event */}
        <span className="mr-2 text-4xl" onClick={navigateToWeatherPage}>&#x2600;</span>
        
         {/* Unicode for sun symbol */}
       {/* Add the login button with border radius */}
        {/* <button className="border  border-gray-400 px-3 py-1 rounded-md text-gray-400 hover:bg-gray-700 text-white">Login</button>
       */}
       <span className="mr-2 text-2xl border  border-gray- px-3 py-1 rounded-md text-gray-400 hover:bg-gray-700 text-white" onClick={navigateToLoginPage}>Login</span>
        
      </div>
    </div>


        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#about" onClick={() => scrollToSection('about')} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">About</a>
            <a href="#portfolio" onClick={() => scrollToSection('portfolio')} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Portfolio</a>
            <a href="#experience" onClick={() => scrollToSection('experience')} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Experience</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Contact me</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
