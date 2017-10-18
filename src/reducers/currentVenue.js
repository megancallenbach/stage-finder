import { GET_VENUE } from '../actions/venues/get'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case GET_VENUE :
      return payload

    default :
      return state
  }
}
