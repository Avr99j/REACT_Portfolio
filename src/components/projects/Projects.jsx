import React from 'react'
import './projects.css'
// import IMG1 from '../../assets/weatherDash.jpg'
// import IMG2 from '../../assets/weatherDash.jpg'
// import IMG3 from '../../assets/weatherDash.jpg'
// import IMG4 from '../../assets/weatherDash.jpg'
import skills from '../../data/projects.json'

import { useState, useEffect } from 'react'



const Projects = () => {
    return (
        <section id='projects'>
            <h5>What I have built</h5>
            <h2>Projects</h2>

            <div className="container projects__container">
                {
                    skills.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='project__item'>
                                <div className="project__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="project__item-cta">
                                    <a href={github} className='btn' target='_blank'>GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
                {/* <article className='project__item'>
                    <div className="project__item-image">
                        <img src={IMG1} alt="Weather Dashboard" />
                    </div>
                    <h3>Weather Dashboard</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/Avr99j/weatherDashboard" className='btn' target='_blank'>GitHub</a>
                        <a href="https://avr99j.github.io/weatherDashboard/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className="project__item-image">
                        <img src={IMG1} alt="Weather Dashboard" />
                    </div>
                    <h3>Weather Dashboard</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/Avr99j/weatherDashboard" className='btn' target='_blank'>GitHub</a>
                        <a href="https://avr99j.github.io/weatherDashboard/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className="project__item-image">
                        <img src={IMG1} alt="Weather Dashboard" />
                    </div>
                    <h3>Weather Dashboard</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/Avr99j/weatherDashboard" className='btn' target='_blank'>GitHub</a>
                        <a href="https://avr99j.github.io/weatherDashboard/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className="project__item-image">
                        <img src={IMG1} alt="Weather Dashboard" />
                    </div>
                    <h3>Weather Dashboard</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/Avr99j/weatherDashboard" className='btn' target='_blank'>GitHub</a>
                        <a href="https://avr99j.github.io/weatherDashboard/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article> */}
            </div >
        </section >
    )
}



export default Projects
