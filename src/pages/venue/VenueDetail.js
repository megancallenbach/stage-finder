import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../styles/VenueDetail.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import getVenue from '../../actions/venues/get'

class VenueDetail extends PureComponent {
  componentWillMount(){
    debugger
    this.props.getVenue(this.props.params.venueId)
  }

  render() {
    if (!this.props.currentVenue) return null
    return(
      <div className="venue-detail">
        <Navbar/>
        <div className="venue-photo">
          <img className="image-responsive" src={this.props.currentVenue.photo} alt=""/>
        </div>
        <div className="row">
          <div className="orange-box col-sm-6">
            <h1 className="venue-name">{this.props.currentVenue.name}</h1>
            <p className="description">{this.props.currentVenue.description}</p>
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
const mapStateToProps = ({ currentVenue }) => ({ currentVenue })

export default connect(mapStateToProps, { getVenue })(VenueDetail)
