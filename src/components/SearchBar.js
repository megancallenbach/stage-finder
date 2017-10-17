import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import signOut from '../actions/user/sign-out'
import { Link } from 'react-router'


class Navbar extends PureComponent {

  // signOut(event) {
  //   event.preventDefault()
  //   this.props.signOut()
  // }

  render() {
    return (


    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  )
}
}



export default Navbar;
