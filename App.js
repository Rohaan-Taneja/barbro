import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home_PageScreen from "./src/Screens/Home_PageScreen";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login_Screen from "./src/Screens/Login_Screen";
import Salon_details_Screen from "./src/Screens/Salon_details_Screen";
import Header_Component from "./src/Header/Header_Component";
import App_Entry_Screen from "./src/Screens/App_Entry_Screen";
import Book_Appointment_Screen from "./src/Screens/Book_Appointment_Screen";
import { Provider } from "react-redux";
import {store} from './src/store/store'



// 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>

    <NavigationContainer>

      {/* this is the first route and properties given to header in this route options is applied to every route header */}
      <Stack.Navigator initialRouteName="who_you_are" screenOptions={{headerStyle: {backgroundColor: 'black',},headerTintColor: '#999e9e',headerTitleStyle: {fontWeight: '900',}}}  >

         
        <Stack.Screen name="who_you_are" component={App_Entry_Screen} options={{ headerShown: false }} />

         {/* login page route, will be called from above query */}
        <Stack.Screen name="Login" component={Login_Screen} options={{ headerShown: false }} />

        {/* home page route , will be called from login page after authentication  */}
        <Stack.Screen name="homescreen" component={Home_PageScreen} options={{ headerShown: false }} />

        {/* salon detail page , will be called when the user click on the salon card */}
        <Stack.Screen name="salon_detail_page" component={Salon_details_Screen} options={{ headerTitle: (props) => <Header_Component /> }}/>
        <Stack.Screen name="bookingspage" component={Book_Appointment_Screen} options={{ headerTitle:'' }}/>
      </Stack.Navigator>
    </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
