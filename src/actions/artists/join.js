import API from '../../api'

const JOIN_EVENT = 'JOIN_EVENT'
export const ARTIST_JOINED_EVENT = 'ARTIST_JOINED_EVENT'

const api = new API()

export default (artistId, eventId) => {
  return (dispatch) => {

    const backend = api.service('artists')

    api.authenticate()
      .then(() => {
        backend.patch(artistId, { type: JOIN_EVENT, payload: eventId})
          .then((result) => {
            console.log(result)
            dispatch({
              type: ARTIST_JOINED_EVENT,
              payload: result
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
