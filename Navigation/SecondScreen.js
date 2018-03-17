import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import Styles from './Styles'
import { StackNavigator } from 'react-navigation'

export default class SecondScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Second Screen'
    })

    render() {
      return (
        <View style={Styles.container}>
          <Text style={Styles.welcome}>
            This is the second screen.
          </Text>
          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
      )
    }
  }