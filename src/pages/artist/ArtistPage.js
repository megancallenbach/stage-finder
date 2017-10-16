import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchArtists from '../../actions/artists/fetch'

class ArtistPage extends PureComponent {

  componentWillMount(){
    this.props.fetchArtists()
  }

  renderArtist(artist){
    return <li>{artist.name}</li>
  }

  render() {
    const artists = this.props.artists
    if (!artists) return null
    return(
      <div>
        <h1>Here are all the artists</h1>
        <ul>
          { artists.map(this.renderArtist.bind(this)) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ artists }) => ({ artists })

export default connect(mapStateToProps, { fetchArtists })(ArtistPage)
