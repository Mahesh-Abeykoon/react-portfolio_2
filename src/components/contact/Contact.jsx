/* eslint-disable jsx-a11y/anchor-has-content */
 //Old code snippet 
// import { useState } from 'react';
// import './contact.scss'
// export default function Contact() {

//   const [message, setMessage] = useState(false)

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     setMessage(true);
//   }

//   return (
//     <div className="contact" id="contact">
//       <div className="left">
//         <img src= ""/>
//       </div>
      
//       <div className="right">
//         <h2>Contact.</h2>
//         <form onSubmit={handleSubmit}>
//           <input type='text' placeholder='Email'/>
//           <textarea placeholder='Message'></textarea> 
//           <button type="submit">Send</button>
//           {message && <span>Thanks, I'll reply</span>}
//         </form>
//       </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import './contact.scss';
import '../../stars.scss';
import Footer from '../footer/Footer';

export default function Contact() {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  
  const sectionIds = ['intro', 'skills', 'portfolio', 'works', 'experience', 'contact'];
  const [activeDot, setActiveDot] = useState(1);

  const handleDotClick = (dotNumber) => {
    setActiveDot(dotNumber);
  };
  const resetForm = () => {
    setSenderName('');
    setSenderEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .send('service_toszhz4', 'template_4ndeumk', {
        to_email: 'mahesh.p.abeykoon@gmail.com',
        subject,
        message,
        from_name: senderName,
        from_email: senderEmail,
      }, 'juV_pTPZd3PDKwVvU')
      .then((response) => {
        console.log('Email sent successfully', response);
        setEmailSent(true);
        resetForm(); // Reset the form fields
      })
      .catch((error) => {
        console.error('Email not sent', error);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="contact-info">
              <h1>Get In Touch</h1>
              <a href="mailto:mahesh.p.abeykoon@gmail.com?subject=Hello Mahesh,&body=">
                <div>
                  <FaEnvelope />
                </div>
              </a>
              <a href="https://github.com/Mahesh-Abeykoon">
                <div>
                  <FaGithub />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mahesh-abeykoon">
                <div>
                  <FaLinkedin />
                </div>
              </a>
              <a href="https://medium.com/@maheshoabeykoon">
                <div>
                  <FaMedium />
                </div>
              </a>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  onChange={(e) => setSenderName(e.target.value)}
                  value={senderName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={(e) => setSenderEmail(e.target.value)}
                  value={senderEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
              {emailSent && (
              <div className="confirmation-message">
                Thank you for reaching out..! I'll reply soon.
              </div>
            )}
         
            </form>
            <Footer />
          </div> 
        </div>
      
        <div className="dot-navigation">
        {sectionIds.map((sectionId, index) => (
            <a 
              key={index}
              href={`#${sectionId}`}
              className={`dot ${activeDot === index + 1 ? 'active' : ''}`}
              onClick={() => handleDotClick(index + 1)}
            ></a>
          ))}
      </div>
      </div>  
    </section>
  );
}