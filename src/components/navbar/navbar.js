import React from 'react'
import './navbar.css'
// import om_logo from '../../assets/om_logo.jpg'
// import message from '../../assets/message.gif'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
import hmenu from '../../assets/hmenu.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 75);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    return (
        <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
            {/* <img src={om_logo} alt='om_logo' className='om_logo' /> */}
            <div className='desktopMenu' >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' className='desktopMenuListItem'>Clients</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                {/* <img src={message} alt='message icon' className='desktopMenuBtn' /> */}
                Contact Me
            </button>
            <img src={hmenu} alt='hamburger_menu' style={{
                position: 'fixed',
                top: '1rem',
                right: '2rem',
            }} className='mobmenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>About</Link>
                <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Projects</Link>
                <Link activeClass='active' className='listItem'>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar