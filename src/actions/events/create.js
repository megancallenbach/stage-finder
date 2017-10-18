import API from '../../api'

export const EVENT_CREATED = 'EVENT_CREATED'

const api = new API()

export default (eventData) => {
  return (dispatch) => {

    const backend = api.service('events')

    api.app.authenticate()
      .then(() => {
        backend.create(eventData)
          .then((result) => {
            console.log(result)
            dispatch({
              type: EVENT_CREATED,
              payload: result
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
