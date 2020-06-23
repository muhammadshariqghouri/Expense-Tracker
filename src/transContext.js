import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransactions = [
    // { amount: 500, desc: "Cash" }

]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }
    // function removeTransaction(id) {
    //     transactions = transactions.filter(transaction => transaction.id !== id);
      
    //     updateLocalStorage();
      
    //     init();
    //   }
      

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            // removeTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}