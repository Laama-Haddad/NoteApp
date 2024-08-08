
import React, { useEffect,useContext ,useState} from 'react';
import { View, StyleSheet, Image, Text,ScrollView, Alert ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import {userContext} from '../../App';
//import Storage from '../asyncStorage/Storage';
import Toggle from './Toggle';

const CustomSidebarMenu=(props)=>{
  const items = [
    {
      navOptionIcon: 'home',
      navOptionName: 'Home',
      screenToNavigate: 'Home',
    },
    {
      navOptionIcon: 'face-profile',
      navOptionName: 'Profile',
      screenToNavigate: 'Profile',
    },
    {
      navOptionIcon: 'login',
      navOptionName: 'SignIn',
      screenToNavigate: 'SignIn',
    },
    {
      navOptionIcon: 'information',
      navOptionName: 'About',
      screenToNavigate: 'About',
    },
    {
      navOptionIcon: 'logout',
      navOptionName: 'SignOut',
   //   screenToNavigate: 'SignOut',
    },
  ];
  // const {userState,userDispatch}=useContext(userContext);
  // const {userProfile,userLoading,userExisting}=userState;
  // console.log('userLoading:',userLoading);
  // console.log('userExisting:',userExisting);
  // console.log('userProfile:',userProfile);
  // const [avatarSource,setAvatarSource]=useState('');
  const sel=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping:true,
      isSelectBoth: true,
      isCamera: true,
  }).then(images => {
  images.map((i,index)=>{
  //  setAvatarSource({uri:'http://www.pngmart.com/files/10/User-Account-Person-PNG-File.png'});
    console.log('avator source', {uri: i.path, width: i.width, height: i.height, mime: i.mime});
  });
     
     
             
              
             // return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
       
     
  }).catch(e => {
      console.log(e.code);
      alert(e);
  });
  }
  function loadingUser(){
    userProfile.pic="require('../images/person.png')"; 
    console.log('pics',userProfile.pic);
    Storage.loading('user',data=>{
      if(data!=null && userLoading==true)
      {
        userDispatch({type:"SET_USERPROFILE",payload:data})  
        userDispatch({type:"SET_USERLOADING",payload:true});
        userDispatch({type:"SET_USEREXISTING",payload:true})
      }
    });// end Loading from Storage
  }//end loadingFromUser function

  useEffect(()=>{
    //loadingUser();
  },[]);

  return (
    <View style={styles.sideMenuContainer}>
      {/*Top Large Image */}
      <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{}}>
          <View style={{width:200,height:200,borderRadius:100,borderWidth:2,alignSelf:'center'}}>
        {/*
         
          //(userProfile.pic!='') ? 
        //   <Image source={
          //userProfile.pic} style={styles.sideMenuProfileIcon} /> 
                                //:
                 //                 <Image source={avatarSource} style={styles.sideMenuProfileIcon}/>
        
        <Text>{avatarSource}</Text>
    
        {avatarSource=='' ? <Image source={require('../images/person.png')} style={styles.sideMenuProfileIcon}/> 
        :  <Image source={avatarSource} style={styles.sideMenuProfileIcon}/> }                   
      */}
          </View>
        </TouchableOpacity>
        <Text style={{fontSize:20}}>
           {//(userLoading==false) ? ' ' : `${userProfile.firstName}` + ' '+ `${userProfile.lastName}`  
           }  
        </Text>
      </View>
      
      {/*Divider between Top Image and Sidebar Option*/}
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#e2e2e2',
          marginTop: 15,
        }}
      />
      {/*Setting up Navigation Options from option array using loop*/}
      <ScrollView style={{ width: '100%' }}>
        {items.map((item, key) => 
   //     (item.navOptionName!='Profile' &&  item.navOptionName!='SignOut' && userLoading==false) || ( userLoading==true && item.navOptionName!='SignIn')? 
     //   (
          
          <View
            style={{backgroundColor:global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff'},styles.viewOptionInSidebar}
            key={key}
          >
            <View style={{ marginRight: 10, marginLeft: 20 }}>
               <Icon name={item.navOptionIcon}  size={30}  color={global.currentScreenIndex === key ? 'red' : 'black'} />
            </View>
            <Text style={{fontSize: 15,color: global.currentScreenIndex === key ? 'red' : 'black' }}
                  onPress={() => {
                                  global.currentScreenIndex = key;
                                  if(item.navOptionName=='SignOut')
                                  {
                                    userDispatch({type:"SET_USERPROFILE",payload:[]})  
                                    userDispatch({type:"SET_USERLOADING",payload:false})  
                                    userDispatch({type:"SET_USEREXISTING",payload:true})  
                                    Alert.alert('sign Out');
                                  }
                                  else if(item.navOptionName=='Home')
                                  {
                                    props.navigation.navigate('HomeStack', { screen: item.screenToNavigate });
                                  }
                                  else if(item.navOptionName=='Profile')
                                  {
                                    props.navigation.navigate('HomeStack', { screen: item.screenToNavigate });
                                  }
                                  else{
                                    props.navigation.navigate('Stack', { screen: item.screenToNavigate });
                                  }      
                                  }}
            >
              {item.navOptionName}
            </Text>
          </View>
    //    ): null
    ) 
                                }
         {/*Divider in Sidebar Option*/}
      <View
        style={{
          width: '90%',
          height: 2,
          marginHorizontal:10,
          backgroundColor: '#e2e2e2',
          marginTop: 15,
        }}
      />
   
      <Toggle/>  
      </ScrollView>
    </View>
  );
}

export default CustomSidebarMenu;
 
    

const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: '100%',
    height: '100%',
    marginTop: 20,
    borderRadius: 100,
    resizeMode:'contain',
    
  },
  viewOptionInSidebar:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  }
});