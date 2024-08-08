import React from 'react';
import {View, Image, ActivityIndicator,StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

const SplashScreen=()=>{
    const{colors}=useTheme();
    return(
        <View style={{...styles.viewContainerStyle,backgroundColor:colors.background}}>
            <View style={styles.viewImageStyle}>
                <Image source={require('../images/splash.jpg')} style={{width:'100%', height:'100%'}}/>
            </View>
            <View>
                <ActivityIndicator color="black"   size="large" style={{marginBottom:150}}/>
            </View>
        </View>
    );
}
export default SplashScreen;

const styles=StyleSheet.create({
    viewContainerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    viewImageStyle:{
        width:200,
        height:200,
    }
});