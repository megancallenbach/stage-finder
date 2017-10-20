import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../styles/VenueDetail.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import getVenue from '../../actions/venues/get'

class VenueDetail extends PureComponent {
  componentWillMount(){
    this.props.getVenue(this.props.params.venueId)
  }

  renderEvent(venueEvent, index){
    return (
      <div className="event-carousel-item" key={index}>
          <h1>{venueEvent.title}</h1>
          <p>{venueEvent.description}</p>
          <p>{venueEvent.date}</p>
          <p>{venueEvent.artistCount - venueEvent.artistIds.length} spots available!</p>
      </div>
    )
  }

  render() {
    if (!this.props.currentVenue) return null

    return(
      <div className="venue-detail-page">
        <Navbar/>
        <div className="venue-detail">
          <div className="row">
            <div className="venue-photo col-sm-7">
              <img className="image-responsive" src={this.props.currentVenue.photo} alt=""/>
            </div>
            <div className="black-box col-md-5">
              <h1 className="venue-name">{this.props.currentVenue.name}</h1>
              <p className="description">{this.props.currentVenue.description}</p>
            </div>
          { !this.props.currentVenue.events ? (
            <div className="no-events col-md-12">
              <h1> No upcoming events... </h1>
            </div>
          ) : (

            <div className="events col-md-12">
              <h1> Events will go here </h1>
            </div>
          )}

          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = ({ currentVenue }) => ({ currentVenue })

export default connect(mapStateToProps, { getVenue })(VenueDetail)
