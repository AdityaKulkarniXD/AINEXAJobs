// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 mt-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <nav className="mt-4 flex justify-center space-x-4">
          <a href="#about" className="mx-2 text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#contact" className="mx-2 text-gray-600 hover:text-gray-800">
            Contact
          </a>
          <a href="#privacy" className="mx-2 text-gray-600 hover:text-gray-800">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
