import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from '@react-navigation/native';
const Search=()=>{
  //  const {searchProductText,setSearchProductText}=useState('');
   const{colors}=useTheme();
    const onSearch=()=>{

    }
    return(
             <View style={{...styles.viewContainerStyle,backgroundColor:colors.background, borderColor:colors.hint}}>
                <Feather name='search' size={15} color={colors.hint}/>
                <TextInput
                    placeholder="Serach..."
                    placeholderTextColor={colors.hint}
                    style={{...styles.textInputSearchStyle,color:colors.text}}
      //              value={searchProductText}
                    //       onChangeText={(text)=>onSearch(text)}
                />
                <TouchableOpacity onPress={()=>onSearch('')} style={{paddingHorizontal:10}}>
                    <AntDesign 
                                name='close'
                                color={colors.close}
                                size={20}
                    />
                </TouchableOpacity>
            </View>
            
    );
}
export default Search;

const width=Dimensions.get('screen').width;
const styles=StyleSheet.create({
    viewContainerStyle:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:0,
        paddingHorizontal:10,                           
        borderRadius:50,      
        borderWidth:2,
       
    },
    textInputSearchStyle:{
        fontSize:18,
        flex:1,
        marginLeft:5,   
       // borderWidth:1, 
    },
});