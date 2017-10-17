import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import '../styles/Footer.css'

class Footer extends PureComponent {


  render() {

    return (
      <div className="footer-container">
        <div className="footer">
          <Link to={'/contact'} className='link'>Contact</Link>
          <br />
          <Link to={'/frequentlyaskedquestions'} className='link'>Veelgestelde vragen</Link>
          <br />
          <Link to={'/about'} className='link'>Over ons</Link>
        </div>
        <div className="jumbotron">
          <div className="bigletter-container">
            <div className="bigletter">
              <Link to={'/'} className='link'>S</Link>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer;
