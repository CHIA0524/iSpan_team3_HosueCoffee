import React,{useEffect, useState} from 'react';

function Areastore(props){
    const{areastore,setAstore}=props
    const CGAreaS=async()=>{
        setAstore(document.getElementById("select-profession-store").value)
        console.log(document.getElementById("select-profession-store").value)
        
    }
    
    console.log(areastore)
    return(
        <>
            <select name="select-profession" id="select-profession-store" onChange={CGAreaS}>
        {areastore.length> 0 && areastore.map((areaStoreA,i)=>{
            const{store_name}=areaStoreA;
            return(
                    <option value={store_name} >{store_name}</option>
            )})}
                </select>
        </>
    )
}
export default Areastore