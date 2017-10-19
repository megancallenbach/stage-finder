import API from '../../api'
import { history } from '../../store'

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
            history.push(`/events/${result._id}`)
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
