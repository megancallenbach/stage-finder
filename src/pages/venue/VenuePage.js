import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchVenues from '../../actions/venues/fetch'
import '../../styles/VenuePage.css'

class VenuePage extends PureComponent {

  componentWillMount(){
    this.props.fetchVenues()
  }

  renderVenue(venue){
    return(

  <div className="venue col-sm-12">
      <div className="venue-box">
        <div className="venue-image">
          <img src={venue.photo} alt="" />
        </div>
        </div>
          <div className="venue-content">
          <p className="venue-name">{venue.name}</p>
        <p className="venue-description">{venue.description}</p>
        <p className="venue-city">{venue.city}</p>
    </div>
  </div>
 )
}

  render() {
   const venues = this.props.venues
    if (!venues) return null

    return(
      <div>
        <h1>Discover the Venues</h1>
        <div className="venues-container">
          <div className="row">
            { venues.map(this.renderVenue.bind(this)) }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ venues }) => ({ venues })

export default connect(mapStateToProps, { fetchVenues })(VenuePage)
