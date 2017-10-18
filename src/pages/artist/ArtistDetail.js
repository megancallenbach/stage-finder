import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchArtists from '../../actions/artists/fetch'
import '../../styles/ArtistDetail.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

class ArtistDetail extends PureComponent {
  componentWillMount(){
    this.props.fetchArtists()
  }

  render() {
    const artist = this.props.artists.find((artist) => artist._id === this.props.params.artistId)
    if (!artist) return null
    return(
      <div className="artist-detail">
        <Navbar />
        <div className="artist-photo">
          <img className="image-responsive" src={artist.photo} alt=""/>
        </div>
        <div className="row">
          <div className="orange-box col-sm-6">
            <h1 className="artist-name">{artist.name}</h1>
            <p className="description">{artist.description}</p>
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
const mapStateToProps = ({ artists }) => ({ artists })

export default connect(mapStateToProps, { fetchArtists })(ArtistDetail)
