import { GET_ARTIST } from '../actions/artists/get'

export default (state = null, { type, payload } = {}) => {
  switch (type) {

  case GET_ARTIST :
      return payload

  default :
    return state
  }
}
