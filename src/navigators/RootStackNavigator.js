import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartedScreen from '../screens/StartedScreen';
import DrawerNavigator from './DrawerNavigator';

const RootStack=createStackNavigator();

const RootStackNavigator=()=>{
  //  const {colors}=useTheme();
    return(
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name='Started' component={StartedScreen}/>  
            <RootStack.Screen name='Drawer' component={DrawerNavigator}/>  
        </RootStack.Navigator>
    );
}
export default RootStackNavigator;