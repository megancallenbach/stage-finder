import React, { PureComponent } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Contact.css'

class Contact extends PureComponent {
  render() {
    return(
      <div className="contact-page">
        <Navbar searchBar={true} />
      <div className="scroll">
        <h1 className="contact-title"><i className="fa fa-music"></i>  Welcome to StageFinder  <i className="fa fa-music"></i></h1>
        <div className="contact-container">
          <div className="row">
           <h2> Contact Info </h2>

            <p><i className="fa fa-map-marker"></i>Adres: Kennemerplein 11-17, 2011 MH Haarlem</p>
            <p><i className="fa fa-phone"></i>Telefoon: +316 15 01 58 58</p>
            <p><i className="fa fa-envelope"></i>Email: info@stagefinder.nl</p>
            <p><i className="fa fa-clock-o"></i>Openingstijden: 24/7</p>

          </div>
        </div>
        <Footer />
      </div>
      </div>
    )
  }
}

export default Contact;
