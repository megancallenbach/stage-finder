import API from '../../api'

export const GET_ARTIST = 'GET_ARTIST'

const api = new API()

export default(artistId) => {
  return (dispatch) => {

    const backend = api.service('artists')

    backend.get(artistId)
      .then((result) => {
        console.log(result)
        dispatch({
          type: GET_ARTIST,
          payload: result
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
