import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

const Filters_menu = () => {
  return (
    
    <View style={{ flexDirection: "row" , marginBottom:20 }}>

      {/* filer button  */}
      <TouchableOpacity style={styles.filter_bttn}>
        <Icon name="filter" size={15} color="#999e9e" />
        <Text style={{ color: "#999e9e" ,paddingStart:5,paddingEnd:5 ,fontSize:14 , fontWeight:'600' }}>Filters</Text>
        <Icon name="caret-down" size={20} color="#999e9e" />
      </TouchableOpacity>
      
      {/* nearest to you button  */}
      <TouchableOpacity style={styles.filter_bttn}>
        <Text style={{ color: "#999e9e" ,paddingStart:5,paddingEnd:5 ,fontSize:14 , fontWeight:'600' }}>Nearest to you</Text>
      </TouchableOpacity>

      {/* rating 4+ */}
      <TouchableOpacity style={styles.filter_bttn}>
        <Text style={{ color: "#999e9e" ,paddingStart:5,paddingEnd:5, fontSize:14 , fontWeight:'600'}}>Rating 4+</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Filters_menu;

const styles = StyleSheet.create({

  filter_bttn: {
    marginTop: 20,
    marginRight:12,
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
  },
});

