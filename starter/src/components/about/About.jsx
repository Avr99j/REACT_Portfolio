import React from 'react'
import './about.css'
import ME1 from '../../assets/me.png'
import { FaAward } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { LuFolderGit2 } from "react-icons/lu";


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME1} alt="About image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>10+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FaUsersLine className='about__icon' />
                            <h5>sectors</h5>
                            <small>100+ worldwide</small>
                        </article>
                        <article className='about__card'>
                            <LuFolderGit2 className='about__icon' />
                            <h5>Projects</h5>
                            <small>90+ completed</small>
                        </article>
                    </div>
                    <p>
                        Skilled in HTML, CSS, JavaScript, ReactJS, jQuery,
                        Web APIs, Third-Party APIs, Server APIs, and
                        Bootstrap for front end development, I specialise in
                        crafting captivating and responsive user interfaces
                        to industry standards. As an automation expert
                        proficient in Java, JavaScript, and Python, I excel in
                        developing efficient frameworks and delivering end-
                        to-end solutions seamlessly.
                        Renowned as a Technical Virtuoso, I navigate the
                        SDLC and STLC with precision, translating
                        requirements into robust automation frameworks
                        and scripts. A testing aficionado, I leverage tools
                        like Selenium, Appium, Robot, Tosca, POSTMAN,
                        ReadyAPI MOCHA, CHAI, WebdriverIO, ELK Stack,
                        GitHub Actions, AWS CodeBuild/CodePipeline,
                        AWS S3 Storage & EC2 Management, JIRA, Docker
                        and more across Agile and Waterfall SDLC
                        methodologies.
                        Expertise extends to data management, extracting
                        insights from MySQL, facilitating data-driven
                        decision-making. I've implemented Machine
                        Learning models using Python libraries like Scikit-
                        learn and TensorFlow, recognized as an AI/ML
                        Alchemist exploring neural networks, reinforcement
                        learning, and clustering algorithms. I provide
                        guidance from fundamentals to advanced topics,
                        excelling in evaluating predictive performance and
                        navigating the landscape of deep learning—a unique
                        blend of technical expertise and innovation for
                        success in dynamic environments.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Connect</a>
                </div>
            </div>
        </section>
    )
}

export default About
