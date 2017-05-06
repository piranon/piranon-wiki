import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <div className='error'>{error}</div> : false

const PageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='form'>
      <fieldset>
        <label>Title</label>
        <Field type='text' component='input' placeholder='Enter Title' name="title" />
        <Field name="title" component={renderError}/>
      </fieldset>
      <fieldset>
        <label>Content</label>
        <Field rows='5' component='textarea' placeholder='Enter Content' name="content" />
        <Field name="content" component={renderError}/>
      </fieldset>
      <button
        type='submit'
        className='button'>
        Submit
      </button>
    </form>
  )
}

PageForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default PageForm