import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../../actions/events/fetch'
import { Link } from 'react-router'
import '../../styles/EventDetail.css'

class EventDetail extends PureComponent {

  componentWillMount(){
    this.props.fetchEvents()
  }

  joinEvent(){

  }

  renderArtist(artist){
    return <Link to={`/artists/${artist._id}`}>artist.name</Link>
  }

  render() {
    const event = this.props.events.find((event) => event._id === this.props.params.eventId)

    if (!event) return null

    const artists = event.artists
    const artistCount = (event.artistCount - event.artistIds.length)

    return(
      <div className="event-detail">
        <div className="event-photo">
          <img className="image-responsive" src={(event.photo) ? event.photo : event.venue.photo} alt=""/>
        </div>
        <div className="row">
          <div className="orange-box col-sm-6">
            <h1 className="event-name">{event.title}</h1>
            <h1 className="event-name">{event.venue.address}, {event.venue.city}</h1>
            <p className="description">{event.description}</p>
          </div>
          <div className="white-box col-sm-6">
            <h1 className="upcoming">Artiesten</h1>
            <p className="artist-count">We zoeken nog {artistCount} artiesten!</p>
            { (this.props.currentUser.artistProfileId) ? <button onClick={this.joinEvent.bind(this)}>Join!</button> : null }
            { (artists) ? artists.map(this.renderArtist.bind(this)) : null }
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ events, currentUser }) => ({ events, currentUser })

export default connect(mapStateToProps, { fetchEvents })(EventDetail)
