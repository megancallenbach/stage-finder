import { SEARCH_RESULTS } from '../actions/search/search'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case SEARCH_RESULTS :
      return payload.data

    default :
      return state

  }
}
