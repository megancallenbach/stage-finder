import React, { PureComponent } from 'react'
import '../styles/HomePage.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router'

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className="home-page">
        <div className="header-bg">
          <div className="jumbotron">
            <div className="text-container">
              <h2 className="header-text">Iedereen verdient een eigen podium.</h2>
            </div>
            <div className="btn-container">
              <button className="btn-green"><Link to={'/stages'} className="link">Find your stage</Link></button>
              <button className="btn-transparent"><Link to={'/signup'} className="link">Create Profile</Link></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
