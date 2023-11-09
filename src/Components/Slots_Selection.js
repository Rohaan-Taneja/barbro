import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { get_Slots } from "../features/getslot/getslot_Slice";

const Slots_Selection = () => {
  // contains all the slots
  const [slots, setSlots] = useState([
    { t: "10 AM", ind: 1 },
    { t: "11 AM", ind: 2 },
    { t: "12 PM", ind: 3 },
    { t: "1 PM", ind: 4 },
    { t: "2 PM", ind: 5 },
    { t: "3 PM", ind: 6 },
    { t: "4 PM", ind: 7 },
    { t: "5 PM", ind: 8 },
    { t: "6 PM", ind: 9 },
    { t: "7 PM", ind: 10 },
    { t: "8 PM", ind: 11 },
    { t: "9 PM", ind: 12 },
    { t: "10 PM", ind: 13 },
  ]);

  const dispatch=useDispatch();



  // usestate to store the selected slot
  const [which_slot_selected, setwhich_slot_selected] = useState(null);

  //   function handling the selection of slots
  const toggleslot = (slot) => {
    if (slot.t === which_slot_selected) {
      setwhich_slot_selected(null);
      dispatch(get_Slots([]))
    } else {
      setwhich_slot_selected(slot.t);
      dispatch(get_Slots([slot.t]))
      
    }
  };

  

  return (
    <View>
      <Text style={{ color: "white", marginTop: 20, fontSize: 18 }}>
        select slot
      </Text>

      {/* all the slots list in horizontal scrollable view  */}
      <ScrollView horizontal={true} style={styles.container}>

        {slots.map((slot, index) => (

          <TouchableOpacity
            style={{
              flexDirection: "column",
              backgroundColor:
                which_slot_selected === slot.t ? "#ddc686" : "black",
              borderRadius: 20,
              alignItems: "center",
              paddingVertical: 15,
              width: 90,
              marginRight: 25,
              marginBottom: 15,
              color: "white",
              elevation: 8,
              shadowColor: "white",
            }}
            key={index}
            onPress={() => {
              toggleslot(slot);
            }}
          >
            <Text style={{ color: which_slot_selected === slot.t ? "black": "#999e9e" , fontWeight: "900" }}>
              {slot.t}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>


    </View>
  );
};

export default Slots_Selection;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  slotsText: {
    color: "#999e9e",
    fontWeight: "900",
  },
});
