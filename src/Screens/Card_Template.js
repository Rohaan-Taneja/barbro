import { StyleSheet, Text, View, Image, TouchableOpacity ,Vibration} from "react-native";
import React from "react";
import Star_Rating from "./Star_Rating";
import { useNavigation } from "@react-navigation/native";



const Card_Template = (props) => {

  const navigation=useNavigation();


  
  const goto_salon_detail_page=(p)=>{
    

    // clicked product details 
    console.log("this is p",p)

    navigation.navigate('salon_detail_page')

  }
 
  return (
    <TouchableOpacity key={props.index} onPress={()=>{
      // Vibration.vibrate(2)
      goto_salon_detail_page(props)
    }}>
      <View style={styles.cardContainer}>
        <Image
          source={require("../../assets/saloon_img.jpg")}
          style={styles.image}
        />
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.rating}>
              {" "}
              <Star_Rating s={props.rating} />{" "}
            </Text>
          </View>
          <View style={{flexDirection:'row',backgroundColor:'black', paddingBottom:10, justifyContent:'space-between', alignItems:'center' }}>
            
            {/* services  */}
            {/* <Text style={{color:'grey',paddingLeft:10}}>{props.service}</Text> */}

            
            <Text style={{ color: "grey" ,fontSize: 13, fontWeight: "700" , paddingLeft:10 , marginBottom:10 }}>{props.distance} km from your location</Text>

            {/* book appointment button */}
            <TouchableOpacity>
              <Text style={{color:'black',fontWeight:'700' , marginRight:15, marginBottom:10 , backgroundColor:'#ddc686', paddingHorizontal:10, paddingVertical:8 , borderRadius:10}}>Book Appointment</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card_Template;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 0.5,
    borderRadius: 18,
    overflow: "hidden",
    marginTop: 30,
    elevation: 10,
    shadowColor: "white",
  },
  image: {
    width: "100%",
    height: 200, // Adjust the height to your preference
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 10,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  rating: {
    color: "white",
    fontSize: 16,
  },
});
