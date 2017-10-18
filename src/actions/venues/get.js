import API from '../../api'

export const GET_VENUE = 'GET_VENUE'

const api = new API()

export default (venueId) => {
  return (dispatch) => {

    const backend = api.service('venues')

        backend.get(venueId)
          .then((result) => {
            console.log(result)
            dispatch({
              type: GET_VENUE,
              payload: result
            })

          })
          .catch((error) => {
            console.log(error)
          })

  }
}
