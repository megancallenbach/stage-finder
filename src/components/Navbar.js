import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import signOut from '../actions/users/signOut'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import getCurrentUser from '../actions/users/get'
import '../styles/Navbar.css'
import SearchBar from './SearchBar'


class Navbar extends PureComponent {

  componentWillMount(){
    if(this.props.currentUser) this.props.getCurrentUser(this.props.currentUser._id)
  }

  goToProfile(){
    const { currentUser, push } = this.props

    if(!currentUser.artistProfileId && !currentUser.venueProfileId) push("/create-profile")
    if(currentUser.artistProfileId) push(`/artists/${currentUser.artistProfileId}/edit`)
    if(currentUser.venueProfileId) push(`/venues/${currentUser.venueProfileId}/edit`)
  }

goToCreateEvent(){
  const{ currentUser, push } = this.props

  if (currentUser.venueProfileId) push(`/create-event`)

}



  signOutUser(){
    this.props.signOut()
  }

  sessionButtons(){
    const { currentUser } = this.props

    if (currentUser && currentUser.venueProfileId) return(
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
         { (this.props.searchBar === true) ?  this.showSearchBar() : null }
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={this.signOutUser.bind(this)}>
            log out
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={this.goToCreateEvent.bind(this)}>
            create an event
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={this.goToProfile.bind(this)}>
            my profile
          </span>
        </li>
      </ul>
    )

    else if (currentUser && !currentUser.venueProfileId) return(
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          { (this.props.searchBar === true) ?  this.showSearchBar() : null }
        </li>
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

    else return(
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          { (this.props.searchBar === true) ?  this.showSearchBar() : null }
        </li>
        <li className="nav-item">
          <Link to={'/sign-in'} className="nav-link"> log in </Link>
        </li>
        <li className="nav-item">
          <Link to={'/sign-up'} className="nav-link"> join! </Link>
        </li>
      </ul>
    )
  }

  showSearchBar() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <SearchBar id="nav-searchbar" />
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
              <Link to={'/events'} className="nav-link">all events</Link>
            </li>
            <li className="nav-item">
              <Link to={'/venues'} className="nav-link">all venues</Link>
            </li>
            <li className="nav-item">
              <Link to={'/artists'} className="nav-link">all artists</Link>
            </li>


          </ul>
          
            { this.sessionButtons() }
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })


export default connect(mapStateToProps, { signOut, push, getCurrentUser })(Navbar)
