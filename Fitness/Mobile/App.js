import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import Routes from './js/Components/Routes';
import store from './js/rootStore'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Routes/>
      </Provider>
    );
  }
}
export default App

