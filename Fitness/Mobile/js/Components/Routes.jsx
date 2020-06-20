import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './Login/Login'


export default class Routes extends Component {

  render() {
    return (
      <Router >
        <Scene key='root' >
          <Scene key='login' component={Login} initial={true} hideNavBar={true} />
          </Scene>
      </Router>
    )
  }
}