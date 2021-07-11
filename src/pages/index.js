import * as React from "react"

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
  const plane = <FontAwesomeIcon icon={faPlane} />
  const passport = <FontAwesomeIcon icon={faPassport} />
  const money = <FontAwesomeIcon icon={faMoneyBillWave} />
  const envelope = <FontAwesomeIcon icon={faEnvelope} />
  const instagram = <FontAwesomeIcon icon={faInstagram} />
  const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
  const twitter = <FontAwesomeIcon icon={faTwitter} />
  const globe = <FontAwesomeIcon icon={faGlobe} />

  const travel_information_faq1 = 
  <div>
    <ul>
      <li>Most hotels offer a shuttle service (for a fee) for large groups of passengers. Please contact your hotel for more information.</li>
      <li>There are always taxis available directly in front of the airport. They are 4-door sedans and can fit a total of 4 passengers per vehicle. The drivers know all of the major hotels in the city so just provide them with the name and you'll be on your way. The average cost of a ride is around $500 pesos (~$25 USD).</li>
    </ul>
  </div>

const travel_information_faq2 = 
<div>
  <ul>
    <li>Most banks offer currency exchange services. Please be aware that you will most likely have to wait 2-3 days for the exchange to be ready so please be sure to submit your request at least 5 days before leaving for Mexico.</li>
    <li>You may also withdraw cash from an ATM in Morelia using your debit card. There are numerous banks located near the cathedral but the one we regularly use is BBVA Bancomer. Please be aware that there is a foreign withdrawal fee of around $8 USD with BBVA and we expect this to also be the case with the other banks.</li>
  </ul>
</div>

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
                  <a className="nav-link" href="#home-section">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#ceremony-section">Ceremony</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#venue-section">Venue</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#travel-information-section">Travel Information</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq-section">FAQ's</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-us-section">Contact Us</a>
                </li>
              </ul>
              <div className="language-select">
                <span className="icon fa-lg">{globe}</span>
                <form className="d-flex">
                  <select className="form-select" aria-label="Default select example">
                    <option value="1" selected>English</option>
                    <option value="2">Espanol</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </nav>

        {/* Home */}
        <div className="container">
          <div className="home-section" id="home-section">
            <div className="header">Ivan & Marilynn's Wedding</div>
            <img src="/ivan_and_marilynn_horizontal.png" alt="Ivan and Marilynn" />
            <div>
              Friday, July 30, 2021
              <br />
              Morelia, Michoacan, Mexico
              </div>
            <button type="button" className="btn btn-dark">Find your seat</button>
          </div>
        </div>
        
      
        {/* Ceremony */}
        <div className="container">
          <div className="ceremony-section" id="ceremony-section">
            <div className="header">Ceremony</div>
            <div className="ceremony-text">
              Cathedral of Morelia
              <br />
              12:00PM
            </div>
            <a href="https://goo.gl/maps/Sn1mRjvKtQAyR4S18" rel='noopener noreferrer' target='_blank'><button type="button" className="btn btn-outline-dark">Get directions</button></a>
          </div>
        </div>
        
        {/* Venue */}
        <div className="venue-section" id="venue-section">
          <div className="header">Venue</div>
          <div className="venue-text">
            <div>
              <span>Casa Grande</span>
              <br />
              Cocktail hour: 5:00 - 6:00PM
              <br />
              Reception: 6:00PM - 12:00AM
            </div>
          </div>
          <a href="https://www.google.com/maps/dir//Casa+Grande,+Portal+Matamoros,+C.+Abasolo+98,+Centro+hist%C3%B3rico+de+Morelia,+58000+Morelia,+Mich.,+Mexico/@19.7020755,-101.1963964,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842d0e70607dea63:0x937bc9ca56599a37!2m2!1d-101.194157!2d19.7020745!3e0" rel='noopener noreferrer' target='_blank'><button type="button" className="btn btn-outline-dark">Get directions</button></a>

          {/* <img alt="Casa Grande" src="/casa_grande.webp" /> */}
          <div className="custom-shape-divider-bottom-1625981325">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
              </svg>
          </div>     
        </div>

        {/* Travel Information */}
        <div className="travel-information-section" id="travel-information-section">
          <div className="header">Travel Information</div>
          <div className="row">
            <Card
              cardTitle="Airport"
              cardText="General Francisco Mujica International Airport"
              href="https://www.google.com/maps/place/General+Francisco+Mujica+International+Airport/@19.7693433,-101.1741037,12z/data=!3m1!5s0x842d19aa987ab5e7:0xccb880dbf3843650!4m5!3m4!1s0x842d18fe1cff6a55:0xd460e1495d49a9a0!8m2!3d19.8464645!4d-101.0281372"
              icon={plane}
              buttonText="Google Maps" />

            <Card 
              cardTitle="Your Passport"
              cardText="If you do not have a valid U.S. passport or if it has expired, please take the necessary steps to obtain or renew it. Visit the U.S. Department of State website for more information."
              href="https://travel.state.gov/content/travel/en/passports.html"
              icon={passport}
              buttonText="U.S. Department of State" />

            <Card 
              cardTitle="Currency"
              cardText="The currency in Mexico is the Peso and the exchange rate is usually around $20 MXN for $1 USD."
              href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=MXN"
              icon={money}
              buttonText="Check the exchange rate" />
            
          </div>

          <div className="travel-information-accordion">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <Accordion 
                accordionButtonText="How can I get to my hotel from the airport?"
                accordionBodyText={travel_information_faq1}
                number="One" />

              <Accordion
                accordionButtonText="Where can I exchange currency?"
                accordionBodyText={travel_information_faq2}
                number="Two" />

              <Accordion 
                accordionButtonText="First time flying from Tijuana/San Diego?"
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
          
          <div className="header">FAQ's</div>

          <FrequentlyAskedQuestion 
            question="Will I need to arrange transportation between my hotel, the cathedral, and the venue?"
            answer="The church, the venue, and all of the hotels listed above are all walking distance from one another! Your total commute time between the three should be 5 - 10 minutes. You will not need to arrange for transportation of any kind. " />

          <FrequentlyAskedQuestion 
            question="Will I need to arrange transportation between my hotel, the cathedral, and the venue?"
            answer="The church, the venue, and all of the hotels listed above are all walking distance from one another! Your total commute time between the three should be 5 - 10 minutes. You will not need to arrange for transportation of any kind. " />
        </div>

        {/* Contact Us */}
        <div className="container">
          <div className="contact-us-section" id="contact-us-section">
            <div className="header">Contact Us</div>
            <div className="contact-us-body">
              <div>If you have any questions or concerns, please do not hesitate to reach out to us. We're available via email or you can reach us individually using the communucation channels below. Thank you!</div>
              
              <button type="button" className="btn btn-outline-dark">{envelope} Send us an email</button>

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
