export const themeInitState={
    darkTheme:false
}

export const themeReducer=(state,action)=>{
    if(action.type=="SET_THEME"){
        return{
            ...state,
            darkTheme:action.payload
        }
    }
    return state;
}

