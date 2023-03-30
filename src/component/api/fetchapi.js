import React, { useEffect, useReducer } from "react";
import reducer from "./reduser";

const Hamza = (props) =>{

    const url = "https://hn.algolia.com/api/v1/search?"

    const initialState = {
        isloading : true,
        nbPages : 3,
        query : "css",
        hits : []
    }

    const [state , dispatch ] = useReducer( reducer , initialState );
    // console.log("hamza",state.hits.map(e=>{return e.title}));
    const fatchapi = async(api) =>{
        dispatch({type:"SET_LOADING"});
        try{
            const res = await fetch(api);
            const data = await res.json();
            dispatch({
                type : "MY_STORISE",
                payload : {
                    isloading:true,
                    hits : data.hits,
                    nbPages: data.nbPages 
                }}
            );
        } catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fatchapi(`${url}query=${state.query}`)
   },[state.query])

            console.log("fatch",state ,initialState.nbPages);

           

         const search =(val)=>{
                dispatch({
                    type:"SEARCH",
                    hamza: val
                })
         }


         if(state.isloading){
            return (
            <>
            <h1>Is Loading...</h1>
            </>)
         }

    return(
        <>
        {/* {isloading && <h1>Is Loading...</h1>} */}
        <input type={"text"} onChange={(e)=> search(e.target.value)} value={state.query}/>
        <ol>
        {state.hits.map(e =>{
            return(
                <li>{e.title}</li>
                
            )
        })}
        </ol>
        </>
    )
}

export default Hamza;