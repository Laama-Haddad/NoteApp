import React from 'react';
import {View, Image, Text,StyleSheet} from 'react-native';
import { BlurView } from "@react-native-community/blur";
const AboutScreen=()=>{
    return(
        <View style={styles.container}>
            <Image style={styles.absolute} source={require('../images/splash.jpg')}/>
            <BlurView
                    style={styles.absolute}
                    blurType="dark"
                    blurAmount={20}
                    reducedTransparencyFallbackColor="white"
            />
            <View style={styles.roundImageBackground}>
                <Image
                style={styles.roundImage}
                source={require('../images/splash.jpg')}/>
            </View>
            <View style={styles.viewTextStyle}>
                <Text style={styles.textStyle}>Email: Laama.haddad.it@gmail.com</Text>
            </View>
            <View style={styles.viewTextStyle}>
               <Text style={styles.textStyle}>LoL Delivery © 2020 All Rights Reserved</Text>
            </View> 
    </View>
    );
}

export default AboutScreen;

const styles=StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    roundImage: {
        height: 200,
        width: 200,
      },
    roundImageBackground: {
        backgroundColor: 'white',
        height: 300,
        width: 300,
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle:{
        fontSize:20,
        color:'white',
        fontStyle:'italic',
        fontWeight:'bold'
    },
    viewTextStyle:{
        marginTop:20,
        marginBottom:40
    }
});