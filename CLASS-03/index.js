import { combineReducers, createStore } from "redux";

const initialValue = {
    cash : 100000
}

const cashDeposit = (state= initialValue, {type, payload}) =>{
    if(type === "deposit"){
        return {cash : state.cash + payload};
    }
    return state;
}

const cashWithdraw = (state= initialValue, {type, payload}) =>{
    if(type === "withdraw"){
        return {cash : state.cash - payload};
    }
    return state;
}

const cashBalance = (state= initialValue, {type, payload}) =>{
    if(type === "balance"){
        return state ;
    }
    return state;
}

const mergeReducer = combineReducers({
    deposit: cashDeposit,
    withdraw: cashWithdraw,
    balance: cashBalance,
})

const bankStore = createStore(mergeReducer)
bankStore.dispatch({type: "deposit", payload: 10})
bankStore.dispatch({type: "withdraw", payload: 10})
bankStore.dispatch({type: "balance", payload: 10})
console.log(bankStore.getState())