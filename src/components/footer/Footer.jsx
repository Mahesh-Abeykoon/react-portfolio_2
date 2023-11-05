import React from 'react'
import './footer.scss';

export default function Footer() {

  const year = new Date().getFullYear();
  return (
      <div className='footer'>
        <p className="footer__text">
        Copyright &copy; {year} Mahesh Abeykoon. All rights reserved.
                </p>
      </div>
  
  )
}
