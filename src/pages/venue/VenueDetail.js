import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchVenues from '../../actions/venues/fetch'
import '../../styles/VenueDetail.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

class VenueDetail extends PureComponent {
  componentWillMount(){
    this.props.fetchVenues()
  }

  render() {
    const venue = this.props.venues.find((venue) => venue._id === this.props.params.venueId)
    if (!venue) return null
    return(
      <div className="venue-detail">
        <Navbar/>
        <div className="venue-photo">
          <img className="image-responsive" src={venue.photo} alt=""/>
        </div>
        <div className="row">
          <div className="orange-box col-sm-6">
            <h1 className="venue-name">{venue.name}</h1>
            <p className="description">{venue.description}</p>
          </div>
          <div className="white-box col-sm-6">
            <h1 className="upcoming">Upcoming</h1>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = ({ venues }) => ({ venues })

export default connect(mapStateToProps, { fetchVenues })(VenueDetail)
