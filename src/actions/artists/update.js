import API from '../../api'

export const ARTIST_UPDATED = 'ARTIST_UPDATED'
const PROFILE_UPDATE = 'PROFILE_UPDATE'

const api = new API()

export default (artistId, artistData) => {
  return (dispatch) => {

    const backend = api.service('artists')

    api.authenticate()
      .then(() => {
        backend.patch(artistId, { type: PROFILE_UPDATE, payload: artistData})
          .then((result) => {
            console.log(result)
                dispatch({
                  type: ARTIST_UPDATED,
                  payload: result
                })
              })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}
