import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css';

export const Contact = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Contact | CRF Advisors, Inc.";
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      console.log('About to send request:', formData);
      const response = await fetch(`https://crfadvisors.onrender.com/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', phoneNumber: '', message: '' });
        // Redirect to home page after a short delay
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setStatusMessage('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatusMessage('Error: Unable to send your message. Please check your connection.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contactcontainer">
      <section className="contactmsg">
        <h1>Contact CRF Advisors</h1>
        <span>
          Leave us a message.
          <br />
          Let's get started.
        </span>
        <section className='feedback'>
          <p>Looking to see if a CRF Advisors product is a good fit for you? Want to provide feedback or have a general question?</p>
          <p>Please fill the form below and we will get back to you as soon as possible. </p>
        </section>
      </section>

      <section className="contactform">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button className="submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </section>
    </main>
  );
};

export default Contact;