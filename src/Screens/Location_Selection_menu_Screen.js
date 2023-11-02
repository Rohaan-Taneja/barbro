import React, { useState } from 'react';
import { Button, View, Text, Modal, TouchableOpacity , StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Location_Selection_menu_Screen = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  return (
    <View >
        <View>
            {/* button to select current location  */}
            <TouchableOpacity style={{}} onPress={() => setIsOffCanvasOpen(true)}> 
                <View style={{flexDirection:'row', alignItems:'baseline'}} >
                    <Icon name="map-marker" size={25} color="grey" />

                    <Text style={{color:'white' , fontSize:17, fontWeight:'900'}}  >  Block 7  </Text>
                      
                     <Icon name="caret-down" size={18} color="white" />
                </View>
            </TouchableOpacity>

        </View>

        {/* this menu menu will be visible when the above button is clicked  */}
      <Modal
        visible={isOffCanvasOpen}
        animationType="slide"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'black' }}>

          <View style={{width:'100%' ,height:'100%' ,backgroundColor: 'white', padding: 20 , backgroundColor:'black' }}>

            {/* heading  and cross div  */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',backgroundColor:'black' }}>
                {/* heading  */}
              <Text style={{color:'white'}}>heading</Text>

              {/* button for closing  */}
              <TouchableOpacity onPress={() => setIsOffCanvasOpen(false)}>
                <Text style={styles.close_bttn}>Close</Text>
              </TouchableOpacity>

            </View>
            <View>
              <Text style={styles.selectlocation}>Choose your location from here.</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Location_Selection_menu_Screen;

const styles = StyleSheet.create({
    selectlocation: {
        color:'white'

    },

    close_bttn:{
        color:'white'
    }
  });
