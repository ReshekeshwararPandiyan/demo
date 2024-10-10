import React, { useState } from 'react';
import './Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission (e.g., send to server)
    console.log('Form Data Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message!');
  };

  return (
    <div className='container'>
      <div className='header'>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Please fill out the form below.</p>
      </div>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
      <div className='contact-info'>
        <h3>Our Contact Details</h3>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@burgerking.com</p>
        <p>Address: 123 Food Street, Chennai</p>
      </div>
    </div>
  );
};

export default Contact;
