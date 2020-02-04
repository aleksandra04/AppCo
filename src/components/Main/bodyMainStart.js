import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/bodyMainStart.scss'
import macbook from '../../images/macbook.png'

const BodyMainStart = () => (
  <section className='start'>
      <div className='start__descr'>
        <h3 className='start__descr_header'>
          Start Managing your apps business, more faster
        </h3>
        <p className='start__descr_text'>
          Objectively deliver professional value with diverse web-readiness.
          Collaboratively transition wireless customer service without
          goal-oriented catalysts for change. Collaboratively.
        </p>
        <Link to='/'className='start__descr_button'>
          Learn more
        </Link>
      </div>
      <div className='start_img'>
        <img
          src={macbook}
          className='start_img_card'
          alt='laptop'
          >
          </img>
      </div>
  </section>
)

export default BodyMainStart