import React, { PureComponent } from 'react'
import '../styles/CreateProfile.css'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class CreateProfile extends PureComponent {
  render() {
    return (
      <div className="create-profile">
        < Navbar />
        <div className="pageWrapper">
          <div className="text">
            <h2 className="header-text">Welkom bij StageFinder! Maak meteen een profiel aan.</h2>
          </div>
          <div className="buttons">
            <button className="btn-go"><Link to={'/create-artist'} className="link">Ik ben een artiest</Link></button>
            <button className="btn-go"><Link to={'/create-venue'} className="link">Ik heb een stage</Link></button>
          </div>
        </div>
        < Footer />
      </div>
    )
  }
}
