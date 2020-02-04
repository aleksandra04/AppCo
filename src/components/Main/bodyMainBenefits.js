import React from 'react';
import '../../styles/bodyMainBenefits.scss'
import clean_design from '../../images/clean_design.svg'
import secure_data from '../../images/secure_data.svg'
import retina_ready from '../../images/retina_ready.svg'


const BodyMainBenefits = () => (
  <section className='benefits'>

    <div className='benefits__header'>
      Why
      <span className='benefits__header benefits__header--bold'>
        small business owners love
      </span>
      AppCo?
    </div>
    <p className='benefits__text'>
      Our design projects are fresh and simple and will
      benefit your business greatly. Learn more about our work!
  </p>
    <div className='benefits__items'>
      <div className='benefits__items__item'>
        <img 
          src={clean_design}
          alt='clean design'
          className='benefits__items__item_img'
        >
          </img>
        <p className='benefits__items__item_header'>
          Clean Design
      </p>
        <p className='benefits__items__item_text'>
          Increase sales by showing true dynamics of your website.
      </p>
      </div>

      <div className='benefits__items__item'>
        <img src={secure_data} alt='secure data'></img>
        <p className='benefits__items__item_header'>
          Secure Data
      </p>
        <p className='benefits__items__item_text'>
          Build your online store’s trust using Social Proof & Urgency.
      </p>
      </div>

      <div className='benefits__items__item'>
        <img src={retina_ready} alt='retina ready'></img>
        <p className='benefits__items__item_header'>
          Retina Ready
      </p>
        <p className='benefits__items__item_text'>
          Realize importance of social proof in customer’s
          purchase decision.
      </p>
      </div>
    </div>

  </section>
)

export default BodyMainBenefits;
