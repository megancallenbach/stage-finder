import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../../actions/events/fetch'
import '../../styles/EventDetail.css'

class EventDetail extends PureComponent {

  componentWillMount(){
    this.props.fetchEvents()
  }

  render() {
    const event = this.props.events.find((event) => event._id === this.props.params.eventId)
    if (!event) return null
    return(
      <div className="event-detail">
        <div className="event-photo">
          <img className="image-responsive" src={(event.photo) ? event.photo : event.venue.photo} alt=""/>
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
      </div>
    )
  }
}
const mapStateToProps = ({ events }) => ({ events })

export default connect(mapStateToProps, { fetchEvents })(EventDetail)
