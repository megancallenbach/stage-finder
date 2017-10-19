import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchVenues from '../../actions/venues/fetch'
import '../../styles/VenuePage.css'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

class VenuePage extends PureComponent {

  componentWillMount(){
    this.props.fetchVenues()
  }

  renderVenue(venue, index){
    if (index % 2 === 0) return(
      <div key={index} className="venue row">
        <div className="venue-image col-md-7">
          <img src={venue.photo} alt="" />
        </div>
        <div className="venue-content-even col-md-5">
          <p className="venue-name">{venue.name}</p>
          <p className="venue-city"><i className="fa fa-map-marker"></i>{venue.city}</p>
          <p className="venue-description">{venue.description}</p>
          <p className="upcoming-events">{venue.eventIds.length === 0 ? 'No' : venue.eventIds.length} Upcoming Events </p>
          <button className="btn-venue"><Link to={`/venues/${venue._id}`} className="link">View Venue</Link></button>
        </div>
      </div>
 )
    return (
      <div className="venue row">
        <div className="venue-content-odd col-md-5">
          <p className="venue-name">{venue.name}</p>
          <p className="venue-city">{venue.city}<i className="fa fa-map-marker"></i></p>
          <p className="venue-description">{venue.description}</p>
          <p className="upcoming-events">{venue.eventIds.length === 0 ? 'No' : venue.eventIds.length} Upcoming Events </p>
          <button className="btn-venue"><Link to={`/venues/${venue._id}`} className="link">View Venue</Link></button>
        </div>
        <div className="venue-image col-md-7">
          <img src={venue.photo} alt="" />
        </div>
      </div>
    )
}

  render() {
   const venues = this.props.venues
    if (!venues) return null

    return(
      <div className="venue-page">
        <Navbar />
        <div className="scroll">
          <h1>Discover the Venues</h1>
          <div className="venues-container">
            <div className="row">
              { venues.map(this.renderVenue.bind(this)) }
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ venues }) => ({ venues })

export default connect(mapStateToProps, { fetchVenues })(VenuePage)
