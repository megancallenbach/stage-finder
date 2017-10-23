import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import search from '../actions/search/search'
import '../styles/SearchBar.css'

class SearchBar extends PureComponent {

  searchAction(event){
    event.preventDefault()
    const searchInput = this.refs.search.value
    const filter = this.state.filter
    this.props.search(searchInput, filter)
    document.getElementById('searchForm').reset()
  }

  state = {
    filter: false
  }

  handleChange(){
    this.setState({
      filter: !this.state.filter
    })
  }

  showSearchOptions(){
    return (
      <div className="form-checkbox-item">
        <input
          type="checkbox"
          className="checkbox"
          id="filterPaidEvents"
          ref="paid"
          onChange={this.handleChange.bind(this)} >
        </input>
        <p>
          paid events only
        </p>
      </div>)
  }

  render() {
    return (
      <form onSubmit={this.searchAction.bind(this)} id="searchForm" className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" ref="search" type="text" placeholder="Enter a location or keyword" aria-label="Search"></input>
        {(this.props.showSearch) ? this.showSearchOptions() : null}
      </form>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps, { search })(SearchBar)
