import React, { PureComponent } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/About.sass'


class About extends PureComponent {
  render() {
    return(
      <div className="about-page">
        <Navbar searchBar={true} />
        <div className="scroll">
          <h1 className="contact-title"><i className="fa fa-music"></i>  About StageFinder  <i className="fa fa-music"></i></h1>
          <div className="about-container">
            <div className="row col-sm-6">
             <h2> About </h2>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default About;
