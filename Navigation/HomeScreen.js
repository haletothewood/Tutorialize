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
        this.state = { name: 'Enter Name' };
      }

    static navigationOptions = () => ({
        title: 'Home',
        headerTintColor: '#2e3440',
        headerStyle: {
            backgroundColor: '#F5FCFF'
        }
    })

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
            style={{fontSize:20,color:'#a3be8c',height:50,width:200,borderBottomColor:'#F5FCFF',textAlign:'center'}}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
             />
            <Button
                color='#88C0D0'
                title='Please enter your name and click on this link to see it in action.'
                onPress={() => this.props.navigation.navigate('Second', {name: this.state.name})}
            />
            </View>
        )
    }
}