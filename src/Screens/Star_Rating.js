import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Star_Rating = (props) => {
    
    // console.log(props.s)
    const stars=(s)=>{
        var s_array=[]

        for(let i =1 ; i <=5 ; i++){
            if (i <=s){
                s_array.push(<Icon name="star" size={15} color="#ddc686" />)
            }
            else{
                s_array.push(<Icon name="star-o" size={15} color="#A9A9A9" />)
            }
        }
        return s_array


    }
  return (
    <View style={{flexDirection:'row'}} >
        {stars(props.s)}
    </View>
  )
}

export default Star_Rating

const styles = StyleSheet.create({})