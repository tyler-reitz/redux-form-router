import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import posts from './posts_reducer'
import post from './post'

const rootReducer = combineReducers({
  post,
  posts,
  form,
})

export default rootReducer;
