import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import '../styles/Footer.css'

class Footer extends PureComponent {


  render() {

    return (
      <div className="footer-container">
        <div className="footer">
          <Link to={'/contact'} className='footer-link'>Contact</Link>
          <Link to={'/faq'} className='footer-link'>Veelgestelde vragen</Link>
          <Link to={'/about'} className='footer-link'>Over ons</Link>
          <p className="footer-text"> &copy; 2017 StageFinder </p>
        </div>
      </div>
    )
  }
}

export default Footer;
