import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import '../../styles/ArtistDetail.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import getArtist from '../../actions/artists/get'

class ArtistDetail extends PureComponent {
  componentWillMount(){
    this.props.getArtist(this.props.params.artistId)
  }

  render() {
    if (!this.props.currentArtist) return null
    return(
      <div className="artist-detail">
        <Navbar />
        <div className="artist-photo">
          <img className="image-responsive" src={this.props.currentArtist.photo} alt=""/>
        </div>
        <div className="row">
          <div className="orange-box col-sm-6">
            <h1 className="artist-name">{this.props.currentArtist.name}</h1>
            <p className="description">{this.props.currentArtist.description}</p>
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
const mapStateToProps = ({ currentArtist }) => ({ currentArtist })

export default connect(mapStateToProps, { getArtist })(ArtistDetail)
