import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import signOut from '../actions/users/signOut'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import '../styles/Navbar.css'

class Navbar extends PureComponent {

  goToProfile(){
    const { currentUser, push } = this.props

    if(!currentUser.artistProfileId && !currentUser.venueProfileId) push("/create-profile")
  }

  signOutUser(){
    this.props.signOut()
  }

  sessionButtons(){
    const { currentUser } = this.props

    if (currentUser) return(
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="nav-link" onClick={this.signOutUser.bind(this)}>
            log out
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={this.goToProfile.bind(this)}>
            my profile
          </span>
        </li>
      </ul>
    )

    return(
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/sign-in'} className="nav-link"> log in </Link>
        </li>
        <li className="nav-item">
          <Link to={'/sign-up'} className="nav-link"> join! </Link>
        </li>
      </ul>
    )
  }

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-faded">
        <Link to={'/'} className="navbar-brand"> StageFinder </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/venues'} className="nav-link">all stages</Link>
            </li>
            <li className="nav-item">
              <Link to={'/artists'} className="nav-link">all artists</Link>
            </li>
            <li className="nav-item">
              <Link to={'/inspiration'} className="nav-link">inspiration</Link>
            </li>
          </ul>
            { this.sessionButtons() }
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })


export default connect(mapStateToProps, { signOut, push })(Navbar)
