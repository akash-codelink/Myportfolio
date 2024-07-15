
import React from 'react';
import style from './footer.module.css'
import { FaWhatsapp, FaGithub, FaInstagram,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>
        <span>Find Me on : </span>
        <a href="https://wa.me/7305124070" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://github.com/akash-codelink" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/akash-vu08/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <div className={style.copyright}>
        <p>© {new Date().getFullYear()} Akash V. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;