import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from './screens/LoginScreen';
// import { SignUpScreen } from './screens/SignUp';
import {NavigationContainer}from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigator from './routes/HomeStack';
// import LoginScreen from './screens/Login';
import RemoteScreen from './screens/RemoteScreen';
// import { HomeScreen } from './screens/Home';
// import { MenuScreen } from './screens/Menu';
// import { HelpScreen } from './screens/Help';
// import { UserInfoScreen } from './screens/UserInfo';
// import { PassChangeScreen } from './screens/PassChange';
const Stack=createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="Remote" component={RemoteScreen}/>

        {/* <Stack.Screen name="SignUp" component={SignUpScreen}/> */}

        {/* <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Menu" component={MenuScreen}/>
        <Stack.Screen name="UserInfo" component={UserInfoScreen}/>
        <Stack.Screen name="PassChange" component={PassChangeScreen}/>
        <Stack.Screen name="Help" component={HelpScreen}/> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})