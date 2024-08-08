import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const ButtonComp=({title,color})=>{
    return(
            <View style={{backgroundColor:color,...styles.viewContainerStyle}}>
                <Text style={styles.textStyle}>{title}</Text>
            </View>
    );
}
export default ButtonComp;
const height=Dimensions.get('screen').height;
const width=Dimensions.get('screen').width;
const styles=StyleSheet.create({
    viewContainerStyle:{
        width:70,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        height:35,
    },
    textStyle:{
        fontSize:18
    }
});
