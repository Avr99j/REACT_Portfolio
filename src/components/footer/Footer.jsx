import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Avraaj</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com/Avr99j"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/avraajmatharu/"><FaLinkedinIn /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Avraaj Matharu. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer
