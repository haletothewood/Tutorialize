import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Styles from './Styles'
import HomePage from './HomePage'
import ApiPage from './ApiPage'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonPressed: false
    }
  }

  handleOnPress = () => {
    this.fetchCharacter()
    this.setState({
      buttonPressed: true
    })
  }

  fetchCharacter() {
    const number = Math.floor(Math.random() * 2100)
    const url = 'https://anapioficeandfire.com/api/characters/' + number
    fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return this.setState({
        characterName: responseJson.name
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      !this.state.buttonPressed ?
      <HomePage
      handleOnPress={this.handleOnPress.bind(this)}
      />
      :
      <ApiPage
      characterName={this.state.characterName}
      handleOnPress={this.handleOnPress.bind(this)}
      />
    )
  }
}