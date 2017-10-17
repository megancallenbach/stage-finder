import API from '../../api'

export const ARTIST_UPDATED = 'ARTIST_UPDATED'

const api = new API()

export default (artistId, artistData) => {
  return (dispatch) => {

    const backend = api.service('artists')

    api.authenticate()
      .then(() => {
        backend.patch(artistId, artistData)
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
