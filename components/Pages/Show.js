import React from 'react'
import PropTypes from 'prop-types'

const ShowPage = ({ title, content }) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>
        {content}
      </p>
    </article>
  )
}

ShowPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default ShowPage