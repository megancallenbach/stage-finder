import API from '../../api'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {

  return (dispatch) => {

    api.signIn(user)
      .then((result) => {
        api.app.set('user', user)
        dispatch({
          type: USER_SIGNED_IN,
          payload: result
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
