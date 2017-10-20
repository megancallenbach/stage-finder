import React, { PureComponent } from 'react'
import '../styles/SearchBar.css'



class SearchBar extends PureComponent {

  render() {
    return (


    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Find your venues" aria-label="Search"></input>
    </form>
  )
}
}
export default SearchBar;
