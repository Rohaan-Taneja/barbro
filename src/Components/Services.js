import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { get_Services } from "../features/getservices/getservicesSlice";


const Services = () => {

  const dispatch=useDispatch();
    
  const [services_offered, setservices_offered] = useState([
    { service: "Threading", id: 1, selected: false },
    { service: "Haircut", id: 2, selected: false },
    { service: "Shaving", id: 3, selected: false },
    { service: "Waxing", id: 4, selected: false },
    { service: "Bleach", id: 5, selected: false },
    { service: "Body waxing", id: 6, selected: false },
    { service: "Hair wash", id: 7, selected: false },
    { service: "Manicure", id: 8, selected: false },
    { service: "Footmassage", id: 9, selected: false },
  ]);

  const [services_added, setservices_added] = useState([null]);

  // this will add service
  const rerender_pressed = (s) => {

    const newdata = services_offered.map((ser) => {
      if (ser.id === s.id) {
        return { ...ser, selected: !ser.selected };
      } else {
        return { ...ser, selected: ser.selected };
      }
    });


    //1) offered serivce array is rerender , is selected wali field is updated ,
    //2)since service offered  usestate is changed therefore the map function showing the services 
    //3) WILL RERENDER AND ALL THE SELECTED SERVICES WILL be DISPLAYED WITH GOLDEN BACKGROUD
    setservices_offered(newdata);

    // we are storing the selected items in am array and then in a usestate 
    const selected_services = newdata.filter((service) => service.selected);

    dispatch(get_Services(selected_services))

    setservices_added(selected_services)



  };

  //   usestate to open and close the dropdown menu
  const [isdropdown_open, setisdropdown_open] = useState(false);

  //   this will set the above usestate value true(open dropdown) and vice and versa
  const dropdown_menu = () => {
    setisdropdown_open(!isdropdown_open);
  };

  //   return the services buttons
  const services_menu = (ser) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
          marginTop: 10,
          backgroundColor: ser.selected ? "#ddc686" : "black",
          borderRadius: 10,
          paddingTop:10,
          paddingBottom:10,
          elevation: 10,
          shadowColor: "white",
          shadowRadius:2
        }}
        onPress={() => rerender_pressed(ser)}
      >
        <Text
          style={{
            color: ser.selected ? "black" : "#999e9e",
            fontSize: 25,
            fontWeight: "900",
            fontFamily: "monospace",
            marginBottom: 5,
            paddingLeft: 10,
          }}
        >
          {ser.service}
        </Text>
        <Text
          style={{
            color: ser.selected ? "black" : "#999e9e",
            paddingRight: 10,
            fontSize: 25,
          }}
        >
          100rs
        </Text>
      </TouchableOpacity>
    );
  };


  return (
    <View>

      {/* services dropdown menu button  */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          borderWidth: 0.5,
          borderLeftColor: "white",
          borderTopColor: "white",
          borderRightColor: "white",
          justifyContent: "center",
          borderBottomColor: isdropdown_open ? "black" : "white",
          marginTop: 20,
          marginBottom: 10,
          

        }}
        onPress={dropdown_menu}
      >
        <Text style={{ color: "white", fontSize: 25, fontWeight: "400" }}>
          select services <Icon name="caret-down" size={20} color="#999e9e" />
        </Text>

        {/* these are the individual services items  */}
      </TouchableOpacity>
      <View style={{ height: isdropdown_open ? "auto" : 0 }}>
        {services_offered.map(services_menu)}
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
