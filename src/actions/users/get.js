import API from '../../api'

export const GET_USER = 'GET_USER'

const api = new API()

export default (userId) => {
  return (dispatch) => {

    const backend = api.service('users')

    api.authenticate()
      .then(() => {
        backend.get(userId)
          .then((result) => {
            console.log(result)
            dispatch({
              type: GET_USER,
              payload: result
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
