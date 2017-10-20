import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../styles/VenueDetail.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import getVenue from '../../actions/venues/get'
import EventCarousel from '../../components/EventCarousel'


class VenueDetail extends PureComponent {

  componentWillMount(){
    this.props.getVenue(this.props.params.venueId)
  }

  render() {

    if (!this.props.currentVenue) return null
    return(
      <div className="venue-detail-page">
        <Navbar searchBar={true}/>
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
              <div className="upcoming-events col-md-12">
                <h1> No upcoming events... </h1>
              </div>
            ) : (
              <EventCarousel { ...this.props.currentVenue } />
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
