import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../styles/ArtistDetail.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import getArtist from '../../actions/artists/get'
import fetchEvents from '../../actions/events/fetch'
import ArtistCarousel from '../../components/ArtistCarousel'

class ArtistDetail extends PureComponent {
  componentWillMount(){
    this.props.getArtist(this.props.params.artistId)
    this.props.fetchEvents()
  }

  render() {

    if (!this.props.currentArtist) return null
    const artist = this.props.currentArtist
    if (!this.props.events) return null
    const events = this.props.events.filter((oneEvent) => {
      return oneEvent.artistIds.filter((artistId) => {
        return artistId === this.props.currentArtist._id
      })
    })
    return(
      <div className="artist-detail">
        <Navbar searchBar={true}/>
        <div className="artist-contents">
          <div className="row">
            <div className="black-box col-md-5">
              <div className="name-description">
                <h1 className="artist-name">{artist.name}</h1>
                <p className="description">{artist.description}</p>
              </div>
              <div className="social-links">
                <a href={artist.soundcloud} className="link"><i className="fa fa-soundcloud"> </i></a>
                <a href={artist.spotify} className="link"><i className="fa fa-spotify"> </i></a>
                <a href={artist.youtube} className="link"><i className="fa fa-youtube"> </i></a>
                <a href={artist.facebook} className="link"><i className="fa fa-facebook"> </i></a>
              </div>
            </div>
            <div className="artist-video col-md-7">
              <iframe title="artist-video" src={artist.video} alt=""/>
            </div>

            <div className="orange-box col-sm-7">
              <h1 className="artist-name">Bio</h1>
              <p className="artist-city"><i className="fa fa-map-marker"></i>{artist.city}</p>
              <p className="bio">{artist.bio}</p>
            </div>


            {artist.eventIds.length > 0 ? (
              <ArtistCarousel events={events}/>
            ) : (
              <div className="white-box col-sm-5">
                <h1 className="upcoming">Upcoming</h1>
                <p className="black-text">This artist has no upcoming events...</p>
              </div>
            ) }

            <div className="row photo-quote">
              <div className="artist-photo-md col-md-6">
                <img src={artist.photo} alt=""/>
              </div>
              <div className="quote-container col-md-6">
                <h1 className="artist-quote">{artist.quote}</h1>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = ({ currentArtist, events }) => ({ currentArtist, events })

export default connect(mapStateToProps, { getArtist, fetchEvents })(ArtistDetail)
