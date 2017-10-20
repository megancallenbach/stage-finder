import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getEvent from '../../actions/events/get'
import { Link } from 'react-router'
import '../../styles/EventDetail.css'
import artistJoinEvent from '../../actions/artists/join'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import getCurrentUser from '../../actions/users/get'

class EventDetail extends PureComponent {

  componentWillMount(){
    this.props.getEvent(this.props.params.eventId)
    if(this.props.currentUser)this.props.getCurrentUser(this.props.currentUser._id)
  }

  joinEvent(){
    const artistId = this.props.currentUser.artistProfileId
    const eventId = this.props.currentEvent._id
    this.props.artistJoinEvent(artistId, eventId)
  }

  renderArtist(artist, index){
    if(!artist) return null
    return (
      <div className="artist-item" id={index}>
        <h3>{artist.name}</h3>
        <p>{artist.description}</p>
        <Link to={`/artists/${artist._id}`} className="artist-link">Read more</Link>
      </div>
    )
  }

  renderArtistCount(artistCount){
    if (artistCount > 1) return (`We zoeken nog ${artistCount} artiesten!`)
    else if (artistCount === 1) return (`We zoeken nog ${artistCount} artiest!`)
    else return null
  }

  render() {
    const { currentEvent } = this.props

    if (!currentEvent) return null

    const artists = [].concat(currentEvent.artists)
    const artistCount = (currentEvent.artistCount - artists.length)
    const payment = currentEvent.paid

    return(
      <div className="event-detail">
        <Navbar />
        <div className="event-page">
          <div className="event-photo">
            <img className="image-responsive" src={(currentEvent.photo) ? currentEvent.photo : currentEvent.venue.photo} alt=""/>
          </div>
          <div className="row">
            <div className="orange-box col-sm-6">
              <h1 className="event-name">{currentEvent.title}</h1>
              <h1 className="event-name">{currentEvent.date}, {currentEvent.time}</h1>
              <h1 className="event-name">{currentEvent.venue.name}, {currentEvent.venue.address}, {currentEvent.venue.city}</h1>
              <p className="description">{currentEvent.description}</p>
            </div>
            <div className="white-box col-sm-6">
              <div className="row">
                <div className="artists-header col-sm-6">
                  <h1 className="upcoming">Artiesten</h1>
                  { (payment) ? <p className="artist-count">Spelende artiesten krijgen een vergoeding van EUR {payment},-</p> : null}
                  <p className="artist-count">{this.renderArtistCount(artistCount)}</p>
                </div>
                <div className="artists-button col-sm-6">
                { (this.props.currentUser.artistProfileId && artistCount > 0) ? <span className="join-button" onClick={this.joinEvent.bind(this)}>Join!</span> : null }
                </div>
              </div>
              <div className="row">
                <div className="artists-wrapper col-sm-12">
                  { artists.map(this.renderArtist.bind(this)) }
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = ({ currentEvent, currentUser }) => ({ currentEvent, currentUser })

export default connect(mapStateToProps, { getEvent, artistJoinEvent, getCurrentUser })(EventDetail)
