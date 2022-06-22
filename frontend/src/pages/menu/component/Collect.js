import React, { useState } from "react";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import Sweetalertfavo from "./Sweetalertfavo.js";
import DeSweetalertfavo from "./DeSweetalertfavo.js";
import { useEffect } from "react";


const Collect = (props) =>{
    const [isFav, setIsFav] = useState(false)
    const id = props.id
    const i = props.i
    const {mu} = props
    const muid = mu.id
    const datas1 = JSON.parse(localStorage.getItem('favourite'))
    //上傳我的最愛品項至localStorage
    const upFavourite = () => {
        let k = 0
        const favouriteid = {
            menuid:muid
        } 
        let favourites = localStorage.getItem("favourite") ? JSON.parse(localStorage.getItem("favourite")) : []

        for (let i = 0; i < favourites.length; i++) {
            let item = favourites[i]
            if (item.menuid === favouriteid.menuid) {
                item.menuid += favouriteid.menuid
            } else {
                k = k + 1
            }
        }
        if (k === favourites.length) {
            favourites.push(favouriteid)
        }
        localStorage.setItem("favourite", JSON.stringify(favourites))
    }
    // 取消我的最愛並從localStorage刪除
    const downFavourite = ()=>{
        const datas1 = JSON.parse(localStorage.getItem('favourite'))
        for(let i=0; i<datas1.length; i++) {
            if (id === datas1[i].menuid) {
                datas1.splice(i,1)
            }
        }
        localStorage.setItem("favourite", JSON.stringify(datas1))
    }
    
    useEffect(()=>{
        for(let i =0; i<datas1.length; i++) {
            if (datas1[i].menuid === muid) {
                setIsFav(true);
            }
        }
    },[])

    return(
        <span>
            {isFav? (<AiFillHeart
                size={20} 
                className='loveblock'
                onClick={()=>{
                    downFavourite()
                    DeSweetalertfavo()
                    setIsFav()
                    }}
            />) :
        (<AiOutlineHeart 
            size={20} 
            className='lovelight'
            onClick={()=>{
                Sweetalertfavo()
                upFavourite()
                setIsFav(true)
                }}
            />
        )}

        </span>
)


}


export default Collect