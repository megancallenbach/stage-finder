import API from '../../api'
import { history } from '../../store'


export const ARTIST_CREATED = 'ARTIST_CREATED'

const api = new API()

export default (artistData) => {
  return (dispatch) => {

    const backend = api.service('artists')

    api.app.authenticate()
      .then(() => {
        backend.create(artistData)
          .then((result) => {
            console.log(result)
            dispatch({
              type: ARTIST_CREATED,
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
