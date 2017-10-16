import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import signOut from '../actions/user/sign-out'
import { Link } from 'react-router'


export class Navbar extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  // signOut(event) {
  //   event.preventDefault()
  //   this.props.signOut()
  // }

  render() {
    const { signedIn } = this.props
    return (


    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  )
}
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps)(Navbar)
