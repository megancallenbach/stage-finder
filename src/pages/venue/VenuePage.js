import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchVenues from '../../actions/venues/fetch'
import '../../styles/VenuePage.css'

class VenuePage extends PureComponent {

  componentWillMount(){
    this.props.fetchVenues()
  }

  renderVenue(venue, index){
    if (index % 2 === 0) return(
      <div className="venue-even col-sm-12">
          <div className="venue-box">
            <div className="venue-image">
              <img src={venue.photo} alt="" />
            </div>
            </div>
              <div className="venue-content-even">
              <p className="venue-name-even">{venue.name}</p>
              <p className="venue-city-even">{venue.city}</p>
            <p className="venue-description-even">{venue.description}</p>
        </div>
      </div>
 )
    return (
      <div className="venue-odd col-sm-12">
          <div className="venue-box">
            <div className="venue-image">
              <img src={venue.photo} alt="" />
            </div>
            </div>
              <div className="venue-content-odd">
              <p className="venue-name-odd">{venue.name}</p>
            <p className="venue-city-odd">{venue.city}</p>
            <p className="venue-description-odd">{venue.description}</p>
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
