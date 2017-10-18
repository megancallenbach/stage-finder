import API from '../../api'
import { history } from '../../store'


export const VENUE_CREATED = 'VENUE_CREATED'

const api = new API()

export default (venueData) => {
  return (dispatch) => {

    const backend = api.service('venues')

    api.app.authenticate()
      .then(() => {
        backend.create(venueData)
          .then((result) => {
            console.log(result)
            dispatch({
              type: VENUE_CREATED,
              payload: result
            })
            history.push('/')

          })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
