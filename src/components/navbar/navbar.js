import React from 'react'
import './navbar.css'
import om_logo from '../../assets/om_logo.jpg'
import message from '../../assets/message.gif'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={om_logo} alt='om_logo' className='om_logo' />
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Projects</Link>
                <Link className='desktopMenuListItem'>Clients</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={message} alt='message icon' className='desktopMenuBtn' />
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar