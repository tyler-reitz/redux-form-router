import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'

const mapStateToProps = ({posts}, ...state) => ({
  posts
})

class PostsList extends Component {

  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts() 
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <nav className="text-xs-right">
          <Link to={{
            pathname: "/posts/new",
            state: {
              from: this.props.location.pathname
            }
          }}>
            New Post
          </Link>
        </nav>
        <h3>Posts</h3>
        <ul className="list-group">
          {_.map(posts, ({ id, title, categories, content }) => (
            <li key={ id } className="list-group-item">
              <Link to={`/posts/${id}`}>
                <h4>{ title }</h4>
              </Link>
              <small>{ categories }</small>
              <p>{ content }</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchPosts },
)(PostsList)
