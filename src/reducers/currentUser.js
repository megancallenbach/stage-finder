import { USER_SIGNED_IN } from '../actions/users/signIn'
import { USER_SIGNED_OUT } from '../actions/users/signOut'
import { ARTIST_CREATED } from '../actions/artists/create'
import { VENUE_CREATED } from '../actions/venues/create'

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

    case ARTIST_CREATED :
      const artistProfile = payload
      return { ...state, artistProfileId: artistProfile._id, artistProfile: artistProfile }

    case VENUE_CREATED :
      const venueProfile = payload
      return { ...state, venueProfileId: venueProfile._id, venueProfile: venueProfile }

    default :
      return state
  }
}
