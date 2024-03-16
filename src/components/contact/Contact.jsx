import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLinkedinLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';




const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_h27gd0o', 'template_petnbki', form.current, {
                publicKey: 'beoiKC95LtRVDRrMJ',
            })

            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>avraaj15@gmail.com</h5>
                        <a href="mailto:avr99j@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiLinkedinLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Avraaj Matharu</h5>
                        <a href="https://www.linkedin.com/in/avraajmatharu/messaging/" target="_blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <FaWhatsapp className='contact__option-icon' />
                        <h4>Text</h4>
                        <h5>Whatsapp</h5>
                        <a href="https://wa.me/+447496999661?text=urlencodedtext" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSumbit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
