import API from '../../api'

export const FETCHED_EVENTS = 'FETCHED_EVENTS'

const api = new API()

export default () => {
  return (dispatch) => {

    const backend = api.service('events')

    backend.find({
      query: {
        $limit: 50,
        $sort: {
          date: 1
        }
      }
    })
      .then((result) => {
        console.log(result)
        dispatch({
          type: FETCHED_EVENTS,
          payload: result.data
        });
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
