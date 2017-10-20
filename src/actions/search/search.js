import API from '../../api'
import { history } from '../../store'

export const SEARCH = 'SEARCH'

const api = new API()

export default (searchInput) => {
  return (dispatch) => {

    const backend = api.service('search')

    backend.find({
      query: {
        $sqs: {
          $fields: [
            '_all'
          ],
          $query: searchInput,
          $operator: 'and'
        }
      }
    })
      .then((result) => {
        console.log(result)
        dispatch({
          type: SEARCH,
          payload: result
        })
        history.push('/search-results')
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
