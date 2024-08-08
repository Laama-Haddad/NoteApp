import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotesScreen from '../screens/NotesScreen';
import NewNoteScreen from '../screens/NewNoteScreen';
import ProfileScreen from '../screens/ProfileScreen';

const FooterStack=createStackNavigator();

const FooterStackNavigator=()=>{
  //  const {colors}=useTheme();
    return(
        <FooterStack.Navigator headerMode='none'>
            <FooterStack.Screen name='Home' component={NotesScreen}/>  
            <FooterStack.Screen name='NewNote' component={NewNoteScreen}/>
            <FooterStack.Screen name='Profile' component={ProfileScreen}/>
        </FooterStack.Navigator>
    );
}
export default FooterStackNavigator;