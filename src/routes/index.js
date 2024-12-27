import React, { useState, useRef, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screen/Home";
import ScreenNames from "./routes";
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import Splash from "../screen/Splash";


const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenNames.SPLASH}
          screenOptions={{header: () => false}}
        >
            <Stack.Screen name={ScreenNames.SPLASH} component={Splash}/>
            <Stack.Screen name={ScreenNames.SIGNUP} component={SignUp}/>
            <Stack.Screen name={ScreenNames.SIGNIN} component={SignIn}/>
            <Stack.Screen name={ScreenNames.HOME} component={Home}/>
        </Stack.Navigator>
    
    </NavigationContainer>
  );
}
