import { GET_EVENT } from '../actions/events/get'
import { ARTIST_JOINED_EVENT } from '../actions/artists/join'

export default (state = null, { type, payload } = {}) => {
  switch (type) {

    case GET_EVENT :
      return payload

    case ARTIST_JOINED_EVENT : {
      const newState = { ...state }

      if (!newState.artists){
        newState.artists = [payload]
      }else if (newState.artists instanceof Array){
        newState.artists.push(payload)
      }else{
        [newState.artists].push(payload)
      }

      newState.artistIds.push(payload._id)

      return newState
    }

    default :
      return state

  }
}
