export const tokenInitState={
    userToken:''
   
}

export const userReducer=(state,action)=>{
    if(action.type=="SET_USERTOKEN"){
        return{
            ...state,
            userToken:action.payload
        }
    }
    return state;
}

