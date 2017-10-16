import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class ArtistDetail extends PureComponent {
  render() {
    return(
      <h1>This will be the artist detail page</h1>
    )
  }
}

export default connect()(ArtistDetail)
