import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotesScreen from '../screens/NotesScreen';
import NewNoteScreen from '../screens/NewNoteScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack=createStackNavigator();

const HomeStackNavigator=()=>{
  //  const {colors}=useTheme();
    return(
        <HomeStack.Navigator headerMode='none'>
            <HomeStack.Screen name='Home' component={NotesScreen}/>  
            <HomeStack.Screen name='NewNote' component={NewNoteScreen}/>
            <HomeStack.Screen name='Profile' component={ProfileScreen}/>
        </HomeStack.Navigator>
    );
}
export default HomeStackNavigator;