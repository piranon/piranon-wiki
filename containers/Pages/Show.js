import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadPage } from '../../actions/page'
import { ShowPage } from '../../components'

class ShowPageContainer extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    onLoadPage: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return true
    return this.props.page !== nextProps.page;
  }

  componentDidMount() {
    this.props.onLoadPage(this.props.match.params.id)
  }

  render() {
    const { id, title, content } = this.props.page

    return <ShowPage
      id={id}
      title={title}
      content={content}/>
  }
}

const mapStateToProps = (state, ownProps) => ({
  page: state.pages[0] || { title: '', content: '' }
})

export default connect(
  mapStateToProps,
  { onLoadPage: loadPage }
)(ShowPageContainer)