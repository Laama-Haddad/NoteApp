import React from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions} from 'react-native';

const NoteTitle=()=>{
    return(
        <View style={styles.viewContainerStyle}>
            <Text style={styles.textStyle}>Title:</Text>
            <TextInput
                    style={{ borderWidth: 1 }}
                      // onChangeText={text => onChangeText(text)}
                   //value={value}
            />
        </View>
    );
}
export default NoteTitle;
const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;
const styles=StyleSheet.create({
    viewContainerStyle:{
    
      borderWidth:1,
      backgroundColor:'#eeeeee',
      height:height/7,
      borderRadius:10
    },
    textStyle:{
        fontSize:width*0.1,
    }
});