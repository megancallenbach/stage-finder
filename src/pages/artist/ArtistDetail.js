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
        <div className="artist-contents">
          <div className="row">
            <div className="black-box col-sm-4">
              <h1 className="artist-name">{artist.name}</h1>
              <p className="description">{artist.description}</p>
            </div>
            <div className="artist-video col-sm-8">
              <iframe title="artist-video" src={artist.video} alt=""/>
            </div>
            <div className="orange-box col-sm-7">
              <h1 className="artist-name">Bio</h1>
              <p className="description">{artist.bio}</p>
              <i class="fa fa-spinner fa-spin"></i>
            </div>
            <div className="white-box col-sm-5">
              <h1 className="upcoming">Upcoming</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = ({ artists }) => ({ artists })

export default connect(mapStateToProps, { fetchArtists })(ArtistDetail)
