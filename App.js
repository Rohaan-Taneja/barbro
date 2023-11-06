import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home_PageScreen from "./src/Screens/Home_PageScreen";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login_Screen from "./src/Screens/Login_Screen";
import Salon_details_Screen from "./src/Screens/Salon_details_Screen";
import Header_Component from "./src/Header/Header_Component";
import Book_Appointment_Screen from "./src/Screens/Book_Appointment_Screen";

// screenOptions={{headerStyle: {backgroundColor: 'black',},headerTintColor: '#999e9e',headerTitleStyle: {fontWeight: '900',}}}
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      {/* this is the first route and properties given to header in this route options is applied to every route header */}
      <Stack.Navigator initialRouteName="login"  >

          {/* login page route, will be called from above query */}
        <Stack.Screen name="Login" component={Login_Screen} options={{ headerShown: false }} />

        {/* home page route , will be called from login page after authentication  */}
        <Stack.Screen name="homescreen" component={Home_PageScreen} options={{ headerShown: false }} />

        {/* salon detail page , will be called when the user click on the salon card */}
        <Stack.Screen name="salon_detail_page" component={Salon_details_Screen} options={{ headerTitle: (props) => <Header_Component /> }}/>
        <Stack.Screen name="bookingspage" component={Book_Appointment_Screen} options={{ headerTitle:'Priya Village Show' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
