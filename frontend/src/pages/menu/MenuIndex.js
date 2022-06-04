import React from "react";
import{useState,useEffect} from "react";
import "./scss/style.scss"
import MenuAside from "./MenuIndex/MenuAside";
import MenuCard from "./MenuIndex/MenuCard";
import MenuCardRwd from "./MenuIndex/MenuCardRwd";
import Popup from "./MenuIndex/Popup";
// import Slider1 from "./component/Slider1"; TODO輪播












const MenuIndex = () => {

        // 抓到點擊菜單品項的id
        const [drinkId, setdrinkId] = useState(2)

        //控制POPUP的CSS
        const [css,setcss] = useState()

        //從後端抓資料
        const [datas, setDatas ] = useState([])

        const fetchData = async()=>{
    
                            const response = await fetch('http://localhost:3001/menu');
    
                            const results = await response.json();
                            
                                            setDatas(results);
                        }
        useEffect(()=>{
    
            fetchData();
    
            },[])
    
        return( 
                <>   
                    <div className="bodyMenu">
                        <MenuAside/>
                        <div className="main2">
                            <div className="mainBody">
                                {/* //TODO Silder待完成 // */}
                                {/* <div className="silder1"> */}
                                    {/* <Slider1/>  */}
                                {/* </div> */}
                                <MenuCard 
                                    datas={datas}
                                    setdrinkId={setdrinkId}
                                    setcss={setcss}
                                />
                                <MenuCardRwd 
                                    datas={datas}
                                    setdrinkId={setdrinkId}
                                    setcss={setcss} 
                                />
                                <Popup 
                                    datas={datas}  
                                    drinkId={drinkId} 
                                    css={css} 
                                    setcss={setcss}
                                />
                            </div>   
                        </div>
                    </div>
                </>   
        )
}       




export default MenuIndex