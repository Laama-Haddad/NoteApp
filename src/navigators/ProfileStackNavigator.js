import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';

const ProfileStack=createStackNavigator();

const ProfileStackNavigator=()=>{
  //  const {colors}=useTheme();
    return(
        <ProfileStack.Navigator headerMode='none'>
            <ProfileStack.Screen name='Profile' component={ProfileScreen}/>  
        </ProfileStack.Navigator>
    );
}
export default ProfileStackNavigator;