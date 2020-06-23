import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';


export default class Landing extends Component {
  render() {
    return (
      <ScrollView style={landingPage.container} scrollEnabled={true}>
        <Hamburger />
        <View style={{ flex: 1 }}><Text>Landing Page</Text></View>
      </ScrollView>
    )
  }
}
