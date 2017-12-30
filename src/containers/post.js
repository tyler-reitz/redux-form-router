import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, deletePost } from '../actions'

const mapStateToProps = ({posts}, {match: { params: { id}}} ) => ({
  post: posts[id]
})

class Post extends Component {

  componentDidMount() {
    const { post, fetchPost,  match: { params: { id }}}= this.props
    if (!post) fetchPost(id)
  }

  onClickDelete = () => {
    const {
      props: { 
        history,
        match: { params: { id }},
        deletePost
      },
    } = this

    deletePost(id, () => history.push('/'))
  }

  render() {
    const { 
      props: { post: { title, content } = {} },
      onClickDelete,
    } = this

    return (
      title 
        ? (
            <div>
              <Link to="/">Home</Link>
              <button 
                className="btn btn-danger xs-pull-right"
                onClick={onClickDelete}
              >
                Delete
              </button>
              <h1>{ title }</h1>
              <p>{ content  }</p>
            </div>
          )
        : <div>…loading</div>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost },
)(Post)
