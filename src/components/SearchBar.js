import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import search from '../actions/search/search'
import '../styles/SearchBar.css'

class SearchBar extends PureComponent {

  searchAction(event){
    event.preventDefault()
    const searchInput = this.refs.search.value
    this.props.search(searchInput)
    document.getElementById('searchForm').reset()
  }

  render() {
    return (
      <form onSubmit={this.searchAction.bind(this)} id="searchForm" className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" ref="search" type="text" placeholder="Find a Stage" aria-label="Search"></input>
      </form>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps, { search })(SearchBar)
