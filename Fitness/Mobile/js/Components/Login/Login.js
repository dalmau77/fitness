import React, { Component } from 'react'
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { login } from '../../../styles/styles';
import { 
  handleLoginEmail,
  handleLoginPassword,
  handleLoginSubmit
 } from './loginActions';

class Login extends Component {

  handleEmail = text => {
    const { dispatch } = this.props;
    dispatch(handleLoginEmail(text));
  }

  handlePassword = text => {
    const { dispatch } = this.props;
    dispatch(handleLoginPassword(text));
  }

  handleSubmit = () => {
    console.log('pressed')
    const { dispatch } = this.props;
    dispatch(handleLoginSubmit(this.props.loginEmail, this.props.loginPassword));
  }

  goToRegister = () => Actions.register();

  render() {
    return (
      <View style={login.container}>
        <View style={{ paddingBottom: 75 }}>
          <Text style={login.header}>Sign In</Text>
        </View>
        <TextInput
          style={login.input}
          placeholder="Enter Email"
          placeholderTextColor='white'
          onChangeText={text => this.handleEmail(text)}
        />
        <TextInput
          style={login.input}
          placeholder="Enter Password"
          placeholderTextColor='white'
          onChangeText={text => this.handlePassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={login.button}
          onPress={this.handleSubmit}
        >
          <Text style={login.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={login.button} onPress={() => this.goToRegister()}>
          <Text style={login.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
function mapStoreToProps(store) {
 
  return {
    loginEmail: store.login.loginEmail,
    loginPassword: store.login.loginPassword
  }
}

export default connect(mapStoreToProps)(Login)

