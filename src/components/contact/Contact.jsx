{/* Old code snippet */}
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
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import './contact.scss'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          
          </div>
          <div className="col-md-6">
            <form>
            <div className="contact-info">
              <h1>Get In Touch</h1>
              <div><FaEnvelope /></div>
              <div><FaPhone /></div>
              <div><FaLinkedin /></div>
              <div><FaGithub /></div>
            </div>
            {/* add 3rd party SMTP server */}
            <form action="https://mailthis.to/maheshpabeykoon@gmail.com" method="POST" role="form" class="email-form">
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
              </form>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

