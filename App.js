import React from 'react';

// import Login, { LoginScreen } from './screens/Login';
// import { SignUpScreen } from './screens/SignUp';
import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Navigator from './routes/HomeStack';
import { RemoteScreen } from './screens/Remote';
// import { HomeScreen } from './screens/Home';
// import { MenuScreen } from './screens/Menu';
// import { HelpScreen } from './screens/Help';
// import { UserInfoScreen } from './screens/UserInfo';
// import { PassChangeScreen } from './screens/PassChange';
const Stack=createStackNavigator();

function App(){
  return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/> */}

         <Stack.Screen name="Remote" component={RemoteScreen}/>
        {/* <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Menu" component={MenuScreen}/>
        <Stack.Screen name="UserInfo" component={UserInfoScreen}/>
        <Stack.Screen name="PassChange" component={PassChangeScreen}/>
        <Stack.Screen name="Help" component={HelpScreen}/> */}

      </Stack.Navigator>
  
  );
}
export default () =>{
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}