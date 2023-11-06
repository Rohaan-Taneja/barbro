import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UseSelector } from 'react-redux'

const Selected_day_slot_service_component = (props) => {

  // const s_services= UseSelector((state)=>state.reducer)
  // console.warn("these are the selected srvices",s_services);
  return (
    <View>

      <Text style={{color:"white"}}>{props.slot}</Text>
    </View>
  )
}

export default Selected_day_slot_service_component

const styles = StyleSheet.create({})