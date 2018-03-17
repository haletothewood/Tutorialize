import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { StackNavigator } from 'react-navigation'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Tutorialize
        </Text>
        <Text style={styles.example}>
          Navigation
        </Text>
        <Text style={styles.link}>
          Please click on me to see it in action.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e3440',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#F5FCFF',
    margin: 10,
  },
  example: {
    textAlign: 'center',
    color: '#B48EAD',
    fontSize: 30,
    fontWeight: "200",
    marginBottom: 5,
  },
  link: {
    textAlign: 'center',
    color: '#88C0D0',
    marginBottom: 5,
  }
})
