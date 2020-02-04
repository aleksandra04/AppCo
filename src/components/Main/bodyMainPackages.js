import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/bodyMainPackages.scss'
import basic from '../../images/pack_basic.png'
import standart from '../../images/pack_standart.png'
import unlimited from '../../images/pack_unlimited.png'
import line from '../../images/pack_line.svg'

const BodyMainPackages = () => (
  <section className='packages'>
    <div className='packages__header'>
      <span className='packages__header packages__header--bold'>
        Afforadble Pricing and Packages
      </span>
      <p>choose your best one</p>
    </div>
    <p className='packages__text'>
      Monotonectally grow strategic process
      improvements vis-a-vis integrated resources.
    </p>
    <div className='packages__cards'>

      <div className='card'>
        <p className='card__header'>Basic</p>
        <img src={basic} className='card__img'></img>
        <h2 className='card__price'>$29</h2>
        <img src={line}></img>
        <div className='card__text'>
          Push Notifications<br />
          Data Transfer<br />
          SQL Database<br />
          Search & SEO Analytics<br />
          24/7 Phone Support<br />
          2 months technical support<br />
          2+ profitable keyword<br />
        </div>
        <Link to='/' className='card__button'>
          Purchase now
        </Link>
      </div>

      <div className='card card--shadow'>
        <p className='card__header'>Standard</p>
        <img src={standart}></img>
        <h2 className='card__price card__price--blue'>$149</h2>
        <img src={line}></img>
        <div className='card__text'>
          Push Notifications<br />
          Data Transfer<br />
          SQL Database<br />
          Search & SEO Analytics<br />
          24/7 Phone Support<br />
          2 months technical support<br />
          2+ profitable keyword<br />
        </div>
        <Link to='/' className='card__button'>
          Purchase now
        </Link>
      </div>

      <div className='card'>
        <p className='card__header'>Unlimited</p>
        <img src={unlimited}></img>
        <h2 className='card__price'>$39</h2>
        <img src={line}></img>
        <div className='card__text'>
          Push Notifications<br />
          Data Transfer<br />
          SQL Database<br />
          Search & SEO Analytics<br />
          24/7 Phone Support<br />
          2 months technical support<br />
          2+ profitable keyword<br />
        </div>
        <Link to='/' className='card__button'>
          Purchase now
        </Link>
      </div>
    </div>
    <div className='contact'>
      <p className='contact__text'>If you need custom services or Need more?</p>
      <Link
        to='/'
        className='contact__link'
      >
        Contact us
      </Link>
    </div>
  </section>
)

export default BodyMainPackages
