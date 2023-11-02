import {
  Button,
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

const Profile_Photo_Screen = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  return (
    <View>

      <View>

        {/* button to select current location  */}
        <TouchableOpacity
           style={{
          }}
          onPress={() => setIsOffCanvasOpen(true)}
        >
            <View>
              <Image source={require('../../assets/user.jpg')} 
              style={{height:40 , width:40 , borderRadius:40 }}  />
            </View>
        </TouchableOpacity>

      </View>

      {/* this menu menu will be visible when the above button is clicked  */}
      <Modal visible={isOffCanvasOpen} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "black",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              padding: 20,
              backgroundColor: "black",
            }}
          >
            {/* heading  and cross div  */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "black",
              }}
            >
              {/* heading  */}
              <Text style={{ color: "white" }}>heading</Text>

              {/* button for closing  */}
              <TouchableOpacity onPress={() => setIsOffCanvasOpen(false)}>
                <Text style={styles.close_bttn}>Close</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.userprofile}>
                profile alter list
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile_Photo_Screen;

const styles = StyleSheet.create({
    userprofile: {
        color:'white'

    },

    close_bttn:{
        color:'white'
    }
  });

