import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './Login/Login'
import Register from './Register/Register'
import Landing from './Landing/Landing'


export default class Routes extends Component {

  render() {
    return (
      <Router >
        <Scene key='root' >
          <Scene key='login' component={Login} initial={true} hideNavBar={true} />
          <Scene key='register' component={Register} hideNavBar={true} />
          <Scene key='landing' component={Landing} hideNavBar={true} />
          </Scene>
      </Router>
    )
  }
}