import { GET_EVENT } from '../actions/events/get'

export default (state = null, { type, payload } = {}) => {
  switch (type) {

    case GET_EVENT :
      return payload

    default :
      return state

  }
}
