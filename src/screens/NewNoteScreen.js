import React from 'react';
import {View, Text, Button,Alert,TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

import NoteTitle from '../components/NoteTitle';
import NoteDescription from '../components/NoteDescription';
import ButtonComp from '../components/ButtonComp';
import Storage from '../asyncStorage/Storage';
import myServices from '../hooks/useServices';
import {useNavigation} from '@react-navigation/native';
const NewNoteScreen=()=>{
    const navigation=useNavigation();
    function createNote()
    {
        Storage.loading('token',userToken=>{
            Alert.alert(userToken);
            myServices.storeNoteFunc(userToken,result=>{
                Alert.alert('my note',JSON.stringify(result.data));
                navigation.navigate('Notes');
                 // Storage.saving('token',result.data);
                 //Storage.loading('token',data=>{Alert.alert(data);});
            });
        });
    }
    return(
        <View style={styles.viewContianerStyle}>
            <View style={styles.viewTitleStyle}>
                <NoteTitle/>
            </View>
            <View style={styles.viewDescriptionStyle}>
                <NoteDescription/>
            </View>  
            <TouchableOpacity onPress={()=>createNote()}>
            <View style={styles.viewButtonsStyle}>
                <ButtonComp title='Save' color={'#ffff00'}/>
            </View>
            </TouchableOpacity> 
            
        </View>
    );
}
export default NewNoteScreen;
const height=Dimensions.get('screen').height;
const styles=StyleSheet.create({
    viewContianerStyle:{
        borderWidth:1,
        flex:1,
        backgroundColor:'#ffffff',
       
    },
    viewTitleStyle:{
        marginTop:20,
        marginHorizontal:10,
    },
    viewDescriptionStyle:{
        marginTop:20,
        marginHorizontal:10,
    },
    viewButtonsStyle:{
        flexDirection:'row',
        justifyContent:'space-around',
     //   backgroundColor:'red',
        marginHorizontal:10,
        marginTop:10,
        
    }

});