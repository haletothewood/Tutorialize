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
import HomeScreen from './HomeScreen'
import SecondScreen from './SecondScreen'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Second: {
      screen: SecondScreen
    }
  },
  {
    initialRouteName: 'Home',
  },
  {
    headerMode: 'screen'
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
