import { USER_SIGNED_IN } from '../actions/users/signIn'
import { USER_SIGNED_OUT } from '../actions/users/signOut'

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

    default :
      return state
  }
}
