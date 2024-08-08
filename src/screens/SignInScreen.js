import React,{useState,useContext} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Dimensions, Image, Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Storage from '../asyncStorage/Storage';
import {userContext} from '../../App';
import myServices from '../hooks/useServices';
const SignInScreen=(props)=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [check_emailTextInputChange,setCheck_emailTextInputChange]=useState(false);
    const [check_passwordTextInputChange,setCheck_passwordTextInputChange]=useState(false);
    
    const [secureTextEntry,setSecureTextEntry]=useState(true);

    const [errorSignIn,setErrorSignIn]=useState(false);
    const [errorSignInMessage,setErrorSignInMessage]=useState('');
    const navigation=useNavigation();
    
    const height =Dimensions.get('window').height;
    const headerHeight=height/3;
    const footerHeight=height-headerHeight
    const h=footerHeight/6-30;

  //  const {userState,userDispatch}=useContext(userContext);
 //   const {userProfile,userLoading,userExisting}=userState;
    // console.log('userLoading:',userLoading);
    // console.log('userExisting:',userExisting);
    // console.log('userProfile:',userProfile);

    //For check email does not equal space
    function onTextInputChange(value){
        if(value.length!=0)
        setCheck_emailTextInputChange(true);
        else
        setCheck_emailTextInputChange(false);
    }
    //For check email does not equal space
    function onPasswordTextInputChange(value){
        if(value.length!=0)
        setCheck_passwordTextInputChange(true);
        else
        setCheck_passwordTextInputChange(false);
    }

    function onSecureTextEntry()
    {
        setSecureTextEntry(!secureTextEntry);
    }
    function onSignIn()
    {
        myServices.signInFunc(result=>{
            Storage.saving('token',result.data['access_token']);
            navigation.navigate('Notes');
            //Storage.loading('token',data=>{Alert.alert(data);});
       });
    
       
        // Storage.loading('user',data=>{
        //     console.log('user loading:',data);
        //     if(email==='' ||  password==='')
        //     {
        //         setErrorSignInMessage('Email and passwors must not space');
        //         setErrorSignIn(true);
        //     }     
        //     else if(data.email===email & data.password===password)
        //     {
        //         setErrorSignIn(false);
        //         console.log('Sign in Sucessfully');
               
        //         // userDispatch({type:"SET_USERPROFILE",payload:data})  
        //         // userDispatch({type:"SET_USERLOADING",payload:true})  
        //         // userDispatch({type:"SET_USEREXISTING",payload:true})  
        //    //     navigation.navigate('BottomTab');
        //     }else{
        //         setErrorSignIn(true);
        //         setErrorSignInMessage('invalid in password or email');
        //         console.log('Error in Sign');
        //     }
        // });
    }



    return(
        <View style={styles.viewContainerStyle}>
            <View style={styles.viewHeaderStyle}>
                <Image source={require('../images/Signin.jpg')} style={{width:'100%', height:'100%'}}/>
            </View>
            <View  style={styles.viewFooterStyle}>
                <Text style={styles.textFooterStyle}>
                    Email
                </Text>
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
                        value={email}
                        onChangeText={(text)=>{
                            onTextInputChange(text);
                            setEmail(text);
                            setErrorSignIn(false);}
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
                <Text style={[styles.textFooterStyle,{marginTop:35}]}>
                    Password
                </Text>
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
                        onChangeText={(text)=>{setPassword(text);
                            onPasswordTextInputChange(text);
                    //    setErrorSignIn(false);
                    }}
                    />
                    {check_passwordTextInputChange ?                    
                    <TouchableOpacity onPress={()=>onSecureTextEntry()}>
                        {secureTextEntry ?
                        <View style={styles.viewIconStyle}>
                            <Feather
                                name='eye-off'
                                color='grey'
                                size={20}
                            />
                        </View>
                        :
                        <View style={styles.viewIconStyle}>
                            <Feather
                                name='eye'
                                color='grey'
                                size={20}
                            />
                        </View>
                        }    
                    </TouchableOpacity>
                    : null}
               </View>
               {
                    //end View Action
                    
                }
                {errorSignIn ? <Text style={styles.textErrorStyle}>{errorSignInMessage}</Text> : null}
                <TouchableOpacity onPress={()=>onSignIn()}>
                <View style={[styles.viewSignInStyle,{marginTop:h}]}>
                    <LinearGradient
                        colors={['#ff8888','#ff2222']}
                        style={styles.linearSignStyle}
                    >
                        <Text style={[styles.textSignStyle,{color:'white'}]}>Sign in </Text>
                    </LinearGradient>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('SignUp')}}
                    style={[styles.linearSignStyle,{borderColor:'#ff0000',borderWidth:1,marginTop:15,marginBottom:h}]}
                >
                    <Text style={[styles.textSignStyle,{color:'#ff0000'}]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            {
            // end View Footer
            }
        </View>//end View Container
    );
}
export default SignInScreen;

const styles=StyleSheet.create({
    viewContainerStyle:{
        flex:1,
        backgroundColor:'#F5F6FA'
    },
    viewHeaderStyle:{
        backgroundColor:'#000000',
        flex:1,
        justifyContent:'flex-end',
        marginHorizontal:30,
        marginVertical:20
    },
    viewFooterStyle:{
        backgroundColor:'#ffffff',
        flex:2,
      
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
        borderBottomColor:'#f2f2f2',
        paddingBottom:5,
        borderBottomWidth:1
    },
    textInputStyle:{
        flex:1,
        paddingLeft:10,
        color:'#05375a'
    },
    viewIconStyle:{
        justifyContent:'center'
    },
    viewSignInStyle:{
        alignItems:'center',
        //marginTop:50
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
    textErrorStyle:{
        color:'#e57373',
        fontSize:14,
        paddingVertical:10
    }
});