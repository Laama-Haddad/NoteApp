import React, {useContext} from "react";
import { View,Text, Switch, StyleSheet,TouchableOpacity} from "react-native";
import {themeContext} from '../../App';

const Toggle = () => {
  const {themeState,themeDispatch}=useContext(themeContext);
  const {darkTheme}=themeState;

  const toggleSwitch = () =>{ 
                              themeDispatch({type:"SET_THEME",payload:!darkTheme}); 
                            };

  return (
    <View style={{marginLeft:10}}>
      <Text style={{fontSize:13,margin:10}}>Refenece:</Text>
      <View style={{flexDirection:'row'}}>
        <View style={styles.container}>
          <Switch
            trackColor={{ false: "#767577", true: "#af0000" }}
            thumbColor={darkTheme ? "#eeeeee" : "#f4f3f4"}
            ios_backgroundColor="#000000"
            size="large"
            onValueChange={toggleSwitch}
            value={darkTheme}
          />
        </View>
        {
          darkTheme ? <Text style={{fontSize: 17,marginTop:0}}>Light Theme</Text>
                    : <Text style={{fontSize: 17,marginTop:0}}>Dark Theme</Text>
        }
      
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Toggle;
