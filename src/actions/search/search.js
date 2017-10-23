import elasticsearch from 'elasticsearch'
import { history } from '../../store'

export const SEARCH_RESULTS = 'SEARCH_RESULTS'
export const SEARCH_INPUT = 'SEARCH_INPUT'

// const elasticsearchConnectionString = process.env.SEARCHBOX_URL

const client = new elasticsearch.Client({
  host: 'https://paas:4bf340c8bf2d900aab987a19a4729dee@nori-us-east-1.searchly.com',
});

export default (searchInput, filter) => {

  const searchQuery = (filter) ? `${searchInput} _exists_:paid` : searchInput

  return (dispatch) => {

    client.search({
      index: 'events',
      type: 'event',
      body: {
        query: {
          query_string: {
            query: searchQuery,
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
