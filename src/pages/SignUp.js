import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import signUp from '../actions/users/signUp'

export class SignUp extends PureComponent {

  state = {}

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        email: this.refs.email.value,
        password: this.refs.password.value
      }
      this.props.signUp(user)
    }
    return false
  }

  validateAll() {
    return this.validateEmail() &&
      this.validatePassword() &&
      this.validatePasswordConfirmation()
  }

  validateEmail() {
    const email = this.refs.email.value

    if (email.match(/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false
  }

  validatePassword() {
    const password = this.refs.password.value

    if (password.length < 6) {
      this.setState({
        passwordError: 'Password is too short'
      })
      return false
    }

    if (password.match(/[a-zA-Z]+/) && password.match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return true
    }

    this.setState({
      passwordError: 'Password should contain both letters and numbers'
    })
    return false
  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.refs

    if (password.value === passwordConfirmation.value) {
      this.setState({
        passwordConfirmationError: null
      })
      return true
    }

    this.setState({
      passwordConfirmationError: 'Passwords do not match'
    })
    return false
  }

  render() {
    return (
      <div className="signUp">
        <h2>Sign Up</h2>
        <ul>
          { (this.state.emailError) ? <li>{this.state.emailError}</li> : null }
          { (this.state.passwordError) ? <li>{this.state.passwordError}</li> : null }
          { (this.state.passwordConfirmationError) ? <li>{this.state.passwordConfirmationError}</li> : null }
        </ul>
        <form className="signUpForm" onSubmit={this.submitForm.bind(this)}>
          <h3>Email:</h3>
          <input type="text" ref="email" />
          <h3>Password:</h3>
          <input type="password" ref="password" />
          <h3>Confirm password:</h3>
          <input type="password" ref="passwordConfirmation" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, { signUp })(SignUp)
