import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchArtists from 'actions/artists/fetch'

class ArtistPage extends PureComponent {

  componentWillMount(){
    this.props.fetchArtists()
  }

  render() {
    return(
      <h1>Here are all the artists</h1>
    )
  }
}

const mapStateToProps = ({ artists }) => ({ artists })

export default connect(mapStateToProps, { fetchArtists })(ArtistPage)
