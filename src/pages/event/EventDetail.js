import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../../actions/events/fetch'
import '../../styles/EventDetail.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

class EventDetail extends PureComponent {
  componentWillMount(){
    this.props.fetchEvents()
  }

  render() {
    const event = this.props.events.find((event) => event._id === this.props.params.eventId)
    if (!event) return null
    return(
      <div className="event-detail">
        <Navbar />
        <div className="event-photo">
          <img className="image-responsive" src={event.photo} alt=""/>
        </div>
        <div className="row">
          <div className="orange-box col-sm-6">
            <h1 className="event-name">{event.name}</h1>
            <p className="description">{event.description}</p>
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
const mapStateToProps = ({ events }) => ({ events })

export default connect(mapStateToProps, { fetchEvents })(EventDetail)
