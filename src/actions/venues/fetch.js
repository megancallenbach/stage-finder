import API from '../../api'

export const FETCHED_VENUES = 'FETCHED_VENUES'

const api = new API()

export default () => {
  return (dispatch) => {

    const backend = api.service('venues')

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
          type: FETCHED_VENUES,
          payload: result.data
        });
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
