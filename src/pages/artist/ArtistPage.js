import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchArtists from '../../actions/artists/fetch'
import '../../styles/ArtistPage.css'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

class ArtistPage extends PureComponent {

  componentWillMount(){
    this.props.fetchArtists()
  }

  renderArtist(artist, index){
    return (
      <div key={index} className="artist col-md-4 col-sm-6">
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
              <p className="city"><i className="fa fa-map-marker"></i>{artist.city}</p>
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
      <div className="artist-page">
        <Navbar searchBar={true}/>
        <div className="scroll">
          <h1 className="title">Discover the artists</h1>
          <div className="artists-container">
            <div className="row">
              { artists.map(this.renderArtist.bind(this)) }
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    )
  }
}

const mapStateToProps = ({ artists }) => ({ artists })

export default connect(mapStateToProps, { fetchArtists })(ArtistPage)
