import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import React,{useContext, useEffect,useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './authscreens/login/Login';
import Home from './protectedscreens/Home';
import { Usercontext } from './contexts/Usercontext';

import Loading from './Loading';
import Myaccount from './protectedscreens/Myaccount';
import MyTabs from '../routes/Tabs';

export default function Start() {


 


  let [user,setuser]=useContext(Usercontext)
  let userka=user
  console.log('jwaab',userka)




  let Stack=createStackNavigator()


 


  return (

<Stack.Navigator screenOptions={{
      headerShown:false
    }}>
       <Stack.Screen component={userka=='loading'?Loading:userka?MyTabs:Login} name='home'/>
        <Stack.Screen component={Login} name='login' />
       
    </Stack.Navigator>    

    
    
    
);
}

