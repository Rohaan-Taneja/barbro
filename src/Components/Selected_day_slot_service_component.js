import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Selected_day_slot_service_component = (props) => {
  return (
    <View>

      <Text style={{color:"white"}}>{props.slot}</Text>
    </View>
  )
}

export default Selected_day_slot_service_component

const styles = StyleSheet.create({})