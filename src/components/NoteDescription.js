import React from 'react';
import {Text, View, TextInput, StyleSheet,Dimensions} from 'react-native';

const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;
const NoteDescription=()=>{
    return(
        <View style={styles.viewContainerStyle}>
            <Text style={styles.textStyle}>Description:</Text>
            <TextInput
                     style={{  borderWidth: 1,}}
                     // onChangeText={text => onChangeText(text)}
                     // value={value}
                     multiline={true}
                     numberOfLines={height/35}
            />
        </View>
    );
}
export default NoteDescription;

const styles=StyleSheet.create({
    viewContainerStyle:{
        borderWidth:1,
        backgroundColor:'#aaaaaa',
        height:height*0.6,
        borderRadius:10,
    },
    textStyle:{
        fontSize:width*0.101,
    }
});