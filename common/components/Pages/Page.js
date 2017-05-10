import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Page = ({ id, title }) => (
  <tr>
    <th>{id}</th>
    <td>{title}</td>
    <td>
      <Link to={{ pathname: `/pages/${id}` }}>Show</Link>
    </td>
  </tr>
)

Page.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Page