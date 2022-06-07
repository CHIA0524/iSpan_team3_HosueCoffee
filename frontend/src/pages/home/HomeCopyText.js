import { doc } from 'prettier';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import e from 'cors';

function HomeCopyText(props) {
    const {CP_id,thismemberid,TTdatas}=props
    // console.log(CP_id)
    // console.log(TTdatas)
    console.log(thismemberid)
    return (    
        <>
        {TTdatas.length> 0 && TTdatas.map((coupon,i)=>{
                const{id,total}=coupon;
                if(id==CP_id){
                    if(total==1){

                        return(
    
                            <div class="copyText" >
                                已領取
                            </div>
                        )
                    }else{
                        if(thismemberid){
                                
                            return(
        
                                <div class="copyText" id={CP_id} onClick={()=>{
                                    if(document.getElementById(CP_id).innerHTML=="已領"){

                                        alert("你領過了")
                                    }else{
                                        const state="未使用"
                                        alert("領取成功")
                                        document.getElementById(CP_id).innerHTML="已領"
                                    }
                                }}>
                                    未領取
                                </div>
                            )
                        }else{
                            return(
                                
                                <div class="copyText" onClick={()=>{
                                    window.location.replace("http://localhost:3000/member")
                                }}>
                                    登入領取
                                </div>
                                
                            )

                        }
                    }
                }
})}
        </>
    )
}

export default HomeCopyText