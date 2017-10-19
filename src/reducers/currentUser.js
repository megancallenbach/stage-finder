import { USER_SIGNED_IN } from '../actions/users/signIn'
import { USER_SIGNED_OUT } from '../actions/users/signOut'
import { ARTIST_CREATED } from '../actions/artists/create'
import { ARTIST_UPDATED } from '../actions/artists/update'
import { VENUE_UPDATED } from '../actions/venues/update'
import { VENUE_CREATED } from '../actions/venues/create'
import { GET_USER } from '../actions/users/get'

const currentUserKey = 'currentUser-evaluation-app'
const currentUserFromLocalStorage = JSON.parse(
  window.localStorage.getItem(currentUserKey) || 'null'
)

export default (state = currentUserFromLocalStorage, { type, payload } = {}) => {
  switch (type) {
    case USER_SIGNED_IN :
      const currentUser = { ...payload }
      window.localStorage.setItem(currentUserKey, JSON.stringify(currentUser))
      return currentUser

    case USER_SIGNED_OUT :
      window.localStorage.removeItem(currentUserKey)
      return null

    case GET_USER :
      return payload

    case ARTIST_CREATED :
      const artistProfile = payload
      return { ...state, artistProfileId: artistProfile._id, artistProfile: artistProfile }

    case ARTIST_UPDATED :
      return { ...state, artistProfile: payload }

    case VENUE_CREATED :
      const venueProfile = payload
      return { ...state, venueProfileId: venueProfile._id, venueProfile: venueProfile }

    case VENUE_UPDATED :
      return { ...state, venueProfile: payload }

    default :
      return state
  }
}
