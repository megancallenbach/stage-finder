import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import signIn from '../actions/users/signIn'
import { replace } from 'react-router-redux'
import '../styles/SignUp.css'

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
      <div className="formWrapper">
        <header>
          <h2>Sign In</h2>
        </header>
        <main>
          <form className="signInForm" onSubmit={this.submitForm.bind(this)}>
            <h3 className="formItem">Email:</h3>
            <input className="formItem" type="text" ref="email" />
            <h3 className="formItem">Password:</h3>
            <input className="formItem" type="password" ref="password" />
            <input className="formItem btn-submit" type="submit" value="Submit" />
          </form>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps, { signIn, replace })(SignIn)
