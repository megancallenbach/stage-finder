import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import signIn from '../actions/users/signIn'
import { replace } from 'react-router-redux'

class SignIn extends PureComponent {

  componentWillMount(){
    const { currentUser, replace } = this.props
    if (currentUser) replace('/')
  }

  submitForm(event) {
    event.preventDefault()

    const user = { email: this.refs.email.value, password: this.refs.password.value }

    this.props.signIn(user)
  }

  render(){

    return (
      <div className="signIn">
        <h2>Sign In</h2>
        <form className="signInForm" onSubmit={this.submitForm.bind(this)}>
          <h3>Email:</h3>
          <input type="text" ref="email" />
          <h3>Password:</h3>
          <input type="password" ref="password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps, { signIn, replace })(SignIn)
