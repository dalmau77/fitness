import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { landingPage } from '../../../styles/styles';
import { Video } from 'expo-av';
import { MaterialIcons, Octicons } from '@expo/vector-icons';


export default class Landing extends Component {
	state = {
		mute: false,
		fullScreen: false,
		shouldPlay: true,
	}

	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}

	handleVolume = () => {
		this.setState(prevState => ({
			mute: !prevState.mute,
		}));
	}

  render() {
    return (
      <ScrollView style={landingPage.container} scrollEnabled={true}>
        <View style={{ flex: 1 }}><Text>Landing Page</Text></View>
        <Video
          source={require('../../../assets/me.mp4')}
          shouldPlay={this.state.shouldPlay}
          resizeMode="cover"
          style={{ width:300, height: 300 }}
          isMuted={this.state.mute}
        />
        <View style={landingPage.controlBar}>
							<MaterialIcons 
								name={this.state.mute ? "volume-mute" : "volume-up"}
								size={45} 
								color="white" 
								onPress={this.handleVolume} 
							/>
							<MaterialIcons 
								name={this.state.shouldPlay ? "pause" : "play-arrow"} 
								size={45} 
								color="white" 
								onPress={this.handlePlayAndPause} 
							/>
						</View>
        {/* <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300, paddingTop: 25 }}
        /> */}
      </ScrollView>
    )
  }
}
