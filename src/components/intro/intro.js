import React from 'react'
import './intro.css'
import hire from '../../assets/hire2.png'
// import foliverm_no_background from '../../assets/foliverm_no_background.png'
import { Link } from 'react-scroll'

export const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello</span>
                <span className='introText'>
                    I'm <span className='introName'>Oliver</span> <br /> Website Developer</span>
                <p className='introPara'>I'm a Blah blah blah antes tenia un hamaca donde<br /> comeia empanadas todo los dias</p>
                <Link>
                    <button className='btn'>
                        <img src={hire} alt='hireIcon' className='hireBtn' />
                        Hire Me
                    </button>
                </Link>
            </div>
            {/* <img src={foliverm_no_background} alt='profilePhoto' className='bgImg' /> */}

        </section>
    )
}

export default Intro