import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native';
import Styles from './Styles'

export default HomePage = (props) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.welcome}>
        Welcome to Tutorialize!
      </Text>
      <Text style={Styles.example}>
        API's
      </Text>
      <Text style={Styles.instructions}>
        This will call an API that returns a random Game of Thrones character
      </Text>
      <Button
      title='Press'
      onPress={props.handleOnPress}
      />
    </View>
  )
}