import React from 'react'
import './skills.css'
import reactImg from '../../assets/reactImg.png'
import nodejs from '../../assets/nodejs.png'
import postgresql from '../../assets/postgresql.png'
import devopsImg from '../../assets/devops-100.png'


const Skills = () => {
    return (
        <section id='skills'>
            <div id='aboutSection' className='section-container'>
                <span id='about' className='skillTitle'>About</span>
                <span className='skillDesc'>Skilled in Javascript, HTML5, CSS3, ReactJS, ExpressJS, Node.js, PostgreSQL, RESTful APIs, algorithms and data structures. My career goal is to combine my passion for music and education with my interest in technology and app development. In my journey, I also aim to grow as a developer by continually improving my coding skills, staying updated with the latest trends in app development, and collaborating with like-minded individuals in the tech industry. Ultimately, I envision a fulfilling career where I can make a meaningful impact on music education through the creation of user-friendly and effective learning apps while pursuing personal and professional growth in the field of app development.</span>
            </div>
            <div id='stack' className='tech-stack'>
                <span className='stack-title'> Tech Stack</span>
                <div className='skillBars'>
                    <div className='skillBar'>
                        <img src={reactImg} alt='reactImg' className='skillBarImg' />
                        <div className='skillBarText'>
                            <h2>React Developer</h2>
                            <p>Launching mobile-first applications. Using CSS frameworks like Bootstrap and Tailwind.</p>
                        </div>
                    </div>
                    <div className='skillBar'>
                        <img src={nodejs} alt='nodejsImg' className='skillBarImg' />
                        <div className='skillBarText'>
                            <h2>Backend NodeJs</h2>
                            <p>Working with Node and Express frameworks.  Building RESTful APIs and application and router level middleware. Creating migrations and seeding data with Knex.</p>
                        </div>
                    </div>
                    <div className='skillBar'>
                        <img src={postgresql} alt='postgresql' className='skillBarImg' />
                        <div className='skillBarText'>
                            <h2>PostgreSQL</h2>
                            <p>Working with SQL's data definition language and data manipulation language on PostgreSQL database.</p>
                        </div>
                    </div>
                    <div className='skillBar'>
                        <img src={devopsImg} alt='devopsImg' className='skillBarImg' />
                        <div className='skillBarText'>
                            <h2>DevOps</h2>
                            <p>Client and back-end developer operations using Render and Vercel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills