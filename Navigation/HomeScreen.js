import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import Styles from './Styles'
import { StackNavigator } from 'react-navigation'

export default class HomeScreen extends React.Component {
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