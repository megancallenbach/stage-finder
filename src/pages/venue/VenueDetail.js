import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../styles/VenueDetail.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import getVenue from '../../actions/venues/get'



class VenueDetail extends PureComponent {
  // constructor(props) {
  //   super(props)
  //   this.state = { dates }
  //   this.sortByDates = this.sortByDates.bind(this)
  // }
  // sortByDates() {
  //   this.setState(prevState => {
  //     this.state.dates.sort((a, b) => (a.dates - b.dates))
  //   })
  // }

  componentWillMount(){
    this.props.getVenue(this.props.params.venueId)
  }

  render() {

    // const sortedEvents = this.props.currentEvent.sort(Date)
    //
    // console.log(sortedEvents)
    if (!this.props.currentVenue) return null
    debugger
    return(
      <div className="venue-detail">
        <Navbar/>
        <div className="venue-photo">
          <img className="image-responsive" src={this.props.currentVenue.photo} alt=""/>
        </div>
        <div className="row">
          <div className="orange-box col-sm-6">
            <h1 className="venue-name">{this.props.currentVenue.name}</h1>
            <p className="description">{this.props.currentVenue.address}</p>
          </div>
          <div className="white-box col-sm-6">
            <h1 className="upcoming">Upcoming</h1>
            <p className="venue-events">{this.props.currentVenue.events[0].title}</p>
            <p className="venue-date">{this.props.currentVenue.events[0].date}</p>
              </div>
          </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = ({ currentVenue }) => ({ currentVenue })

export default connect(mapStateToProps, { getVenue })(VenueDetail)
