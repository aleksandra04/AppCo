import React from 'react';
import '../../styles/footerMain.scss'

const FooterMain = () => (
  <footer className='footer-main'>
    <form className='footer-form'>
      <input
        className='footer-form__input'
        placeholder='Enter your Email'
        ></input>
      <button className='footer-form__button'>Subscribe</button>
    </form>
    <div className='footer-main__info'>
      <p className='footer-main__info_logo'>AppCo</p>
      <p className='footer-main__info_rights'>
        All rights reserved by ThemeTags
      </p>
      <p className='footer-main__info_copyrights'>
        Copyrights © 2019. 
      </p>
    </div>
  </footer>
)

export default FooterMain
