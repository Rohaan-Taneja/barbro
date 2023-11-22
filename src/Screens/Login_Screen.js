import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Login_Screen = () => {
  // navigationhook for navigation from one page to another
  const navigation = useNavigation();

  const skip_for_now = () => {
    navigation.navigate("homescreen");
  };

  const goto_homescreen = () => {
    // login the user using the backend
    // and then navigate the user to homepage

    navigation.navigate("homescreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 20,
          }}
        >
          {/* SKIP FOR BUTTON  */}
          <TouchableOpacity style={styles.skip_bttn} onPress={skip_for_now}>
            <Text style={{ color: "#999e9e", fontSize: 18, fontWeight: "500" }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        {/* logo */}
        <View style={styles.logo_container}>
          <Image
            source={require("../../assets/logooo.jpg")}
            style={styles.logo}
          />
        </View>


          {/* login with google button  */}
        <View style={styles.login_with_google_outer}>

          <TouchableOpacity style={styles.login_with_google_bttn}>
          <Image
            source={require("../../assets/google_logo.jpg")}
            style={{width:25 , height:25}}
          />
            <Text style={{color:'white' , marginLeft:5, fontSize:20}}>   login with Google</Text>
          </TouchableOpacity>
        </View>

        {/* login form */}
        <View style={{ paddingTop: 20 }}>
          <View style={styles.name_and_input}>
            <Text
              style={{
                color: "white",
                paddingRight: 20,
                fontStyle: "italic",
                color: "#999e9e",
                fontSize: 18,
                marginBottom: 5,
              }}
            >
              Name
            </Text>
            <TextInput style={styles.input} autoCapitalize="none" />
          </View>

          {/* input for rmail  */}
          {/* <View style={styles.name_and_input}>
            <Text style={{color:'white',paddingRight:20, fontSize:20}}>email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View> */}

          <View style={styles.name_and_input}>
            <Text
              style={{
                color: "white",
                paddingRight: 20,
                fontStyle: "italic",
                color: "#999e9e",
                fontSize: 18,
                marginBottom: 5,
              }}
            >
              Phone no
            </Text>
            <TextInput
              style={styles.input}
              placeholder="phone number"
              keyboardType="phone-pad"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.name_and_input}>
            <Text
              style={{
                color: "white",
                paddingRight: 20,
                fontStyle: "italic",
                color: "#999e9e",
                fontSize: 18,
                marginBottom: 5,
              }}
            >
              Password
            </Text>
            <TextInput
              style={styles.input}
              placeholder="password"
              keyboardType="password"
              autoCapitalize="none"
            />
          </View>

          {/* register buton */}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={styles.login_bttn}
              onPress={goto_homescreen}
            >
              <Text style={{ color: "#999e9e", fontSize: 20 }}>register</Text>
            </TouchableOpacity>
          </View>

          {/* or are you a member part  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ color: "white" }}>or already a member ?</Text>
            <TouchableOpacity>
              <Text style={{ color: "lightblue" }}> sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  skip_bttn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    borderWidth: 0.1,
    borderColor: "#A9A9A9",
    backgroundColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 2,
    elevation: 15,
    shadowColor: "white",
    shadowRadius: 2,
  },
  logo_container: {
    flexDirection: "row",
    marginTop: 20,
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "100%",
    width: "25%",
  },
  input: {
    color: "white",
    borderRadius: 2,
    borderWidth: 0.1,
    borderColor: "#A9A9A9",
    backgroundColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 3,
    elevation: 5,
    shadowColor: "white",
    shadowRadius: 2,
  },
  name_and_input: {
    flexDirection: "column",
    padding: 10,
  },
  login_bttn: {
    marginTop: 20,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    borderWidth: 0.1,
    borderColor: "#A9A9A9",
    backgroundColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 4,
    elevation: 5,
    shadowColor: "white",
    shadowRadius: 2,
  },
  login_with_google_outer:{
    marginTop: 20,
    flexDirection: "row",
    justifyContent:"center",
    elevation: 10,

  },
  login_with_google_bttn:{
    flexDirection:'row',
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    borderWidth: 0.1,
    borderColor: "#A9A9A9",
    backgroundColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 7,
    elevation: 10,
    shadowColor: "white",
    shadowRadius: 2,

  }
});
