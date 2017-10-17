import API from '../../api'

export const FETCHED_ARTISTS = 'FETCHED_ARTISTS'

const api = new API()

export default () => {
  return (dispatch) => {

    const backend = api.service('artists')

    backend.find({
      query: {
        $limit: 50,
        $sort: {
          createdAt: -1
        }
      }
    })
      .then((result) => {
        console.log(result)
        dispatch({
          type: FETCHED_ARTISTS,
          payload: result.data
        });
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
