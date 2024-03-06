import React from 'react'
import CV from '../../assets/Avraaj Matharu.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Connect</a>

        </div>
    )
}

export default CTA
