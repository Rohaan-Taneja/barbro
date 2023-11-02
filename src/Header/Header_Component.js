import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Like_button from './Like_button';

const Header_Component = () => {

    const [like, setlike]=useState(false)


    const toggle_like_or_notlike=()=>{
        setlike(!like)
    }

  return (
    <View style={{width:"90%" ,flexDirection:'row',justifyContent:'flex-end' }}>

    
      <View style={styles.container}>

        {/* toggle like  */}
        <TouchableOpacity onPress={toggle_like_or_notlike}>
            <Like_button like={like} />
        </TouchableOpacity>

        {/* SHARE BUTTON  */}
        <TouchableOpacity style={{paddingLeft:20 , paddingRight:5}}>
        <Icon name="share" size={28} color="#999e9e" />
        </TouchableOpacity>



      </View>
    </View>
  )
}

export default Header_Component

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        
    }
})