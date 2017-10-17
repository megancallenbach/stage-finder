import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchArtists from '../../actions/artists/fetch'
import '../../styles/ArtistPage.css'
import { Link } from 'react-router'

class ArtistPage extends PureComponent {

  componentWillMount(){
    this.props.fetchArtists()
  }

  renderArtist(artist){
    return (
      <div className="artist col-sm-4">
        <h2 className="artist-name">{artist.name}</h2>
        <div className="artist-box">
          <div className="artist-image">
            <img src={artist.photo} alt=""/>
          </div>
          <div className="artist-content">
            <div className="artist-description">
              <p className="description">{artist.description}</p>
            </div>
            <div className="artist-city">
              <p className="city">{artist.city}</p>
            </div>
              <button className="btn-artist"><Link to={`/artists/${artist._id}`} className="link">View Artist</Link></button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const artists = this.props.artists
    if (!artists) return null
    return(
      <div>
        <h1>Discover the artists</h1>
        <div className="artists-container">
          <div className="row">
            { artists.map(this.renderArtist.bind(this)) }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ artists }) => ({ artists })

export default connect(mapStateToProps, { fetchArtists })(ArtistPage)
