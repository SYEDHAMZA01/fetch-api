import React from "react";

export const reducer =( state , active)=>{
    switch(active.type){
        case "SET_LOADING":
            return{
                ...state,
                isloading:true
            }
        case "MY_STORISE":
        return {
            ...state,
            isloading:false,
            hits: active.payload.hits,
            // nbPages: active.payload.nbPages
        }
        case "SEARCH":
            return{
                ...state,
            isloading:false,
            query: active.hamza
            }
    }
    return state;
}

export default reducer;