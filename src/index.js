import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'

import reducers from './reducers';
import promiseMiddleware from 'redux-promise'
import Posts from './containers/posts'
import Form from './containers/form'
import Post from './containers/post'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(promiseMiddleware)
))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={Form} />
          <Route path="/posts/:id?" component={Post} />
          <Route path="*" render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
