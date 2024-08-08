import 'react-native-gesture-handler';

import React,{createContext,useReducer,useState, useEffect}  from 'react';
import SplashScreen from './src/screens/SplashScreen';

import { appColors } from './src/constants';

import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import {themeReducer,themeInitState} from './src/reducers/themeReducer';
import RootStackNavigator from './src/navigators/RootStackNavigator';

import DrawerNavigator from './src/navigators/DrawerNavigator';
export const  themeContext=createContext()
const App = () => {
  const [visibleSplash,setVisibleSplash]=useState(true);
  const [signUp,setSignUp]=useState(false);
  const [themeState,themeDispatch]= useReducer(themeReducer,themeInitState)
  const {darkTheme}=themeState;
  const customDarkTheme={
    ...DarkTheme,
    colors:{
      ...DarkTheme.colors,
      background:appColors.black,
      indicator:appColors.white,
      noteBackground:'#a5d6a7',
      close:appColors.lightRed,
      button:appColors.darkGreen,
      text:appColors.white,
      hint:appColors.darkGray,
      
      headerColor:appColors.darkYellow,
      iconColor:'green',
      tabColor:'#eeeeee',
      noteTitle:appColors.white,
  
    }
  }
  const customDefaultTheme={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background:appColors.white,
      indicator:appColors.black,
      noteBackground:appColors.lightGreen,
      close:appColors.lightRed,
      button:appColors.darkGreen,
      text:appColors.black,
      hint:appColors.darkGray,
      
      headerColor:'red',
      iconColor:'black',
      tabColor:'#fe0000',
      noteTitle:appColors.black,
 

    } 
  }
    hideSplashScreen=()=>{
      setVisibleSplash(false);
    }
 
    useEffect(()=>{
      setTimeout(function(){
        hideSplashScreen();
    }, 5000);
   },[]);
  return(
          <themeContext.Provider value={{themeState,themeDispatch}}>
            <NavigationContainer  theme={darkTheme ? customDarkTheme : customDefaultTheme}>
              {
               (signUp==false) ?  <RootStackNavigator/> :
                  (visibleSplash === true) ? <SplashScreen/>  : <DrawerNavigator/>
              }
            </NavigationContainer>
          </themeContext.Provider>
  );
};
export default App;
