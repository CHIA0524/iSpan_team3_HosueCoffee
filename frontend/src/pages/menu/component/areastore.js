import React,{useEffect, useState} from 'react';



function Areastore (props) {
    const{areastore,setAstore}=props
    const CGAreaS=async()=>{
        setAstore(document.getElementById("select-profession-store").value)
    }
    
    return(
        <>
            <select 
                className='dropdownbig' 
                id="select-profession-store" 
                name="select-profession" 
                onChange={CGAreaS}
            >
                {areastore.length> 0 && areastore.map((areaStoreA,i)=>{
                    const{store_name}=areaStoreA
                    return(
                        <option value={store_name} >{store_name}</option>
                    )
                })}
            </select>
        </>
    )
}

export default Areastore