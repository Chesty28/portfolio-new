import React, { useContext, useState } from 'react';
import Axios from 'axios';
import { Context } from '../../context/context';

import Navbar from '../../UI/Navbar/Navbar';
import InteractiveText from '../../UI/InteractiveText/InteractiveText';
import Copyright from '../../UI/Copyright/Copyright';
import SocialTab from './SocialTab/SocialTab';

import s from './ContactPage.module.css';

const ContactPage = () => {
    const context = useContext(Context);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const style = {
		width: '100vw',
		height: '100vh',
		background: '#222',
		position: 'absolute',
		transform: context.contactPage ? 'translateX(0)' : 'translateX(-100%)',
		transition: 'transform 0.7s',
	};

    const sendMessage = e => {
        e.preventDefault();
        
        const emailData = { name, email, message };

        Axios.post('URL', emailData)
        .then(res => {
            // LOGIC
        })
        .catch (err => {
            // LOGIC
        })
    }

    return (
        <div className={s.contactPage} style={style}>
            <Navbar />
            {console.log(process.env.TEST)}
            <h2 className={s.contactHeader}>
                <InteractiveText type='contactHeader'/>
            </h2>

            <p className={s.contactText}>
                Do you have some offer, idea or just want to ask me something?
                Don’t hesistate to contact me right here!
            </p>

            <form className={s.contactForm} onSubmit={e => sendMessage(e)}>
                <SocialTab icon='linkedin' url='https://www.linkedin.com/in/petr-sudoma'/>
                <SocialTab icon='github' url='https://github.com/Chesty28'/>
                <SocialTab icon='facebook' url='https://www.facebook.com/petrsudoma'/>
                <SocialTab icon='instagram' url='https://www.instagram.com/petr_sudoma'/>

                <div className={s.inputsContainer}>
                    <input type='text' placeholder='Your Name' className={[s.input, s.nameInput].join(' ')} onChange={e => setName(e.target.value)} />
                    <div className={s.line}></div>

                    <input type='email' placeholder='Your Email' className={[s.input, s.emailInput].join(' ')} onChange={e => setEmail(e.target.value)} />
                    <div className={s.line}></div>

                    <textarea placeholder='Your Message' className={s.messageArea} onChange={e => setMessage(e.target.value)} />

                    <div className={s.flexbox}>
                        <button className={s.contactButton}>SEND</button>
                    </div>

                    <p className={s.forgetText}>
                        Don’t forget to type your valid email address :)
                    </p>
                </div>
            </form>

            <Copyright />
        </div>
    );
};

export default ContactPage;