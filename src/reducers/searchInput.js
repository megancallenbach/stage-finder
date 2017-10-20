import { SEARCH_INPUT } from '../actions/search/search'

export default (state = null, { type, payload } = {}) => {
  switch (type) {

    case SEARCH_INPUT :
      return payload

    default :
      return state

  }
}
