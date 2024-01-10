import React from 'react'
import './skills.css'
import reactImg from '../../assets/reactImg.png'
import nodejs from '../../assets/nodejs.png'
import postgresql from '../../assets/postgresql.png'
import devopsImg from '../../assets/devops-100.png'


const Skills = () => {
    return (
        <section id='skills'>
            <span id='about' className='skillTitle'>About</span>
            <span className='skillDesc'>My specialties are web design/full-stack web development. Completing the Thinkful program I learned industry best practices and software development standards with a focus on Javascript, HTML5, CSS3, ReactJS, ExpressJS, Node.js, PostgreSQL, RESTful APIs, algorithms and data structures. My career goal is to combine my passion for music and education with my interest in technology and app development. In my journey, I also aim to grow as a developer by continually improving my coding skills, staying updated with the latest trends in app development, and collaborating with like-minded individuals in the tech industry. Ultimately, I envision a fulfilling career where I can make a meaningful impact on music education through the creation of user-friendly and effective learning apps while pursuing personal and professional growth in the field of app development</span>
            <span id='techStack' className='stack'> Tech Stack</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={reactImg} alt='reactImg' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>React Developer</h2>
                        <p>launching mobile-first applications. Using css framworks like bootstrap</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={nodejs} alt='nodejsImg' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Backend NodeJs</h2>
                        <p>Working with node and express framworks.  Building Restufl APIs and application and router level middleware. Creatting migrations and seeding data with Knex.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={postgresql} alt='postgresql' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>PostgreSQL</h2>
                        <p>working with SQL's Data defination langauge and data manipulation langaue on PostregreSQL database</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={devopsImg} alt='devopsImg' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>DevOps</h2>
                        <p>Client and back-end developer operations using Render and Vercel</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills