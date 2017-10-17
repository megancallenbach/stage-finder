import { FETCHED_ARTISTS } from '../actions/artists/fetch'
import { ARTIST_CREATED } from '../actions/artists/create'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_ARTISTS :
      return [ ...payload ]

    case ARTIST_CREATED :
      const newArtist = { ...payload }
      return [newArtist].concat(state)

    default :
      return state

  }
}
