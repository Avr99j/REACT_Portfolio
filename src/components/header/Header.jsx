import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Avraaj Singh Matharu</h1>
                <h5 className="text-ligh">DevOps Engineer | Software Automation Architect| Developer| Tech Innovation Lead| Leveraging Data Science & ML Algorithms for Insights | AI Evangelist</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="my_image" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
