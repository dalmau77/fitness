import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { landingPage } from '../../../styles/styles';


export default class Landing extends Component {
  render() {
    return (
      <ScrollView style={landingPage.container} scrollEnabled={true}>
        <View style={{ flex: 1 }}><Text>Landing Page</Text></View>
      </ScrollView>
    )
  }
}
