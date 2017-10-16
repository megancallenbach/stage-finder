import { FETCHED_ARTISTS } from '../actions/artists/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_ARTISTS :
      return [ ...payload ]

    default :
      return state

  }
}
