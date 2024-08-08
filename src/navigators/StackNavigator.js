import React from 'react';
import {Image,StyleSheet} from 'react-native';
 import {createStackNavigator} from '@react-navigation/stack';
 //import { BlurView } from "@react-native-community/blur";
 import NotesScreen from '../screens/NotesScreen';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';
//import HeaderRight from '../headers/HeaderRight';
//import {useTheme} from '@react-navigation/native';
import NoteScreen from '../screens/NoteScreen';

import NewNoteScreen from '../screens/NewNoteScreen';
import StartedScreen from '../screens/StartedScreen';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
const Stack=createStackNavigator();

const StackNavigator=()=>{
  //  const {colors}=useTheme();
    return(
        <Stack.Navigator
      headerMode='none'
    
            screenOptions={{
                            headerStyle: {
                           //   backgroundColor:colors.headerColor,
                              height: 55, 
                            },
                            
                          //  headerTransparent: true,
                          //  headerBackground:()=>{},
                          //    headerRight:()=><HeaderRight/>,
                            // headerTitle:()=><Image source={require('../images/title.png')}/>,
                             headerTitleAlign:'left',
                             headerTitleAllowFontScaling:true,
                            //headerTitleStyle:{color:'red',fontSize:30}
                          }}
        >
          
            <Stack.Screen name='HomeStack' component={HomeStackNavigator}/> 
            <Stack.Screen name='SignIn' component={SignInScreen}/>
            <Stack.Screen name='About' component={AboutScreen}/>          
            <Stack.Screen name='SignUp' component={SignUpScreen}/>          
            <Stack.Screen name='NoteDetails' component={NoteScreen}/>     
        </Stack.Navigator>
    );
}
export default StackNavigator;