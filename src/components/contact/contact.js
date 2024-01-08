import React, { useRef } from 'react'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bkzsmy5', 'template_ecuveds', form.current, 'hgjk9S9voAoprK0VE')
            .then((result) => {
                console.log(result.text);
                e.target.reset()``
                alert('Emial Sent !')
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input className='name' type='text' placeholder='Your Name' nanme='your_name'></input>
                <input className='email' type='email' placeholder='Your Email' name='your_email'></input>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' className='submitBtn'>Submit</button>
                <div className='linkContainer'>
                    <img src={linkedin} alt='linkedIn' className='link' />
                    <img src={github} alt='gitHub' className='link' />
                </div>
            </form>
        </div>
    )
}

export default Contact