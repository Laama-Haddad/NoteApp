import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NotesScreen from '../screens/NotesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StackNavigator from './StackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import NewNoteScreen from '../screens/NewNoteScreen';
const BottomTab = createMaterialBottomTabNavigator();
const BottomTabNavigator=()=>{
    return ( 
        <BottomTab.Navigator
                             barStyle={{ backgroundColor: 'red' }}
        >
          <BottomTab.Screen name="Home" component={HomeStackNavigator} />
          <BottomTab.Screen name="NewNote" component={NewNoteScreen} />
          <BottomTab.Screen name="Profile" component={ProfileStackNavigator} />
        </BottomTab.Navigator>
     
    );
  }
  export default BottomTabNavigator;