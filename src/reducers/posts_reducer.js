import _ from 'lodash'
import {   FETCH_POST, FETCH_POSTS, CREATE_POST, DELETE_POST } from '../actions' 

export default (
  state = {}, 
  { type, payload: { data } = {}, ...action }
) => {
  switch (type) {
    case FETCH_POST:
      return {
        ...state,
        [data.id]: data,
      }
    case FETCH_POSTS:
      return {
        ...state,
        ...(_.mapKeys(data, 'id'))
      }
    case CREATE_POST:
      return {
        ...state,
        [data.id]: data,
      }
    case DELETE_POST:
      return _.omit(state, data.id)
    default:
      return state
  }
}
