import React,{Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default class Storage extends Component{
    constructor()
    {
        super();
    }//end Contructor
    
    static loading = async (key,callback) => {
        try {
          const jsonValue = await AsyncStorage.getItem(key)
          return jsonValue != null ? callback(JSON.parse(jsonValue)) : callback(null)
        } catch(e) {
          console.log('Erorr happened through loading:',e);
        }
        console.log('Done loading')
    }//end loading function

    
    static saving = async (key,value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(key, jsonValue)
        } catch(e) {
            console.log('Erorr happened through Saving',e);
        }
        console.log('Done saving')
    }//end saving function

    static deleting = async (key) => {
        try {
          await AsyncStorage.removeItem(key)
        } catch(e) {
            console.log('Erorr happened through Deleting:',e);
        }
        console.log('Done deleting')
    }//end Deleting function

    static clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
            console.log('Erorr happened through Clear AsyncStorage:',e);
        }
        console.log('Done clear storage')
    }//end clearAll function
      
    static getAllKeys = async () => {
        let keys = []
        try {
          keys = await AsyncStorage.getAllKeys()
        } catch(e) {
           console.log('Erorr happened through get All Keys from AsyncStorage:',e);
        }
        console.log(keys)
        // example console.log result:
        // ['@MyApp_user', '@MyApp_key']
      }
      

}//end Storage Class