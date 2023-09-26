import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="footer-links space-x-4">
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="social-links space-x-4">
            <a
              href="https://github.com/siddharthharshraj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth2909/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
            <a
              href="https://www.siddharthharshraj.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Portfolio
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            SIDDHARTH HARSH RAJ YOUTUBE CLONE &copy; 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
