import axios from 'axios'

const ax = axios.create({
  baseURL: 'http://reduxblog.herokuapp.com/api/posts',
  params: {
    key: 'h41l-5474n'
  }
})

export const FETCH_POST = 'FETCH_POST'
export const FETCH_POSTS = 'FETCH_POSTS' 
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'

export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: ax.request({ method: 'get' }),
})

export const createPost = (post, cb) => ({
  type: CREATE_POST,
  payload: ax
    .request({
      method: 'post',
      data: post
    })
    .then(() => 
      cb()
    )
})

export const fetchPost = (id) => ({
  type: FETCH_POST,
  payload: ax.get(`/${id}`)
})

export const deletePost = (id, cb) => ({
  type: DELETE_POST,
  payload: ax
    .delete(`/${id}`)
    .then((payload) => {
      cb()
      return payload
    })
})

