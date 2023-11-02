import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Book_Appointment_Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>Book_Appointment_Screen</Text>
    </View>
  )
}

export default Book_Appointment_Screen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    }
})