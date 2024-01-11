import React from 'react'
import './intro.css'
// import hire from '../../assets/hire2.png'
import foliverm_no_background from '../../assets/foliverm_no_background.png'
import { Link } from 'react-scroll'

export const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>
                    I'm <span className='introName'>Oliver</span> <br />Software Developer</span>
                <p className='introPara'>Web design/full-stack web development.</p>
                <Link to='contact' offset={-100} smooth={true} duration={500}>
                    <button className='btn'>
                        Hire Me
                    </button>
                </Link>
            </div>
            <img src={foliverm_no_background} alt='profilePhoto' className='bgImg' />
        </section>
    )
}

export default Intro