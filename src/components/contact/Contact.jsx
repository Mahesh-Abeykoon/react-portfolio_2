import { useState } from 'react';
import './contact.scss'

export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I0G-374jx9SPUFRnVQaCmAHaE8%26pid%3DApi&f=1&ipt=da2df203919da8057b7203e8636b176557105bc0617900e679e6fdd05642ee6f&ipo=images"/>
      </div>
      
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email'/>
          <textarea placeholder='Message'></textarea> 
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply</span>}
        </form>
      </div>
    </div>
  )
}
