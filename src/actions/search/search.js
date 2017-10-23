import elasticsearch from 'elasticsearch'
import { history } from '../../store'

export const SEARCH_RESULTS = 'SEARCH_RESULTS'
export const SEARCH_INPUT = 'SEARCH_INPUT'

const elasticsearchConnectionString = process.env.SEARCHBOX_URL || 'localhost:9200'

const client = new elasticsearch.Client({
  host: elasticsearchConnectionString,
});

export default (searchInput) => {
  return (dispatch) => {

    client.search({
      index: 'events',
      type: 'event',
      body: {
        query: {
          simple_query_string: {
            query: searchInput,
            fields: ['_all'],
            default_operator: 'and'
          }
        }
      }
    })
      .then((results) => {
        console.log(results.hits.hits)

        const convertedResults = results.hits.hits.map((result) => {
          const id = result._id
          const event = result._source
          return { ...event, _id: id }
        })

        dispatch({type: SEARCH_RESULTS, payload: convertedResults})
        dispatch({type: SEARCH_INPUT, payload: searchInput})
        history.push('/search-results')
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
