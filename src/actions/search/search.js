import API from '../../api'

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

      })
      .catch((error) => {
        console.error(error)
      })
  }
}
