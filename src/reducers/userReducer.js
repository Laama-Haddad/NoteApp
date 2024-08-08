export const userInitState={
    userProfile:[],
    userLoading:false,
    userExisting:false
}

export const userReducer=(state,action)=>{
    if(action.type=="SET_USERPROFILE"){
        return{
            ...state,
            userProfile:action.payload
        }
    }
    if(action.type=='SET_USERLOADING'){
        return{
            ...state,
            userLoading:action.payload
        }
    }
    if(action.type=='SET_USEREXISTING'){
        return{
            ...state,
            userExisting:action.payload
        }
    }
    return state;
}

