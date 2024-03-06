import React from 'react'
import './projects.css'
import IMG1 from '../../assets/weatherDash.jpg'
// import IMG2 from '../../assets/weatherDash.jpg'
// import IMG3 from '../../assets/weatherDash.jpg'
// import IMG4 from '../../assets/weatherDash.jpg'


const Projects = () => {
    return (
        <section id='projects'>
            <h5>What I have built</h5>
            <h2>Projects</h2>

            <div className="container projects__container">
                <article className='project__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="Weather Dashboard" />
                    </div>
                    <h3>Weather Dashboard</h3>
                    <a href="https://github.com/Avr99j/weatherDashboard" className='btn' target='_blank'>GitHub</a>
                    <a href="https://avr99j.github.io/weatherDashboard/" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='project__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="Weather Dashboard" />
                    </div>
                    <h3>Weather Dashboard</h3>
                    <a href="https://github.com/Avr99j/weatherDashboard" className='btn' target='_blank'>GitHub</a>
                    <a href="https://avr99j.github.io/weatherDashboard/" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='project__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="Weather Dashboard" />
                    </div>
                    <h3>Weather Dashboard</h3>
                    <a href="https://github.com/Avr99j/weatherDashboard" className='btn' target='_blank'>GitHub</a>
                    <a href="https://avr99j.github.io/weatherDashboard/" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='project__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="Weather Dashboard" />
                    </div>
                    <h3>Weather Dashboard</h3>
                    <a href="https://github.com/Avr99j/weatherDashboard" className='btn' target='_blank'>GitHub</a>
                    <a href="https://avr99j.github.io/weatherDashboard/" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
            </div >
        </section >
    )
}

export default Projects
