import React,{useContext} from 'react';
import {View,Text,StyleSheet,Dimensions, Alert} from 'react-native';
// import {itemsContext} from '../../../App';
// import Storage from '../../asyncStorage/Storage';
import {useNavigation} from '@react-navigation/native';
import { FAB } from 'react-native-paper';
// import ToastMessage from '../ToastMessage';



import {useTheme} from '@react-navigation/native';
const FabButton=()=>{
    // const {itemsState,itemsDispatch}=useContext(itemsContext);
    // const {itemsList,itemsLoading}=itemsState;
    const{colors}=useTheme();
    const navigation=useNavigation();
    return(
       
                <FAB
                    style={styles.fabStyle}
                  //  small={false}
               
                  icon='plus'
                    accessibilityLabel='gfhdjk'
                    theme={{colors:{accent:colors.button}}}
                    onPress={() => {
                            navigation.navigate('NewNote');
                            // Storage.deleting('cart');
                            // itemsDispatch({type:"SET_ITEMS",payload:[]});  
                            // itemsDispatch({type:"SET_ITEMSLOADING",payload:false});  
                            // itemsDispatch({type:"SET_TEMPITEMSLIST",payload:[]}) 
                            // setTimeout(()=> ToastMessage.showToast('Your Cart has deleted!!'),2000); 
                    }}
                />
            
        );
}
export default FabButton;

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;
const styles=StyleSheet.create({
    fabStyle: {
        position: 'absolute',
        margin: 5,
      //right: width/2.3,
    //    bottom: -30,
       alignSelf: 'center' 
      },
});