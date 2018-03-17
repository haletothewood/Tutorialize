import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Styles from './Styles'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          Welcome to Tutorialize
        </Text>
        <Text style={Styles.example}>
          Navigation
        </Text>
        <Text style={Styles.link}>
          Please click on me to see it in action.
        </Text>
      </View>
    )
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
