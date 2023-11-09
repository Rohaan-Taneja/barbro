import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Selected_day_slot_service_component = () => {

  const selected_services= useSelector((state)=>state.service.s_s)

  const slot=useSelector((state)=>state.slot.s_slots) 

  const date = useSelector((state)=>state.dayy.s_day)


  // here we just have to count the no of services , so no need to get the services name , if do so , too many rerender error is coming 
  // const [no_of_selected_services , setno_of_selected_services]= useState(0)

  // if( selected_services.length >0){
  //   const s_services =[]
  //   for(var s in selected_services){
  //     s_services.push(selected_services[s].service)
  //   }
  //   setno_of_selected_services(s_services.length)
  // }

  // {no_of_selected_services}

  // console.warn("these are the selectedservices",ans[0].service ,"and this is the selected slot" , slot);
  // console.warn("this is the date", date[0].day , date[0].dayOfWeek , date[0].monthofyear);
  return (
    <View >
      {slot.length>0 && date.length>0 &&
       (<View style={{flexDirection:'column'}}>
        <Text style={{color:"white"}}>{date[0].day } { date[0].monthofyear} {date[0].dayOfWeek}</Text>

        <Text style={{color:"white"}}> at {slot} </Text>
        
        {selected_services.length>0 &&
        (<Text style={{color:"white"}}> {selected_services.length}services are selected  </Text>)}
        
       </View>)}

      
    </View>
  )
}

export default Selected_day_slot_service_component

const styles = StyleSheet.create({})