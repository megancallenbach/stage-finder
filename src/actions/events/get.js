import API from '../../api'

export const GET_EVENTS = 'GET_EVENTS'

const api = new API()

export default (eventId) => {
  return (dispatch) => {

    const backend = api.service('events')

    backend.find(eventId)
      .then((result) => {
        console.log(result)
        dispatch({
          type: GET_EVENTS,
          payload: result
        });
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
