import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login_Screen = () => {

  // navigationhook for navigation from one page to another 
  const navigation=useNavigation();

  const goto_homescreen=()=>{
    // login the user using the backend 
    // and then navigate the user to homepage

    navigation.navigate('homescreen');
  }

  return (
    <SafeAreaView>
    <View style={{marginTop:80 , marginLeft:10}}>
      <Text>Login_Screen</Text>

      {/* login button  */}
      <TouchableOpacity style={{ backgroundColor: "black" , marginRight:20 , marginTop:30}} onPress={goto_homescreen} >
          <Text style={{ color: "white" }}>login</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Login_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
