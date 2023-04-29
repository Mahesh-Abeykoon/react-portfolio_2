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
import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";
import './contact.scss'
import '../../stars.scss';
export default function Contact() {
  return (
    <section className="contact-section" id="contact">
              
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          
          </div>
          <div className="col-md-6">
            <form>
            <div className="contact-info">
              <h1>Get In Touch</h1>
              <a href="mailto:maheshpabeykoon@gmail.com?subject=Hi Mahesh&body=You're hired!">
                <div><FaEnvelope/></div>
              </a>
              <a href="https://github.com/Mahesh-Abeykoon">
                <div><FaGithub /> </div>
              </a>
              <a href="https://www.linkedin.com/in/mahesh-abeykoon">
                <div><FaLinkedin /> </div>
              </a>
              <a href="https://medium.com/@maheshoabeykoon">
                <div><FaMedium /> </div>
              </a>
            </div>
            {/* add 3rd party SMTP server */}
            <form className="mailthisform" action="https://mailthis.to/maheshpabeykoon@gmail.com" method="POST" >
              <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
              </div>
              </form>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

