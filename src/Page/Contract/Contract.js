import React, { useRef } from 'react';
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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

            <form ref={form} onSubmit={sendEmail}>
                <div className='ml-64 bg-red'>
                    <label>Name</label><br />
                    <input class="input input-bordered w-full max-w-xs" type="text" name="user_name" /><br />
                    <label>Email</label><br />
                    <input class="input input-bordered w-full max-w-xs text-black" type="email" name="user_email" /><br />
                    <label>Message</label><br />
                    <textarea class="textarea textarea-bordered text-black "  name="message" rows="6" cols="40" /><br />
                    <input class="btn btn-outline btn-secondary mb-4 mt-4" type="submit" value="Send" /><br />
                </div>
            </form>

        </div>
    );
};

export default Contract;