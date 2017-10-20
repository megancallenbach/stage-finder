import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../styles/VenueDetail.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import getVenue from '../../actions/venues/get'
import Slider from 'react-slick'

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
    var sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: true,
      autoplay: true,
      className: 'event-slider'
    }

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

            <Slider {...sliderSettings}>
              {this.props.currentVenue.events.map(this.renderEvent.bind(this))}
            </Slider>

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
