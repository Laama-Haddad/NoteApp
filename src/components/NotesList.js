import React from 'react';
import {View, FlatList, Text, Alert, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Storage from '../asyncStorage/Storage';
import myServices from '../hooks/useServices';
const NotesList=({notes})=>{
    const navigation=useNavigation();
    const{colors}=useTheme();
    
     function deleteNote(idNote)
     {
         Storage.loading('token',userToken=>{
             Alert.alert(userToken);
             myServices.deleteNoteFunc(userToken,idNote,result=>{
                 Alert.alert('deleted note',JSON.stringify(result.data));
                 navigation.navigate('Notes');
                  // Storage.saving('token',result.data);
                  //Storage.loading('token',data=>{Alert.alert(data);});
             });
         });
     }
     const renderItem=(item)=>{
        return(
            <TouchableOpacity onPress={()=>{
                console.log(item);
                navigation.navigate('NoteDetails',{
                 item:item
                 });
                }}>
                   <View style={{...styles.viewItemListStyle,backgroundColor:colors.noteBackground}}>
                        <View style={styles.viewNoteStyle}>
                            <Text style={{fontWeight:'bold',fontSize:22,color:colors.noteTitle}}>{item.title}</Text>
                            <Text style={{fontWeight:'bold',fontSize:14,color:colors.noteTitle}}>{item.description}</Text>
                            <Text style={{fontWeight:'bold',fontSize:14,color:colors.noteTitle}}>{item.id}</Text>
                        </View>
                        <View style={styles.viewDeleteNoteStyle}>
                            <TouchableOpacity onPress={()=>deleteNote(item.id)}>
                               <Icon name='closecircle' size={20} color={colors.close}/>
                            </TouchableOpacity>
                        </View>
                   </View>
                  
                   </TouchableOpacity>
               )
           }
   
    return(
            <View style={styles.viewContainerStyle}>
                <FlatList
                        vertical
                        showsVerticalScrollIndicator={true}
                        data={notes}
                        renderItem={({ item }) => renderItem(item)}
                        keyExtractor = { (item,index) => index.toString() }
                />
            </View>
    );
}
export default NotesList;

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

const styles=StyleSheet.create({
    viewContainerStyle:{
     //  borderWidth:1,
    
    },
    viewItemListStyle:{
       //borderWidth:1,
        borderRadius:15,
        marginHorizontal:7,
        marginVertical:5,
       flexDirection:'row',
        height:height*0.1
    },
    viewNoteStyle:{
    //    borderWidth:1,
        width:width*0.9
    },
    viewDeleteNoteStyle:{
      //  borderWidth:1,
  
        justifyContent:'center'
        
        
    }
});