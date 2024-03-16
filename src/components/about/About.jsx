import React from 'react'
import './about.css'
import ME1 from '../../assets/me1.png'
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
                            <h5>Sectors</h5>
                            <small>100+ worldwide</small>
                        </article>
                        <article className='about__card'>
                            <LuFolderGit2 className='about__icon' />
                            <h5>Projects</h5>
                            <small>90+ completed</small>
                        </article>
                    </div>
                    <p>
                        Renowned as a Technical Virtuoso, I navigate the SDLC and STLC with precision.<br></br>
                        <strong>DevOps Engineering</strong> - Linux(ARM & X86 architecture), Shell / Bash Scripting, Creating and Maintaining VMs & Servers, Vagrant, Rosetta, Developing and maintaining CI /CD pipelines, Containerization - Docker images & containers, Kubernetes, Terraform, YAML file configurations, GitHub Actions, Azure DevOps, AWS CodeBuild, AWS CodePipeline, Jenkins, Ansible.<br></br>
                        <strong>Software Development</strong> - HTML, CSS, JavaScript, Node.js, ReactJS, JSX, jQuery, APIs, and Bootstrap.<br></br>
                        <strong>Cloud platforms</strong> - AWS & MS Azure<br></br>
                        <strong>Operating Systems</strong> - Windows, MacOS, Linux, Ubuntu, Fedora, CentOS.<br></br>
                        <strong>Automation Architect</strong> - Java, Selenium, Appium, BDD, Cucumber, Gherkin, Page Object Model, Robot, Tosca, POSTMAN, ReadyAPI, MOCHA, Jest, CHAI, WebdriverIO, ELK / OLK Stack, Building CI /CD pipelines, JIRA, Keyword driven / Data driven/ Hybrid frameworks and more across Agile and Waterfall SDLC methodologies.<br></br>
                        <strong>Data Science, ML and AI algorithms</strong> - AI/ML Alchemist providing guidance from fundamentals to advanced topics, excelling in evaluating predictive performance and navigating the landscape of deep learning. Python, Sci-kit learn, Tensorflow, Numpy, Pandas, Matplotlib, Seaborn, Decision Trees, KNNs, Logistic Regression, SVM, Neural Networks, CNN, Deep Learning, HyperParameters & Reinforcement Learning.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Connect</a>
                </div>
            </div>
        </section>
    )
}

export default About
