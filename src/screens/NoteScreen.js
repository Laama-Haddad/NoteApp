import React from 'react';
import {ScrollView, View, Text,Alert, Button, TouchableOpacity,StyleSheet, Dimensions} from 'react-native';

import NoteTitle from '../components/NoteTitle';
import NoteDescription from '../components/NoteDescription';
import ButtonComp from '../components/ButtonComp';
import Storage from '../asyncStorage/Storage';
import myServices from '../hooks/useServices';
const NoteScreen=({route,navigation})=>{
    const {item}=route.params;
    function updateNote()
    {
        Storage.loading('token',userToken=>{
            Alert.alert(userToken);
            myServices.updateNoteFunc(userToken,result=>{
                Alert.alert('my new note',JSON.stringify(result.data));
                navigation.navigate('Notes');
                 // Storage.saving('token',result.data);
                 //Storage.loading('token',data=>{Alert.alert(data);});
            });
        });
    }
    return(
        <ScrollView style={styles.viewContianerStyle}>
            <View>
                <Text>Created Date: 1-1-2021</Text>
                <Text>id note{item.id}</Text>
                <Text> id user{item.user_id}</Text>
                <Text> created date{item.created_at}</Text>
            </View>
            <View style={styles.viewTitleStyle}>
                <NoteTitle/>
            </View>
            <View style={styles.viewDescriptionStyle}>
                <NoteDescription/>
            </View>   
            <View style={styles.viewButtonsStyle}>
                <TouchableOpacity onPress={()=>updateNote()}>
                    <ButtonComp title='Save' color={'#ffff00'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Notes')}>
                    <ButtonComp title='Cancel' color={'#ff0000'}/>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    );
}
export default NoteScreen;
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