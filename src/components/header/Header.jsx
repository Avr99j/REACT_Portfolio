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
                <h1>Avraaj Matharu</h1>
                <h5 className="text-ligh">Technical Automation Architect | Tech Transformation & Innovation Lead | Cloud DevOps Engineer | AI Evangelist | Leveraging Data Science & ML Algorithms for Insights |</h5>
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
