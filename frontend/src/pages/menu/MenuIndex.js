import React from "react";
import{useState,useEffect} from "react";
import "./style.scss"
import MenuAside from "./MenuIndex/MenuAside";
import MenuCard from "./MenuIndex/MenuCard";
import MenuCardRwd from "./MenuIndex/MenuCardRwd";
import Popup from "./MenuIndex/Popup";
// import Pagination from "./MenuIndex/Pagination";
// import Pagination from '@mui/material/Pagination';
import Siled from "./MenuIndex/Siled";









const MenuIndex = () => {
        // 抓到點擊菜單品項的id
        const [drinkId, srtdrinkId] = useState()

        //從後端抓資料
        const [datas, setDatas ] = useState([])

        const fetchData = async()=>{
    
                            const response = await fetch('http://localhost:3002/menu');
    
                            const results = await response.json();
                                            setDatas(results);
                        }
    
        useEffect(()=>{
    
            fetchData();
    
        },[])
    
        
        // const [drinkCounter, setdrinkCounter] = useState()
    
        // const drinkQuantity = drinkCounter
    
        // console.log(drinkQuantity)   //TODO  Counter的值傳到LIST 
    
    
 

        return( 
            <>   

            
            <div className="bodyMenu">

                <MenuAside/>
                
                <div className="main2">
                    <div className="mainBody">

                        <MenuCard datas={datas} srtdrinkId={srtdrinkId}/>

                        <MenuCardRwd datas={datas} />

                        <Popup datas={datas}  drinkId={drinkId}/>

                    </div>   
                    {/* <Pagination /> */}

                    <Siled/>
                </div>
            </div>
            </>   
        )






        }




export default MenuIndex