import { combineReducers, createStore } from "redux";

const initialValue = {
    cash : 5000
}

// const cashDeposit = (state = initialValue, {type, payload}) =>{
//     if(type === "Deposit"){      
//         return {cash : state.cash + payload};
//     }
//     return state
// }


// const withDraw = (state = initialValue, {type, payload}) =>{
//     if(type === "draw"){
//          if(state.cash < payload){
//             return "You are poor"
//         }else{
//             return {cash : state.cash - payload};
//         }
//     }
//     return state
// }


// const showBalance = (state = initialValue, {type, payload}) =>{
//     if(type === "Balance"){
//         return state;
//     }
//     return state
// }


const ProductCart = (state = [], {type, payload}) => {
    switch(type){
        case "AddProduct":
            return [...state, payload];
        case "DeleteProduct":
            return state.filter((item)=> item.id !== payload.id);
        case "ShowAll":
            return state
    }
}


// const mergeReducer = combineReducers({
//     Deposit : cashDeposit,
//     draw : withDraw,
//     Balance : showBalance,
// })


const bankStore = createStore(ProductCart)
// bankStore.dispatch({type: "Deposit", payload: 10})
// bankStore.dispatch({type: "draw", payload: 5})
// bankStore.dispatch({type: "balance"})

console.log(bankStore.getState())