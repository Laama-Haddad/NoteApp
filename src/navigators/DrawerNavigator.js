import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import StackNavigator from './StackNavigator';
import ProfileScreen from '../screens/ProfileScreen';
//import ToastMessage from '../components/ToastMessage';
import BottomTabNavigator from './BottomTabNavigator';
import HomeStackNavigator from './HomeStackNavigator';

const Drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
 
        <Drawer.Navigator
            drawerContent={props=><CustomSidebarMenu {...props} />}
            drawerPosition='right'
        >   
    {/*   <Drawer.Screen  name='BottomTab' component={BottomTabNavigator}/> */}
         <Drawer.Screen  name='HomeStack' component={HomeStackNavigator}/>
         <Drawer.Screen  name='Stack' component={StackNavigator}/>
           
        </Drawer.Navigator>
              
    );
}
export default DrawerNavigator;
