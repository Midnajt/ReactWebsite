import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'style={{ backgroundImage: `url(${PizzaLeft})` }}>
        </div>
        <div className='rightSide'>
            <h1>Contact us</h1>
            <form id='contact-form' method='POST' className=''>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter full name...' type='text'></input>
                <label htmlFor='email'>Email address</label>
                <input name='email' placeholder='Enter e-mail...' type='email'></input>
                <label htmlFor='message'>Message</label>
                <textarea name='message' rows='6' placeholder='Enter message...' required></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact