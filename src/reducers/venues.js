import { FETCHED_VENUES } from '../actions/venues/fetch'
import { VENUE_CREATED } from '../actions/venues/create'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_VENUES :
      return [ ...payload ]

    case VENUE_CREATED :
      const newVenue = { ...payload }
      return [newVenue].concat(state)

    default :
      return state

  }
}
