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
                            <small>14+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FaUsersLine className='about__icon' />
                            <h5>Sectors</h5>
                            <small>Diverse sectors worldwide</small>
                        </article>
                        <article className='about__card'>
                            <LuFolderGit2 className='about__icon' />
                            <h5>Projects</h5>
                            <small>Heterogeneous Technology Landscape</small>
                        </article>
                    </div>
                    <p>
                        I am a seasoned technologist with a comprehensive skill set spanning DevOps Engineering, Software Development, Cloud Platforms, Automation Architecture, Data Science, and Project Management. With a proven track record of delivering high-value projects and leading successful teams, I navigate the Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC) with precision.<br></br><br></br>

                        My expertise extends to Data Science, ML algorithms, and AI Models, where I leverage Python, Scikit-learn, TensorFlow, NumPy, Pandas, Matplotlib, Seaborn, and various machine learning algorithms such as Decision Trees, KNNs, Logistic Regression, Confusion Matrix, SVM, Neural Networks, and CNNs.<br></br><br></br>

                        As a Cloud DevOps Engineer and Automation Architect, I excel in using Java, Selenium, Appium, BDD with Cucumber and Gherkin, and have knowledge in building CI/CD pipelines using Jenkins, AWS CodeBuild / CodePipeline, GitHub Actions. I am well-versed in Agile and Waterfall SDLC methodologies. Proficient in Linux (ARM & x86 architecture), Python, and Shell/Bash scripting, I create and maintain Debian (Ubuntu) and RHEL (Fedora, CentOS) based VMs & servers, develop and maintain CI/CD pipelines, and leverage Infrastructure as Code (IaC) with Terraform. I am experienced in containerization with Docker and Kubernetes and have expertise in configuration management tools like Ansible.<br></br><br></br>

                        In Software Development, I am proficient in JavaScript, Node.js, ReactJS, JSX, jQuery, APIs, HTML, CSS, and Bootstrap. I have hands-on experience with AWS and Microsoft Azure cloud platforms, as well as various operating systems including Windows, MacOS, and Linux distributions.<br></br><br></br>

                        With a focus on continuous improvement and collaboration, I excel in delivering high-value, challenging projects, meeting deadlines, planning, management, stakeholder management, technical responses to RFPs, contributing towards bid work, presentations and managed projects across diverse domains and client portfolios spanning across diverse geographical locations, bringing a wealth of experience in understanding and addressing unique challenges and requirements. I am passionate about leveraging technology to drive innovation and deliver tangible business results.<br></br><br></br>


                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Connect</a>
                </div>
            </div>
        </section>
    )
}

export default About
