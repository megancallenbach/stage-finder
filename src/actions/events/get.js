import API from '../../api'

export const GET_EVENT = 'GET_EVENT'

const api = new API()

export default (eventId) => {
  return (dispatch) => {

    const backend = api.service('events')

    backend.get(eventId)
      .then((result) => {
        console.log(result)
        dispatch({
          type: GET_EVENT,
          payload: result
        });
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
