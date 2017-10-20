import React, { PureComponent } from 'react'
import Navbar from '../components/Navbar'

export default class Header extends PureComponent {
  render() {
    return (
      <div className="header-bg">
        <Navbar searchBar={true} />
        
      </div>
    )
  }
}
