import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sofware para la optica .</p>
    </footer>
  );
};

export default Footer;
