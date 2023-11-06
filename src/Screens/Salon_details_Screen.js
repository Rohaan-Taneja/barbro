import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Star_Rating from "./Star_Rating";
import { useNavigation } from "@react-navigation/native";
import Date_And_Time_Picker from "../Components/Date_And_Time_Picker";
import Slots_Selection from "../Components/Slots_Selection";
import Services from "../Components/Services";
import Selected_day_slot_service_component from "../Components/Selected_day_slot_service_component";
import { useDispatch } from "react-redux";

// getting the width of the screen
const { width } = Dimensions.get("window");

// slider images
const images = [
  { id: 1, source: require("../../assets/user.jpg") },
  { id: 2, source: require("../../assets/saloon_img.jpg") },
  { id: 3, source: require("../../assets/kya.gif") },
];

const Salon_details_Screen = () => {


  // hook for redirecting to different page
  const navigation = useNavigation();


  // function to set the slides
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.source} style={styles.image} resizeMode="cover" />
      </View>
    );
  };

  // this will redirect to booking page on press of book appointment bttn
  const goto_booking_page = () => {
    navigation.navigate("bookingspage");
  };

  // usestate array to store the services selected
  

  return (
    <View style={styles.outercontainer}>
      {/* scrollable content  */}
      <ScrollView>
        <View style={styles.container}>
          {/* slider  */}
          <Carousel
            data={images}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width - 0}
            loop
            autoplay
            autoplayInterval={3000}
          />
        </View>

        {/* salon name   */}
        <View
          style={{
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.salon_name}>salon 1</Text>
          <Star_Rating s={3} />
        </View>

        {/* address box  */}
        <View>
          <Text style={{ color: "#999e9e" }}>
            Radius Gym-Shop No-24/51B
          </Text>
          <Text style={{ color: "#999e9e", paddingTop: 2, fontSize: 20 }}>
            Unisex
          </Text>

           {/* a line with sadow effect  */}
          <View style={{width:'100%', borderWidth:0.2 , marginTop:10 ,elevation: 3, shadowColor: "white", shadowRadius:2}}></View>
        </View>

        {/* day selection  */}
        <View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                fontWeight: "700",
                paddingTop: 20,
              }}
            >
              Select day
            </Text>
          </View>
          <Date_And_Time_Picker />
        </View>

        {/* heading  */}
        <View>
          <Text
            style={{
              color: "white",
              paddingTop: 20,
              fontSize: 30,
              fontWeight: "700",
            }}
          >
            Services
          </Text>
        </View>

        <Services />
        
      </ScrollView>

      {/* upr sbb scrollable hai , ye neeche wala bttn , asa a footer kaam karega and fixed raheag  */}

      
      <View
        style={{
          flexDirection:'row',
          elevation: 10,
          shadowOffset: { height: -3 },
          shadowColor: "white",
          shadowRadius: 2,
        }}
      >

        <View style={{width:'50%'}}>
          <Selected_day_slot_service_component  />
        </View>

        {/* book appointment button  */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
            width:'50%'
          }}
          onPress={goto_booking_page}
        >
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontWeight: "900",
              backgroundColor: "#ddc686",
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 15,
            }}
          >
            Book Service
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outercontainer: {
    flex: 1,
    backgroundColor: "black",
    padding: 15,
    paddingTop: 43,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "black",
  },
  slide: {
    width: width - 50,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: width - 50,
    height: 150,
  },

  salon_name: {
    color: "white",
    fontSize: 35,
    fontWeight: "800",
  },

  added_services_style: {
    color: "white",
    padding: 10,
    fontSize: 20,
  },
});

export default Salon_details_Screen;
