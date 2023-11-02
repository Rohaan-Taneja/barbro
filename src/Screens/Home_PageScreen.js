import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Vibration,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Location_Selection_menu_Screen from "./Location_Selection_menu_Screen";
import Profile_Photo_Screen from "./Profile_Photo_Screen";
import Filters_menu from "./Filters_menu";
import Card_Template from "./Card_Template";

const Home_PageScreen = () => {

  // sallons array 
  const salons = [
    {
      image: "https://example.com/image1.jpg",
      rating: 4.5,
      name: "Salon A",
      distance:3,
      services:'haircut ,trimming, shaving'
    },
    {
      image: "https://example.com/image2.jpg",
      rating: 3.8,
      name: "Salon B",
      distance:5,
      services:'haircut ,trimming, shaving',
    },
    {
      image: "https://example.com/image3.jpg",
      rating: 5.0,
      name: "Salon C",
      distance:9,
      services:'haircut ,trimming, shaving'
    },
    {
      image: "https://example.com/image4.jpg",
      rating: 4.0,
      name: "Salon D",
      distance:3.7,
      services:'haircut ,trimming, shaving'
    },
    {
      image: "https://example.com/image5.jpg",
      rating: 4.7,
      name: "Salon E",
      distance:20,
      services:'haircut ,trimming, shaving'
    },
    {
      image: "https://example.com/image6.jpg",
      rating: 3.5,
      name: "Salon F",
      distance:0.5,
      services:'haircut ,trimming, shaving'
    },
  ];


  const template = (e, index) => {
 
    return <Card_Template key={index} img={e.image} name={e.name} rating={e.rating} distance={e.distance} service={e.services} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      
        <View style={{ flexDirection: "row", justifyContent: "space-between" , alignItems:'center',marginBottom:5 }}>
          
          {/* choose location button/offcanvas  */}
          <Location_Selection_menu_Screen />
          <View style={{flexDirection:'column' ,alignItems:'center'  }}>
          <Profile_Photo_Screen />
          </View>
          
        </View>

        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row', alignItems:'baseline'}}>
          <Text style={{color:'white', fontSize:25 ,fontWeight:'300', fontFamily:'monospace' }}>Hello</Text>
          <Text style={{color:'white', fontSize:30 ,fontWeight:'800'}}> Rohan,</Text>
          </View>
          
          <Text style={{ fontSize:18,paddingTop:10 , color:'#999e9e', paddingBottom:20}}>what are you looking for ?</Text>
        </View>

        {/* search bar to search barber  */}
        <TextInput
          style={{
            borderRadius: 10,
            backgroundColor: "black",
            marginTop: 10,
            paddingVertical:1.5,
            paddingHorizontal: 10,
            fontSize: 14,
            color: "white",
            elevation: 20,
            shadowColor: "white",
            shadowRadius:2,
            // inlineImageLeft:'search_icon', we have to first download the image 
            
          }}
          placeholder="add your task"
          placeholderTextColor='#999e9e'
          // value={todo}
          // onChangeText={(text) => {
          //   settodo(text);
          // }}
        />

          {/* FILTER LIST  */}
          <Filters_menu  />   
        
          {/* all sallons heading  */}
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop:10 , paddingBottom:15 }}>

            {/* <View style={{ flex: 1, height: 0.4, backgroundColor: 'grey' }}></View> */}
            <Text style={styles.allsalons}>SALONS NEAR YOU</Text>
            {/* <View style={{ flex: 1, height: 0.4, backgroundColor: 'grey' }}></View> */}

          </View>

          
        
        <ScrollView >
          {salons.map(template)}
        </ScrollView>
    </SafeAreaView>
  );
};

export default Home_PageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 15,
    paddingTop: 43,
  },
  allsalons:{
    color:'#999e9e',
     marginHorizontal: 14 ,
     fontSize:15 ,
     fontWeight:'500',

  }
});
