import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./scss/style.scss"
import MenuAside from "./MenuIndex/MenuAside";
import MenuCard from "./MenuIndex/MenuCard";
import MenuCardRwd from "./MenuIndex/MenuCardRwd";
import Popup from "./MenuIndex/Popup";
import { BiCoffee } from "react-icons/bi";

const MenuTypeIce = () => {
        // 抓到點擊菜單品項的id
        const [drinkId, setdrinkId] = useState(300002)
        //控制POPUP的CSS
        const [css,setcss] = useState()
        const datas1 = JSON.parse(localStorage.getItem('gifts'))
        //從後端抓資料
        const [datas, setDatas ] = useState([])
        const fetchData = async()=>{
            const response = await fetch(`${process.env.REACT_APP_API_URL}/menu`);
            const results = await response.json();         
                            setDatas(results);
                        }
        useEffect(()=>{fetchData();},[])
        const [icedatas, seticedatas] = useState([])
        const fetctodyhData = async()=>{
                            const response = await fetch(`${process.env.REACT_APP_API_URL}/menu/icecoffee`);
                            const results = await response.json();         
                            seticedatas(results);
                        }
        useEffect(()=>{fetctodyhData();},[])
        //console.log(icedatas);
        return( 
            <>   
                <div className="bodyMenu">
                <MenuAside/>
                    <div className="main2">
                        <div className="mainBody">
                            <MenuCard 
                                datas={datas}
                                icedatas={icedatas}
                                setdrinkId={setdrinkId}
                                setcss={setcss}
                            />
                            <MenuCardRwd 
                                datas={datas}
                                icedatas={icedatas}
                                setdrinkId={setdrinkId}
                                setcss={setcss} 
                            />
                            <Popup 
                                datas={datas}
                                icedatas={icedatas}  
                                drinkId={drinkId} 
                                css={css} 
                                setcss={setcss}
                            />
                        </div>   
                    </div>
                    <Link 
                        to='/OnlineCheckPage' 
                        className="shopping" 
                        onClick={()=>{
                            if(datas1 == null ){
                                localStorage.setItem("gifts", JSON.stringify([]))
                            }
                        }}
                    >
                        <BiCoffee size={60}/>
                    </Link> 
                </div>
                
            </>   
        )
}       

export default MenuTypeIce