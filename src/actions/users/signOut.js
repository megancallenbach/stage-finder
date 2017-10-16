import { history } from '../../store'
import API from '../../api'

export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

const api = new API()

export default () => {
  return(dispatch) => {
    api.signOut().then(() => {
      history.replace('/')
      dispatch({ type: USER_SIGNED_OUT })
    })
  }
}
