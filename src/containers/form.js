import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../actions'
import FormField from '../components/form_field'

class Form extends Component {
  
  onFormSubmit = (values) => 
    this.props.createPost(
      values, 
      () => this.props.history.push('/')
    )

  render() {
    const { props: { handleSubmit }, onFormSubmit } = this

    return (
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Field 
          name="title" 
          label="Title" 
          component={FormField} 
        />
        <Field 
          name="categories" 
          label="Categories" 
          component={FormField} 
        />
        <Field 
          name="content" 
          label="Content" 
          component={FormField} 
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
       <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {}

  if (!values.title) {
    errors.title = "Enter a title!"
  }

  if (!values.categories) {
    errors.categories = "Enter some categories!"
  }

  if (!values.content) {
    errors.content = "Enter some content!"
  }

  return errors
}

const mapDispatchToProps = dispatch => ({
//
})

export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(
  connect(null, { createPost })(Form)
)

