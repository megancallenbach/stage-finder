import React, { PureComponent } from 'react'
import { Link } from 'react-router'

class Footer extends PureComponent {

  // signOut(event) {
  //   event.preventDefault()
  //   this.props.signOut()
  // }

  render() {
    
    return (
      <div className="footer">
        <Link to={'/contact'} className='contact'>Contact</Link>
        <Link to={'/frequentlyaskedquestions'} className='questions'>Veelgestelde vragen</Link>
        <Link to={'/about'} className='inspirations'>Over ons</Link>

      </div>
    )
  }
}

export default Footer;
