import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/footerMain.scss'

const FooterMain = () => (
  <footer className='footer-main'>
    <form className='footer-form'>
      <input
        className='footer-form__input'
        placeholder='Enter your Email'
        ></input>
      <button className='footer-form__button'>
        Subscribe
      </button>
    </form>
    <div className='footer-main__info'>
      <Link to='/' className='footer-main__info_logo'>
        AppCo
      </Link>
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
