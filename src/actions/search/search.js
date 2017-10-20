import API from '../../api'
import { history } from '../../store'

export const SEARCH_INPUT = 'SEARCH_INPUT'
export const SEARCH_RESULTS = 'SEARCH_RESULTS'

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
          type: SEARCH_INPUT,
          payload: searchInput
        })
        dispatch({
          type: SEARCH_RESULTS,
          payload: result
        })
        history.push('/search-results')
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
