import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

import * as pageActions       from '../actions/PageActions'
import * as userActions       from '../actions/UserActions'

import User from '../components/User'
import Page from '../components/Page'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions
    const { handleLogin } = this.props.userActions

    return (
      <div className='row'>
        <User name={user.name} handleLogin={handleLogin} error={user.error} />
        <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} error={page.error} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
