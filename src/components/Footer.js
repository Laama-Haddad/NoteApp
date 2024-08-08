import React, { Component } from 'react';
import { View,StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FabButton from '../components/FabButton';
const Footer=()=>{
    return(
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#fff'

        }}>
            <View style={{ position: 'absolute', padding: 3, alignSelf: 'center', backgroundColor: '#fff', width: 70, height: 70, borderRadius: 35, bottom: 25, zIndex: 5,borderWidth:1 }}>
                <FabButton/>
            </View>
            <View style={{ position: 'absolute', backgroundColor: '#3F51B5', bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                <AntDesign name="home" size={30}/>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <MaterialIcons name="person" size={30}/>
                </View>
            </View>
        </View>
    );
}
export default Footer;
const styles=StyleSheet.create({

});