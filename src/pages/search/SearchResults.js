import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../styles/SearchResults.css'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


class SearchResults extends PureComponent {

  renderEvent(event, index){
    return (
      <div key={index} className="event col-sm-6">
        <div className="event-box">
          <h2 className="event-name">{event.title}</h2>
          <br />

          <div className="event-content">
            <div className="event-date">

              <h3 className="date">{event.dutchDate}</h3>
            </div>
            <div className="event-city">
              <h4 className="city">{event.venue.name}</h4>
            </div>
            <div className="event-city">
              <h4 className="city">{event.venue.city}</h4>
            </div>
            <div className="event-time">
              <p className="time">{event.time}</p>
            </div>
            <div className="event-description">
              <p className="description">{event.description}</p>
            </div>

              <button className="btn-event"><Link to={`/events/${event._id}`} className="link">View Event</Link></button>
          </div>
        </div>
      </div>

    )
  }

  render() {
    const events = this.props.searchResults
    if (!events) return null
    return(
      <div className="event-page">
        <Navbar />
        <div className="scroll">
          <h1 className="events-title">Find Your Stage</h1>
          <div className="events-container">
            <div className="row">
              { events.map(this.renderEvent.bind(this)) }
            </div>
          </div>
          < Footer/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ searchResults }) => ({ searchResults })

export default connect(mapStateToProps)(SearchResults)
