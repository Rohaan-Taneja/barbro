import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Slots_Selection from "./Slots_Selection";
import { useDispatch } from "react-redux";
import { get_day } from "../features/getday/getselectedday_Slice";


// weekdays list 
const WeekView = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dispatch=useDispatch();


  // months list 
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];


  // when this is true then slots are visible else not visible
  const [isdayselected, setisdayselected] = useState(false);

  // it will store the selected day
  const [which_day_selected, setwhich_day_selected] = useState(null);

  const today = new Date();

  const dates = [];

  // to store the dates in the dates array
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const day = currentDate.getDate();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const monthofyear = months[currentDate.getMonth()];

    dates.push({ day, dayOfWeek, monthofyear, selected: false });
  }

  // function handling clickability of the slots
  const toggleslot = (date, index) => {
    console.log(date, index);

    // if same day is selected again ,itwill be deselcted
    if (which_day_selected === date.dayOfWeek) {
      setwhich_day_selected(null);
      setisdayselected(false);
      dispatch(get_day([]))
    } else {
      setwhich_day_selected(date.dayOfWeek);
      setisdayselected(true);
      dispatch(get_day([date]))
    }
  };
  return (
    <View>
      <ScrollView horizontal={true} style={styles.container}>
        {dates.map((date, index) => (

          // slots button
          <TouchableOpacity
            style={{
              flexDirection: "column",
              backgroundColor:
                date.dayOfWeek === which_day_selected ? "#ddc686" : "black",
              borderRadius: 35,
              alignItems: "center",
              paddingVertical: 5,
              width: 90,
              marginRight: 25,
              marginBottom: 15,
              color: "white",
              elevation: 8,
              shadowColor: "white",
            }}
            key={index}
            onPress={() => {
              toggleslot(date, index);
            }}
          >
            {/* individual slot content , date, day and month  */}

            {/* day  */}
            <Text
              style={{
                fontWeight: "800",
                fontSize: 25,
                color:
                  which_day_selected === date.dayOfWeek ? "black" : "#999e9e",
                paddingTop: 2,
              }}
            >
              {date.day}
            </Text>


            {/* month of the year  */}
            <Text
              style={{
                fontSize: 15,
                fontWeight: "600",
                color:
                  which_day_selected === date.dayOfWeek ? "black" : "#999e9e",
                paddingBottom: 2,
              }}
            >
              {date.monthofyear}
            </Text>

            {/* line  */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color:
                  which_day_selected === date.dayOfWeek ? "black" : "#999e9e",
              }}
            >
              |
            </Text>

            {/* day of the week  */}
            <Text
              style={{
                fontWeight: "400",
                fontSize: 15,
                color:
                  which_day_selected === date.dayOfWeek ? "black" : "#999e9e",
                paddingTop: 2,
              }}
            >
              {date.dayOfWeek}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* if day is selected then slots are visible else not  */}
      <View
        style={{
          opacity: isdayselected ? 1 : 0,
          height: isdayselected ? "auto" : 0,
        }}
      >
        {/* slots component , will be visible if dat is selected else invisible  */}
        <Slots_Selection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "black",
  },
});

export default WeekView;
