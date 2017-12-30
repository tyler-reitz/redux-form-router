import { FETCH_POST } from '../actions'

export default (
  state = null, 
  { type, payload: { data } = {}, ...action }
) => {
  switch (type) {
    case FETCH_POST:
      return data.id
    default:
      return state
  }
}
