import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Book_Appointment_Screen = () => {

  // here we are getting the selected slot ,service , time information 
  const selected_services = useSelector((state) => state.service.s_s);

  const slot = useSelector((state) => state.slot.s_slots);

  const date = useSelector((state) => state.dayy.s_day);


  // onclick on book appointment bttk , background color of bttn willl change 
  const [book_appointment_bttn_bg_color ,setbook_appointment_bttn_bg_color] =useState(false)
  const book_appointment_fun =()=>{
    setbook_appointment_bttn_bg_color(!book_appointment_bttn_bg_color)

  }

  // const [no_of_selected_services , setno_of_selected_services]= useState(0)

  //  if( selected_services.length >0){
  //   const s_services =[]
  //   for(var s in selected_services){
  //     s_services.push(selected_services[s].service)
  //   }
  //   setno_of_selected_services(s_services)
  // }

  // console.warn("these are the selectedservices",ans[0].service ,"and this is the selected slot" , slot);
  // console.warn("this is the date", date[0].day , date[0].dayOfWeek , date[0].monthofyear);

  return (
    <View style={styles.container}>

      <Text style={{ color: "white" , padding:20 }}>boking appoint information</Text>

      {slot.length > 0 && date.length > 0 && (
        <View>
          <Text style={{ color: "white" , padding:20 }}>
           date - {date[0].day} {date[0].monthofyear} {date[0].dayOfWeek}
          </Text>

          <Text style={{ color: "white", padding:20  }}> at {slot} </Text>

          {selected_services.length > 0 && (
            <Text style={{ color: "white" , padding:20  }}>
              {" "}
              {selected_services.length} services is selected{" "}
            </Text>
          )}
        </View>
      )}

      {/* book appointmnet button  */}
      <View style={{ flexDirection:'row' ,justifyContent:'center'}}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            marginRight:12,
            flexDirection:'row',
            alignItems:'center',
            borderRadius:20,
            width:'50%',
            borderWidth: 0.1,
            borderColor: "#A9A9A9",
            justifyContent:'center',
            backgroundColor: book_appointment_bttn_bg_color ? "#ddc686":"black",
            paddingHorizontal: 8,
            paddingVertical: 8,
            elevation: 15,
            shadowColor: "white",
            shadowRadius:20
          }}
          onPress={book_appointment_fun}
        >
          <Text style={{ color: "#999e9e" }}>book appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Book_Appointment_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
