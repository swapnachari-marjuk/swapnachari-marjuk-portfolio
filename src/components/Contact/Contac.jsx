import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const emailServiceKey = import.meta.env.VITE_EMAIL_SERVICE_KEY
  const emailPId = import.meta.env.VITE_EMAIL_PUBLIC_KEY
  const emailTId = import.meta.env.VITE_EMAIL_TEMPLATE_KEY


  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        emailServiceKey,
        emailTId,
        e.target,
        emailPId
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert('Failed to send message!');
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="section-title fade-in-up">Get In Touch</h2>

        <div className="contact-wrapper">
          <div className="contact-info fade-in-up">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            <p>
              Feel free to reach out if you're looking for a dedicated MERN stack developer
              who's passionate about creating meaningful web applications.
            </p>
          </div>

          <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Tell me about your project or just say hello!"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;