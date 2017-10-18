import { FETCHED_EVENTS } from '../actions/events/fetch'
import { EVENT_CREATED } from '../actions/events/create'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_EVENTS :
      return [ ...payload ]

    case EVENT_CREATED :
      const newEvent = { ...payload }
      return [newEvent].concat(state)

    default :
      return state

  }
}
