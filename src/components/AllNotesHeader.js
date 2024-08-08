import React,{useState,}  from 'react';

import {View, Text, TextInput, TouchableOpacity, Dimensions,StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Feather from 'react-native-vector-icons/Feather';

const AllNotesHeader=()=>{
    const [search,setSearch]=useState(false);
    return(
        <View style={styles.viewContainerStyle}>
            <View style={styles.viewOptionsIconStyle}>
               <SimpleLineIcons name='options' size={15} color='black'/>
            </View>
            {
                (search==false) ? 
                                <View style={styles.viewTextStyle}>
                                   <Text style={styles.textStyle}> ALL NOTES</Text>
                                </View>
                               :
                                <View style={styles.viewTextInputStyle}>
                                    <TextInput
                                            placeholder="Serach..."
                                            placeholderTextColor='red'
                                        //  style={{...styles.textInputSearchStyle,color:colors.text}}
                            //              value={searchProductText}
                                            //       onChangeText={(text)=>onSearch(text)}
                                        />
                                </View>
            }
            <View style={styles.viewSearchIconStyle}>
                <Feather name='search' size={25} color='#324953'/>
            </View>      
        </View>
    );
}
export default AllNotesHeader;

const width=Dimensions.get('screen').width;
const styles=StyleSheet.create({
    viewContainerStyle:{
        width:width,
        height:70,
     //   borderWidth:3,
        flexDirection:'row'
    },
    viewOptionsIconStyle:{
    //    borderWidth:1,
        marginRight:width/3.9,
        justifyContent:'center',
        paddingLeft:5
    },
    viewTextStyle:{
     //   borderWidth:1,
        marginRight:width/3.9,
        justifyContent:'center'
    },
    textStyle:{
        color:'#EB705C',
        fontSize:30,
       
    },
    viewTextInputStyle:{
     //   borderWidth:2,
        marginRight:width/3.9
    },
    viewSearchIconStyle:{
      //  borderWidth:1,
        justifyContent:'center',
        paddingRight:5
    }
});