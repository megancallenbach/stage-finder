import API from '../../api'
import signIn from './signIn'

export const USER_SIGNED_UP = 'USER_SIGNED_UP'

const api = new API()

export default (user) => {
  return (dispatch) => {
    const backend = api.service('users')

    backend.create(user)
      .then((result) => {
        dispatch(signIn(user))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
