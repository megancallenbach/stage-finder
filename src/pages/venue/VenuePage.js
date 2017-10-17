import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchVenues from '../../actions/venues/fetch'

class VenuePage extends PureComponent {

  componentWillMount(){
    this.props.fetchVenues()
  }

  renderVenue(venue){
    return <li>{venue.name}</li>
  }

  render() {
    const venues = this.props.venues
    if (!venues) return null
    return(
      <div>
        <h1>Here are all the venues</h1>
        <ul>
          { venues.map(this.renderVenue.bind(this)) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ venues }) => ({ venues })

export default connect(mapStateToProps, { fetchVenues })(VenuePage)
