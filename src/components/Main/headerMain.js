import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/headerMain.scss'

const HeaderMain = () => (
  <header className='header-main'>
    <div className='header-main__left'>
      <div className='header-main__left_logo'>AppCo</div>
      <div className='header-main__left_heading'>
        <span
          className='header-main__left_heading header-main__left_heading--bold'
        >
          Brainstorming
        </span>
        <span>for desired perfect Usability</span>
      </div>
      <p className='header-main__left_text'>
        Our design projects are fresh and simple and will benefit your
        business greatly. Learn more about our work!
          </p>
      <div>
        <Link to='/users' className='header-main__left_button'>View Stats</Link>
      </div>
    </div>
    <div className='header-main__phone'>
      <div className='header-main__phone_img'></div>
    </div>
  </header>
)

export default HeaderMain