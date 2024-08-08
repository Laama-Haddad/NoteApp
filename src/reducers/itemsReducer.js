export const itemsInitState={
    itemsList:[],
    itemsLoading:true,
    tempItemsList:[]
}

export const itemsReducer=(state,action)=>{
    if(action.type=="SET_ITEMS"){
        return{
            ...state,
            itemsList:action.payload
        }
    }
    if(action.type=='SET_ITEMSLOADING'){
        return{
            ...state,
            itemsLoading:action.payload
        }
    }
    if(action.type=='SET_TEMPITEMSLIST'){
        return{
            ...state,
            tempItemsList:action.payload
        }
    }
    return state;
}

