import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
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
        <Button
          title="Please click on me to see it in action."
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    )
  }
}

class SecondScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          This is the second screen.
        </Text>
      </View>
    )
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Second: {
      screen: SecondScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
