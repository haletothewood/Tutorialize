import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native'
import Styles from './Styles'
import { StackNavigator } from 'react-navigation'

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
      }

    static navigationOptions = () => ({
        title: 'Home',
        headerTintColor: '#2e3440',
        headerStyle: {
            backgroundColor: '#F5FCFF'
        }
    })

    handlePageChange = () => {
        this.state.name &&
        this.props.navigation.navigate('Second', {name: this.state.name})
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.welcome}>
                    Welcome to Tutorialize
                </Text>
                <Text style={Styles.example}>
                    Navigation
                </Text>
                <TextInput
                    placeholder='Enter Name'
                    placeholderTextColor='#a3be8c'
                    style={Styles.textinput}
                    onChangeText={(name) => this.setState({name})}
                    onSubmitEditing={() => this.handlePageChange()}
                />
                <Button
                color='#88C0D0'
                title='Please enter your name and click on this link to see it in action.'
                onPress={() => this.handlePageChange()}
                />
            </View>
        )
    }
}