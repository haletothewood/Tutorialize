import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Styles from './Styles'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonPressed: false
    }
  }

  handleOnPress = () => {
    this.setState({
      buttonPressed: true
    })
  }

  render() {
    return (
      this.state.buttonPressed ? 
      <View style={Styles.container}>
      <Text style={Styles.welcome}>
        This needs implementing
      </Text>
      </View>
      :
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          Welcome to Tutorialize!
        </Text>
        <Text style={Styles.example}>
          API's
        </Text>
        <Text style={Styles.instructions}>
          In order to see it in action please click the button...
        </Text>
        <Button
        title='Press'
        onPress={this.handleOnPress}
        />
      </View>
    )
  }
}
