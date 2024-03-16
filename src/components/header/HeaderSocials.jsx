import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/avraajmatharu/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/Avr99j" target="_blank"><FaGithub /></a>
        </div >
    )
}

export default HeaderSocials
