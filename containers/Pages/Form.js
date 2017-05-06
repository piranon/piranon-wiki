import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { createPage } from '../../actions/page'
import { PageForm } from '../../components'

class PageFormContainer extends Component {
  render() {
    return <PageForm handleSubmit={this.props.handleSubmit}/>
  }
}

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.content) {
    errors.content = 'Required'
  }
  return errors
}

export default reduxForm({
  form: 'page',
  validate,
  onSubmit: (values, dispatch) => dispatch(createPage(values))
})(PageFormContainer)