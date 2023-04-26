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
//         <img src= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I0G-374jx9SPUFRnVQaCmAHaE8%26pid%3DApi&f=1&ipt=da2df203919da8057b7203e8636b176557105bc0617900e679e6fdd05642ee6f&ipo=images"/>
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
//import contactImg from "../images/contact-img.jpg";
import './contact.scss'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <p>
              If you would like to get in touch, please fill in the form below
              and I will get back to you as soon as possible.
            </p> */}
          
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
          </div>
        </div>
      </div>
    </section>
  );
};

