import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from './createContext'

import Firebase, { FirebaseContext } from '../components/firebase'

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
class AppProvider extends Component {
  state = {
    open: false,
    showModal: () => this.setState({ open: true }),
    hideModal: () => this.setState({ open: false })
  }

  render() {
    return (
      <Provider value={this.state}>
        <FirebaseContext.Provider value={new Firebase()}>
          {this.props.children}
        </FirebaseContext.Provider>
      </Provider>
    )
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppProvider
