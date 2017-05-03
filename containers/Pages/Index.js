import React, { Component } from 'react'
import { Pages } from '../../components'
import { loadPages } from '../../actions/page'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class PagesContainer extends Component {
  static propTypes = {
    pages: PropTypes.array.isRequired,
    onLoadPages: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.pages !== nextProps.pages
  }

  onReloadPages = () => {
    this.props.onLoadPages()
  }

  componentDidMount() {
    this.onReloadPages()
  }

  render() {
    return (
      <Pages
        pages={this.props.pages}
        onReloadPages={this.onReloadPages} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPages: () => {
      dispatch(loadPages())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesContainer)