import { SEARCH } from '../actions/search/search'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case SEARCH :
      return payload.data

    default :
      return state

  }
}
