import * as React from "react"
import { graphql } from "gatsby";

import {useI18next ,useTranslation} from 'gatsby-plugin-react-i18next';

import "../../scss/main.scss";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Components
import Accordion from '../../components/Accordion';
import Card from '../../components/Card';
import Icon from '../../components/Icon';
import FrequentlyAskedQuestion from '../../components/FrequentlyAskedQuestion';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMoneyBillWave, faPassport, faPlane } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';

const IndexPage = () => {
  const { t } = useTranslation();
  const {languages} = useI18next();

  const plane = <FontAwesomeIcon icon={faPlane} />
  const passport = <FontAwesomeIcon icon={faPassport} />
  const money = <FontAwesomeIcon icon={faMoneyBillWave} />
  const envelope = <FontAwesomeIcon icon={faEnvelope} />
  const instagram = <FontAwesomeIcon icon={faInstagram} />
  const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
  const twitter = <FontAwesomeIcon icon={faTwitter} />
  const globe = <FontAwesomeIcon icon={faGlobe} />

  return (
    <main>
      <div className="container-fluid">
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#home-section">{t('nav-home')}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#ceremony-section">{t('nav-ceremony')}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#venue-section">{t('nav-venue')}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#travel-information-section">{t('nav-travel-information')}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq-section">{t('nav-faqs')}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-us-section">{t('nav-contact-us')}</a>
                </li>
              </ul>
              <div className="language-select">
                <span className="icon fa-lg">{globe}</span>
                <form className="d-flex">
                  <select className="form-select" aria-label="Default select example">
                    {languages.map((lng) => (
                      <option>{lng}</option>
                    ))}
                  </select>
                </form>
              </div>
            </div>
          </div>
        </nav>

        {/* Home */}
        <div className="container">
          <div className="home-section" id="home-section">
            <div className="header">{t('home-header')}</div>
            <img src="/ivan_and_marilynn_horizontal.png" alt="Ivan and Marilynn" />
            <div className="home-date-location">
              {t('home-date')}
              <br />
              Morelia, Michoacán, México
            </div>
            <button type="button" className="btn btn-dark">{t('home-find-your-seat')}</button>
          </div>
        </div>
        
      
        {/* Ceremony */}
        <div className="container">
          <div className="ceremony-section" id="ceremony-section">
            <div className="header">{t('nav-ceremony')}</div>
            <div className="ceremony-text">
              {t('ceremony-cathedral')}
              <br />
              12:00PM
            </div>
            <a href="https://goo.gl/maps/Sn1mRjvKtQAyR4S18" rel='noopener noreferrer' target='_blank'><button type="button" className="btn btn-outline-dark">{t('get-directions')}</button></a>
          </div>
        </div>
        
        {/* Venue */}
        <div className="venue-section" id="venue-section">
          <div className="header">{t('nav-venue')}</div>
          <div className="venue-text">
            <div>
              <span>Casa Grande</span>
              <br />
              {t('venue-cocktail-hour')}: 5:00 - 6:00PM
              <br />
              {t('venue-reception')}: 6:00PM - 12:00AM
            </div>
          </div>
          <a href="https://www.google.com/maps/dir//Casa+Grande,+Portal+Matamoros,+C.+Abasolo+98,+Centro+hist%C3%B3rico+de+Morelia,+58000+Morelia,+Mich.,+Mexico/@19.7020755,-101.1963964,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842d0e70607dea63:0x937bc9ca56599a37!2m2!1d-101.194157!2d19.7020745!3e0" rel='noopener noreferrer' target='_blank'><button type="button" className="btn btn-outline-dark">{t('get-directions')}</button></a>

          {/* <img alt="Casa Grande" src="/casa_grande.webp" /> */}
          <div className="custom-shape-divider-bottom-1625981325">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
              </svg>
          </div>     
        </div>

        {/* Travel Information */}
        <div className="travel-information-section" id="travel-information-section">
          <div className="header">{t('nav-travel-information')}</div>
          <div className="row">
            <Card
              cardTitle={t('travel-information-airport-header')}
              cardText={t('travel-information-airport')}
              href="https://www.google.com/maps/place/General+Francisco+Mujica+International+Airport/@19.7693433,-101.1741037,12z/data=!3m1!5s0x842d19aa987ab5e7:0xccb880dbf3843650!4m5!3m4!1s0x842d18fe1cff6a55:0xd460e1495d49a9a0!8m2!3d19.8464645!4d-101.0281372"
              icon={plane}
              buttonText="Google Maps" />

            <Card 
              cardTitle={t('travel-information-passport-header')}
              cardText={t('travel-information-passport')}
              href="https://travel.state.gov/content/travel/en/passports.html"
              icon={passport}
              buttonText={t('travel-information-button')} />

            <Card 
              cardTitle={t('travel-information-currency-header')}
              cardText={t('travel-information-currency')}
              href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=MXN"
              icon={money}
              buttonText={t('travel-information-currency-button')} />
            
          </div>

          <div className="travel-information-accordion">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <Accordion 
                accordionButtonText={t('travel-information-faq-question1')}
                accordionBodyText={t('travel-information-faq-answer1')}
                number="One" />

              <Accordion
                accordionButtonText={t('travel-information-faq-question2')}
                accordionBodyText={t('travel-information-faq-answer2')}
                number="Two" />

              <Accordion 
                accordionButtonText={t('travel-information-faq-question3')}
                accordionBodyText={t('travel-information-faq-answer3')}
                number="Three" />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="faq-section" id="faq-section">
          <div className="custom-shape-divider-top-1625982302">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
          </div>
          
          <div className="header">{t('nav-faqs')}</div>

          <FrequentlyAskedQuestion question={t('faq-question1')} answer={t('faq-answer1')} />
          <FrequentlyAskedQuestion question={t('faq-question2')} answer={t('faq-answer2')} />
          <FrequentlyAskedQuestion question={t('faq-question3')} answer={t('faq-answer3')} />
          <FrequentlyAskedQuestion question={t('faq-question4')} answer={t('faq-answer4')} />


        </div>

        {/* Contact Us */}
        <div className="container">
          <div className="contact-us-section" id="contact-us-section">
            <div className="header">{t('nav-contact-us')}</div>
            <div className="contact-us-body">
              <div>{t('contact-us-body')}</div>
              
              <button type="button" className="btn btn-outline-dark">{envelope} {t('contact-us-button')}</button>

              <div className="contact-us-individual">
                Marilynn – &nbsp;
                <Icon href="https://api.whatsapp.com/send?phone=16264948645" icon={whatsapp} />
                <Icon href="https://www.instagram.com/muromar/" icon={instagram} />
                <Icon href="https://twitter.com/MurMarilynn" icon={twitter} />
                <br />
                Ivan – &nbsp;
                <Icon href="https://api.whatsapp.com/send?phone=16263847075" icon={whatsapp} />
                <Icon href="https://www.instagram.com/ivunortiz/" icon={instagram} />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;