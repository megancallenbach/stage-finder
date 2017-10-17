import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../styles/HomePage.css'
import { Link } from 'react-router'

class HomePage extends PureComponent {
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
        <div className="two-columns row">
          <div className="image-two col-sm-6">
            <h3 className="white-text"> Heb jij het lef? </h3>
            <button className="btn-orange"><Link to={'/stages'} className="link">Find your stage</Link></button>
          </div>
          <div className="text-three col-sm-6">
            <h3 className="black-text"> Wij gunnen elke musikant het lef om op een podium te gaan staan. </h3>
            <button className="btn-white"><Link to={'/inspiration'} className="link">Inspiration</Link></button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(HomePage)
