import React,{useState, useEffect} from 'react';
import {View, Text,TouchableOpacity, StyleSheet,Alert,Image,Dimensions} from 'react-native';
import Search from '../components/Search';
import NotesList from '../components/NotesList';

import {useTheme} from '@react-navigation/native';
import Storage from '../asyncStorage/Storage';
import myServices from '../hooks/useServices';
import FabButton from  '../components/FabButton';
import AllNotesHeader from '../components/AllNotesHeader';
import Footer from '../components/Footer';
const NotesScreen=()=>{
    const{colors}=useTheme();
    const [noteslist,setNotesList]=useState([]);
    function getNotes(userId)
    {
        Storage.loading('token',userToken=>{
          
            myServices.getNotesFunc(userToken,userId,result=>{
                //Alert.alert('my notes',JSON.stringify(result.data));
                setNotesList(result.data);
             //   Alert.alert('my notes',JSON.stringify(noteslist));
                 // Storage.saving('token',result.data);
                 //Storage.loading('token',data=>{Alert.alert(data);});
            });
        });
    }
    useEffect(()=>{
        getNotes(22);
     },[]);
   

    return(
        <View style={{...styles.viewContainerStyle,backgroundColor:'#F5F6FA'}}>
            <View style={styles.viewAllNotesHeaderStyle}>
                <AllNotesHeader/>
                <View
                    style={{
                   // width: '100%',
                    height: 1,
                    backgroundColor: '#324953',
                    marginTop: 4,
                    marginHorizontal:5
                    }}
                />
            </View>
            <View style={styles.viewBodyStyle}>
            {
                (noteslist!=[]) ?   
                                    <View style={styles.viewBodyWithoutNotesStyle}>
                                         <View style={styles.viewImageStyle}>
                                            <Image source={require('../images/note.png')} style={{width:'100%', height:'100%'}}/>
                                         </View>
                                         <View style={styles.viewTextStyle}>
                                             <Text style={styles.textStyle}>Create your first Note!</Text>
                                         </View>
                                    </View>  
                                    
                                :
                                    <View style={styles.viewNotesListStyle}>
                                        <NotesList notes={noteslist}/>
                                    </View>
            }
            </View>
            <View>
                <Footer/>
            </View>
        </View>
    );
}
export default NotesScreen;
const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;
const styles=StyleSheet.create({
    viewContainerStyle:{
        flex:1,
    },
    viewAllNotesHeaderStyle:{
        //flex:1
    },
    viewBodyStyle:{
        flex:1,
    
      //  borderWidth:2
    },
    viewBodyWithoutNotesStyle:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        //borderWidth:1,
        marginVertical:height/4
    },
    viewImageStyle:{
        width:width/2.5,
        height:width/2.5,
      //  borderWidth:1
    },
    viewTextStyle:{
      //  borderWidth:1,
        marginTop:height/15,
    },
    textStyle:{
        fontSize:30,
        color:'#324953'
    },
    viewNotesListStyle:{
        //     padding:10
    },
});