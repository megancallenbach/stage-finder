import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../../actions/events/fetch'
import '../../styles/EventPage.css'
import { Link } from 'react-router'

class EventPage extends PureComponent {

  componentWillMount(){
    this.props.fetchEvents()
  }

  renderEvent(event){
    return (
      <div className="event col-md-4 col-sm-6">
        <h2 className="event-name">{event.title}</h2>
        <div className="event-box">
          <div className="event-content">
            <div className="event-date">
              <p className="date">{event.date}</p>
            </div>
            <div className="event-time">
              <p className="time">{event.time}</p>
            </div>
            <div className="event-description">
              <p className="description">{event.description}</p>
            </div>
            <div className="event-city">
              <p className="city">{event.venue.city}</p>
            </div>
              <button className="btn-event"><Link to={`/events/${event._id}`} className="link">View Event</Link></button>
          </div>
        </div>
      </div>

    )
  }

  render() {
    const events = this.props.events
    if (!events) return null
    return(
      <div>
        <h1>Discover the events</h1>
        <div className="events-container">
          <div className="row">
            { events.map(this.renderEvent.bind(this)) }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ events }) => ({ events })

export default connect(mapStateToProps, { fetchEvents })(EventPage)
