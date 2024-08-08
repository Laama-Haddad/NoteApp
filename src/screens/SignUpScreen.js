import React,{useEffect,useState,useContext} from 'react';
import {
        View,
        Text,
        Image,
        TextInput,
        TouchableOpacity,
        StyleSheet,
        Alert,
        PermissionsAndroid,
    } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import myServices from '../hooks/useServices';
import Storage from '../asyncStorage/Storage';
//import {userContext} from '../../App';

const SignUpScreen=(props)=>{
     const [firstName,setFirstName]=useState('');
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     const [confirmPassword,setConfirmPassword]=useState('');
  

    const [check_firstNameTextInputChange,setCheck_firstNameTextInputChange]=useState(false);
    const [check_emailTextInputChange,setCheck_emailTextInputChange]=useState(false);
    const [secureTextEntry,setSecureTextEntry]=useState(true);
    const [secureTextEntry_confirm,setSecureTextEntry_confirm]=useState(true);

    // const {userState,userDispatch}=useContext(userContext);
    // const {userProfile,userLoading}=userState;
    // console.log('userLoading:',userLoading);
    // console.log('userProfile:',userProfile);
      
    

    function onFirstNameTextInputChange(value){
        if(value.length!=0)
        setCheck_firstNameTextInputChange(true);
        else
        setCheck_firstNameTextInputChange(false);
    }
    function onLastNameTextInputChange(value){
        if(value.length!=0)
        setCheck_lastNameTextInputChange(true);
        else
        setCheck_lastNameTextInputChange(false);
    }
    function onEmailTextInputChange(value){
        if(value.length!=0)
        setCheck_emailTextInputChange(true);
        else
        setCheck_emailTextInputChange(false);
    }
    function onLocationTextInputChange(value){
        if(value.length!=0)
        setCheck_locationTextInputChange(true);
        else
        setCheck_locationTextInputChange(false);
    }
    function onPhoneTextInputChange(value){
        if(value.length!=0)
        setCheck_phoneTextInputChange(true);
        else
        setCheck_phoneTextInputChange(false);
    }

    function onSecureTextEntry()
    {
        setSecureTextEntry(!secureTextEntry);
    }
    function onSecureTextEntry_confirm()
    {
        setSecureTextEntry_confirm(!secureTextEntry_confirm);
    }

    function onSignUp()
    {
        // let userData={
        //     firstName:firstName,
        //     email:email,
        //     password:password,
        //     confirmPassword:confirmPassword,
        // }
        myServices.signUpFunc(result=>{
            Storage.saving('token',result.data['access_token']);
           });
        // Storage.saving('user',userData);
        // userDispatch({type:"SET_USERPROFILE",payload:userData})  
        // userDispatch({type:"SET_USERLOADING",payload:true});
        // userDispatch({type:"SET_USEREXISTING",payload:true})   
        // props.navigation.navigate('Stack', { screen:'BottomTab' });

    }
    
    return(

        <View style={styles.viewContainerStyle}>
            <View style={{margin:29}}>
                <Text style={{fontSize:30}}>Create an account...</Text>
            </View>
            <View style={styles.viewActionStyle}>
                    <View style={styles.viewIconStyle}>
                        <FontAwesome
                            name='user-o'
                            size={20}
                            color='#ff3333'
                        />
                    </View>
                    <TextInput
                        placeholder='Your First Name...'
                        style={styles.textInputStyle}
                        onChangeText={(text)=>{
                            onFirstNameTextInputChange(text);
                            setFirstName(text);}
                        }
                    />
                    {check_firstNameTextInputChange ?
                    <Animatable.View 
                                    style={styles.viewIconStyle}
                                    animation='bounceIn'                
                    >
                        <Feather
                            name='check-circle'
                            color='green'
                            size={20}
                        />
                    </Animatable.View>
                    :null}
                </View>
               
                <View style={styles.viewActionStyle}>
                    <View style={styles.viewIconStyle}>
                        <Feather
                            name='mail'
                            size={20}
                            color='#ff3333'
                        />
                    </View>
                    <TextInput
                        placeholder='Your email...'
                        style={styles.textInputStyle}
                        onChangeText={(text)=>{
                            onEmailTextInputChange(text);
                            setEmail(text);}
                        }
                    />
                    {check_emailTextInputChange ?
                    <Animatable.View 
                                    style={styles.viewIconStyle}
                                    animation='bounceIn'                
                    >
                        <Feather
                            name='check-circle'
                            color='green'
                            size={20}
                        />
                    </Animatable.View>
                    :null}
                </View>
                <View style={styles.viewActionStyle}>
                    <View style={styles.viewIconStyle}>
                        <Feather
                            name='lock'
                            size={20}
                            color='#ff3333'
                        />
                    </View>
                    <TextInput
                        placeholder='Your Password...'
                        style={styles.textInputStyle}
                        secureTextEntry={secureTextEntry}
                        value={password}
                        onChangeText={(text)=>setPassword(text)}
                    />
                    {secureTextEntry ?
                    <TouchableOpacity onPress={()=>onSecureTextEntry()}>
                    <View style={styles.viewIconStyle}>
                        <Feather
                            name='eye-off'
                            color='grey'
                            size={20}
                        />
                    </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=>onSecureTextEntry()}>
                    <View style={styles.viewIconStyle}>
                        <Feather
                            name='eye'
                            color='grey'
                            size={20}
                        />
                    </View>
                    </TouchableOpacity>
                    }   
                </View>
               {
                    //end View Action
                }
                <View style={styles.viewActionStyle}>
                    <View style={styles.viewIconStyle}>
                        <Feather
                            name='lock'
                            size={20}
                            color='#ff3333'
                        />
                    </View>
                    <TextInput
                        placeholder='Confirm Password'
                        style={styles.textInputStyle}
                        secureTextEntry={secureTextEntry_confirm}
                        value={confirmPassword}
                        onChangeText={(text)=>setConfirmPassword(text)}
                    />
                    {secureTextEntry_confirm ?
                    <TouchableOpacity onPress={()=>onSecureTextEntry_confirm()}>
                    <View style={styles.viewIconStyle}>
                        <Feather
                            name='eye-off'
                            color='grey'
                            size={20}
                        />
                    </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=>onSecureTextEntry_confirm()}>
                    <View style={styles.viewIconStyle}>
                        <Feather
                            name='eye'
                            color='grey'
                            size={20}
                        />
                    </View>
                    </TouchableOpacity>
                    }   
                </View>
               {
                    //end View Action
                }   
                              
                <View style={styles.viewPrivateStyle}>
                    <Text style={styles.textPrivateStyle}>
                        By Signing up you agree to our
                    </Text>
                    <Text style={[styles.textPrivate,{fontWeight:'bold'}]}>
                        {" "}
                        Terms of Services
                    </Text>
                    <Text style={styles.textPrivateStyle}>
                        {" "}
                        and
                    </Text>
                    <Text style={[styles.textPrivateStyle,{fontWeight:'bold'}]}>
                        {" "}
                        Privacy Policy  
                    </Text>
                </View>    
                <TouchableOpacity onPress={()=>onSignUp()}>
                <View style={styles.viewSignUpStyle}>
                    <LinearGradient
                        colors={['#aaee00','#ffffff']}
                        style={styles.linearSignStyle}
                    >
                        <Text style={[styles.textSignStyle,{color:'black'}]}>Sign Up</Text>
                    </LinearGradient>
                </View>
                </TouchableOpacity>
            
            
            {
            // end View Footer
            }
        </View>

    );
}
export default SignUpScreen;

const styles=StyleSheet.create({
    viewContainerStyle:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    viewHeaderStyle:{
       // backgroundColor:'#000000',
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingVertical:50
    },
    viewFooterStyle:{
        backgroundColor:'#ffffff',
        flex:3,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    textHeaderStyle:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
    textFooterStyle:{
        color:'#05375a',
        fontSize:18
    },
    viewActionStyle:{
        flexDirection:'row',
        marginTop:10,
        borderBottomColor:'black',
        paddingBottom:2,
        borderBottomWidth:1
    },
    textInputStyle:{
        flex:1,
        paddingLeft:10,
        color:'#05375a',
        
    },
    viewIconStyle:{
        justifyContent:'center'
    },
    viewSignUpStyle:{
        alignItems:'center',
        marginTop:15,
        marginHorizontal:40
    },
    linearSignStyle:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textSignStyle:{
        fontSize:19,
        fontWeight:'bold',
    },
    viewPrivateStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:40
    },
    textPrivateStyle:{
        color:'grey'
    }
});