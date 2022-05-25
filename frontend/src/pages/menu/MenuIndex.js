import React from "react";
import "./style.scss"
import MenuAside from "./MenuIndex/MenuAside";
import MenuCard from "./MenuIndex/MenuCard";
import MenuCardRwd from "./MenuIndex/MenuCardRwd";
import Popup from "./MenuIndex/Popup";
import Pagination from "./MenuIndex/Pagination";
// import Pagination from '@mui/material/Pagination';










const MenuIndex = () => {

//    <div className="scrollBody">
//     <div className="asd">
//         <div className="scroll">
//             <span>全部</span>
//         </div>
//         <div  className="scroll">
//             <span>全部</span>
//         </div>
//         <div className="scroll">
//             <span>全部</span>
//         </div>
//         <div className="scroll">
//             <span>全部</span>
//         </div>
//         <div className="scroll">
//             <span>全部</span>
//         </div>
//     </div>
    
// </div>



return(


            <div className="bodyMenu">
                <MenuAside/>
                
                <div className="main2">
                    <div className="mainBody">
                        <MenuCard/>
                        <MenuCardRwd />
                        <Popup/>

                        <MenuCard/>
                        <MenuCardRwd />
                        <Popup/>

                        <MenuCard/>
                        <MenuCardRwd />
                        <Popup/>

                        <MenuCard/>
                        <MenuCardRwd />
                        <Popup/>
                        
                        <MenuCard/>
                        <MenuCardRwd />
                        <Popup/>

                        <MenuCard/>
                        <MenuCardRwd />
                        <Popup/>

                    </div>   
                    <Pagination />
                </div>
            </div>




    

)
    
}


export default MenuIndex