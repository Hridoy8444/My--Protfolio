import React, { useRef } from 'react';
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import C from '../../Images/Contact/C.jpg';
import './Contact.css';

const Contract = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_45lc327', 'template_kz0z6cy', form.current, 'XTkZeN22g4lpmtMdZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <h2 className='text-center text-4xl mt-4 mb-8 underline underline-offset-4'>Contact With Me</h2>
            <div className='flex flex-row contact-container '>
                <div>
                    <img className='contact-img' src={C} alt="" />
                </div>
                <div className='form-container'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='ml-32 bg-red form-container'>
                            <label>Name</label><br />
                            <input class="input input-bordered w-full max-w-xs" type="text" name="user_name" /><br />
                            <label>Email</label><br />
                            <input class="input input-bordered w-full max-w-xs text-black" type="email" name="user_email" /><br />
                            <label>Message</label><br />
                            <textarea class="textarea textarea-bordered text-black " name="message" rows="6" cols="40" /><br />
                            <input class="btn btn-outline btn-secondary mb-4 mt-4" type="submit" value="Send Message" /><br />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contract;