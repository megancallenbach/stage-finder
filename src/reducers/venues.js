import { FETCHED_VENUES } from '../actions/venues/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_VENUES :
      return [ ...payload ]

    default :
      return state

  }
}
