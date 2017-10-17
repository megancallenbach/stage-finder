import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import signOut from '../actions/user/sign-out'
import { Link } from 'react-router'
import '../styles/Navbar.css'


export class Navbar extends PureComponent {
  // static propTypes = {
  //   signedIn: PropTypes.bool.isRequired,
  // }


  // signOut(event) {
  //   event.preventDefault()
  //   this.props.signOut()
  // }

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
                   <Link to={'/stages'} className="nav-link">all stages</Link>
               </li>
               <li className="nav-item">
                   <Link to={'/artists'} className="nav-link">all artists</Link>
               </li>
               <li className="nav-item">
                   <Link to={'/inspiration'} className="nav-link">inspiration</Link>
               </li>

           </ul>
           <ul className="navbar-nav">
               <li className="nav-item">
                    <Link to={'/signin'} className="nav-link"> Login </Link>
               </li>
               <li className="nav-item">
                   <Link to={'/signup'} className="nav-link"> Register </Link>
               </li>
           </ul>
       </div>
   </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})



export default Navbar;
