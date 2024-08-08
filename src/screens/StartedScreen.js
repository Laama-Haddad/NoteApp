import React from 'react';
import {View, Image,StyleSheet,Dimensions,Text,TouchableOpacity } from 'react-native';
import {useTheme} from '@react-navigation/native';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

const StartedScreen=({navigation})=>{
    const{colors}=useTheme();
  
    return(
        <View style={styles.viewContainerStyle}>
            <View style={styles.viewHeaderStyle}>
                <View style={{...StyleSheet.absoluteFill}}>
                    <Image source={require('../images/started.png')}  resizeMode='stretch' style={{width:'100%',height:'100%'}}/>
                </View>
                <View  style={styles.viewImageStyle}>
                    <Image source={require('../images/started-pic.png')} style={{width:'100%',height:'100%',borderRadius:40}}/>
                </View>
            </View>
            <View style={styles.viewFooterStyle}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Drawer');}} >
                    <View style={styles.viewStartedStyle}>
                        <Text style={styles.textStartedStyle}>GET STARTED</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                    <Text style={{color:'#F59523'}}> STICK  </Text>
                    <Text style={{color:'#324953'}}>NOTE</Text>
                </View>
            </View>
        </View>
    );
}
export default StartedScreen;

const styles=StyleSheet.create({
    viewContainerStyle:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'column'
    },
    viewHeaderStyle:{
        width:width,
        height:0.67*height,
        justifyContent:'center',
        alignItems:'center'
    },
    viewImageStyle:{
        width:width/1.9,
        height:width/1.9,
    },
    viewFooterStyle:{
        backgroundColor:'#F5F6FA',
        width:width,
        height:0.33*height,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    viewStartedStyle:{
        backgroundColor:'#FFCA08',
        width:width/3,
        height:width/7,
        marginBottom:15,
        marginTop:height/15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
    },
    textStartedStyle:{
        color:'#FFFFFF',
        fontWeight:'bold',
    }
});