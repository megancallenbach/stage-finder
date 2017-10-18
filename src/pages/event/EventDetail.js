import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getEvent from '../../actions/events/get'
import { Link } from 'react-router'
import '../../styles/EventDetail.css'
import artistJoinEvent from '../../actions/artists/join'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

class EventDetail extends PureComponent {

  componentWillMount(){
    this.props.getEvent(this.props.params.eventId)
  }

  joinEvent(){
    const artistId = this.props.currentUser.artistProfileId
    const eventId = this.props.currentEvent._id
    this.props.artistJoinEvent(artistId, eventId)
  }

  renderArtist(artist){
    return <Link to={`/artists/${artist._id}`}>{artist.name}</Link>
  }

  render() {
    const { currentEvent } = this.props

    if (!currentEvent) return null
    debugger
    const artists = [].concat(currentEvent.artists)
    const artistCount = (currentEvent.artistCount - artists.length)

    return(
      <div className="event-detail">
        <Navbar />
        <div className="event-photo">
          <img className="image-responsive" src={(currentEvent.photo) ? currentEvent.photo : currentEvent.venue.photo} alt=""/>
        </div>
        <div className="row">
          <div className="orange-box col-sm-6">
            <h1 className="event-name">{currentEvent.title}</h1>
            <h1 className="event-name">{currentEvent.venue.address}, {currentEvent.venue.city}</h1>
            <p className="description">{currentEvent.description}</p>
          </div>
          <div className="white-box col-sm-6">
            <h1 className="upcoming">Artiesten</h1>
            <p className="artist-count">We zoeken nog {artistCount} artiesten!</p>
            { (this.props.currentUser.artistProfileId) ? <button onClick={this.joinEvent.bind(this)}>Join!</button> : null }
            { (artists) ? artists.map(this.renderArtist.bind(this)) : null }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = ({ currentEvent, currentUser }) => ({ currentEvent, currentUser })

export default connect(mapStateToProps, { getEvent, artistJoinEvent })(EventDetail)
