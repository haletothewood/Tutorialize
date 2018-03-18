import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native';
import Styles from './Styles'

export default ApiPage = (props) => {
  return (
  <View style={Styles.container}>
    <Text style={Styles.example}>
      {props.characterName}
    </Text>
    <Button
    title='Again'
    onPress={props.handleOnPress}
    />
  </View>
  )
}