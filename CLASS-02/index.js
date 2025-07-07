import { combineReducers, createStore } from "redux";

const initialValue = {
    amount: 0
}

// const cashDeposit = (state = initialValue , action) =>{
//     const {type, payload} = action
//     if(type === "deposit"){
//         return {amount : state.amount + payload}
//     }
//     return state
// }

// const cashWithdraw = (state = initialValue , {type, payload}) =>{
//     if(type === "withdraw"){
//         return {amount : state.amount - payload}
//     }
//     return state
// }

const bankReducer = (state = initialValue , action) =>{
    const {type, payload} = action
    if(type === "deposit"){
        return {amount : state.amount + payload}
    }else if(type === "withdraw"){
        return {amount : state.amount - payload}
    }else if(type === "balance"){
        return state
    }
    return state
}

// const mergeReducer = combineReducers({
//     deposit : cashDeposit,
//     withdraw : cashWithdraw,
// })

const counterInitial = {
    count : 0
}

const counterReducer = (state = counterInitial, {type, payload}) => {
    switch(type){
        case "inc":
            return {count : state.count + 1}
        case "dec":
            return {count : state.count = 1}
        default:
            return state;
    }
}

const mergeReducer = combineReducers({
    amount : bankReducer,
    count : counterReducer,
})

const bankStore = createStore(mergeReducer)

bankStore.dispatch({type: "deposit", payload:1000})
bankStore.dispatch({type: "inc"})
bankStore.dispatch({type: "dec"})

// bankStore.dispatch({type: "deposit", payload:200})
// bankStore.dispatch({type: "withdraw", payload:200})
// bankStore.dispatch({type: "balance"})
console.log(bankStore.getState())