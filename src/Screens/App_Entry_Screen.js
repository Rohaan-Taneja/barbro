import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "react-native-navigation";

const App_Entry_Screen = () => {
  const navigation = useNavigation();

  const goto_registeration_page = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={styles.container}>

      <View>
        {/* heading text */}
        {/* <Text style={{ color: "white"}}>are you a</Text> */}
      </View>

      <View style={styles.content}>

        <TouchableOpacity style={styles.bttn} >

          <Text style={{ color: "#999e9e" ,width:'50%',textAlign:'center',fontSize:35 , fontWeight:'800' }}>Sallon</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bttn} onPress={goto_registeration_page}>

          <Text style={{ color: "#999e9e",textAlign:'center' ,width:'50%',fontSize:35 , fontWeight:'800' }}>User</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App_Entry_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 15,
    paddingTop: 43,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "column",
    height:'25%',
    justifyContent:'space-between', 
    alignItems: "center",
  },
  bttn:{
    marginTop: 20,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:2,
    borderWidth: 0.1,
    borderColor: "#A9A9A9",
    backgroundColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 8,
    elevation: 10,
    shadowColor: "white",
    shadowRadius:2
  }
});
