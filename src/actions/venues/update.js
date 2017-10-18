import API from '../../api'
import { history } from '../../store'

export const VENUE_UPDATED = 'VENUE_UPDATED'

const api = new API()

export default (venueId, venueData) => {
  return (dispatch) => {

    const backend = api.service('venues')

    api.authenticate()
      .then(() => {
        backend.patch(venueId, venueData)
          .then((result) => {
            console.log(result)
                dispatch({
                  type: VENUE_UPDATED,
                  payload: result
                })
                history.push(`/venues/${venueId}`)
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
