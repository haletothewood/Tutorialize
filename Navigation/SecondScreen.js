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
        title: 'Second Screen',
        headerStyle: {
            backgroundColor: '#F5FCFF'
        }
    })

    render() {
        const { params } = this.props.navigation.state
        const name = params && params.name
        return (
            <View style={Styles.container}>
                <Text style={Styles.welcome}>
                    Hello {name}!
                </Text>
                <Button
                color='#88C0D0'
                title="Go back"
                onPress={() => this.props.navigation.goBack()}
            />
            </View>
        )
    }
  }