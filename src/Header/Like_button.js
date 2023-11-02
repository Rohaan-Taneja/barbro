import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Like_button = (props) => {
  return (
    <View>
      {props.like ? <Icon name="heart" size={28} color="#FC0FC0" /> :<Icon name="heart" size={28} color="#999e9e" />}
    </View>
  )
}

export default Like_button

const styles = StyleSheet.create({})