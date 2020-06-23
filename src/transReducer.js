const TransactionReducer =  ((state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION": {
            return [action.payload , ...state]
        }
        default:
            return state;

        // case "REMOVE_TRANSACTION":{
        //     return [action.payload(id)]
        // }
        // default:
        //     return id;
    }
})

export default TransactionReducer;