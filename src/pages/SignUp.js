import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import signUp from '../actions/users/signUp'
import '../styles/SignUp.css'

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
      <div className="formWrapper">
        <header>
          <h2>Sign Up</h2>
          <ul>
            { (this.state.emailError) ? <li>{this.state.emailError}</li> : null }
            { (this.state.passwordError) ? <li>{this.state.passwordError}</li> : null }
            { (this.state.passwordConfirmationError) ? <li>{this.state.passwordConfirmationError}</li> : null }
          </ul>
        </header>
        <main>
          <form className="signUpForm" onSubmit={this.submitForm.bind(this)}>
            <h3 className="formItem">Email:</h3>
            <input className="formItem" type="text" ref="email" />
            <h3 className="formItem">Password:</h3>
            <input className="formItem" type="password" ref="password" />
            <h3 className="formItem">Confirm password:</h3>
            <input className="formItem" type="password" ref="passwordConfirmation" />
            <input className="btn-submit formItem" type="submit" value="Submit" />
          </form>
        </main>
      </div>
    )
  }
}

export default connect(null, { signUp })(SignUp)
