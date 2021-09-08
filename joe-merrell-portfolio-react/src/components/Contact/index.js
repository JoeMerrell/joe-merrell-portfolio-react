import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        // isValid conditional statement
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
            } else {
              setErrorMessage('');
            }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          } 

          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    }

    function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
    }

    // console.log(formState);

    return (
        <section className='container-fluid mt-5'>
          <h5 className='container-fluid'>Contact me</h5>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className='container-fluid mt-4'>
                <label htmlFor="name">Name:</label>
            </div>
                <div className='text-field mt-1'>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>

            <div className='container-fluid mt-2'>
                <label htmlFor="email">Email:</label>
            </div>
            <div className='text-field mt-1'>
                <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>

            <div className='container-fluid mt-3'>
                <label htmlFor="message">Message:</label>
                <textarea className='mt-1' name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>

            {/* if error message has a truthy value, this block will render -- if it doesn't have a truthy value, it won't render: */}

            {errorMessage && (
              <div>
                <p className="container-fluid error-text basic">{errorMessage}</p>
              </div>
            )}
            <div className='container-fluid'>
            <button className='mt-2 btn btn-outline-light' type="submit">Submit</button>
            </div>
          </form>
        </section>
      )
}

export default ContactForm;