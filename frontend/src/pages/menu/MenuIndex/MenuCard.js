import {React, useEffect, useState} from "react";
import Collect from "../component/Collect";


const MenuCard = (props) => {
    // 傳遞點擊id    // 接收父層資料
    const {setdrinkId, setcss, datas, favdatas, todaydatas, icedatas, hotdatas} = props

    const localFavDatas = JSON.parse(localStorage.getItem('favourite'))
    
    const thisURL=window.location.href
    // 異步回調
    useEffect(() => {},[setdrinkId])


    if(thisURL=='http://localhost:3000/onlinemenu'){
    return(
        <>
            {/* 印出資料 */}
            {datas.map((mu,i)=>{
                // 儲存圖片路徑
                const img1 = (mu.url)
                return(
                    <div 
                        className="card drinkCard" 
                        type="button" 
                        key={mu.id}  
                    >
                        <div>
                            <div 
                                className="imgdiv"
                                onClick={()=>{
                                    setdrinkId(mu.id)
                                    setcss({
                                        visibility: 'visible',
                                        opacity:'1'
                                    })
                                }}
                            >
                                <img src={require('../img/'+ img1 +'.jpg')} alt="" />
                            </div>
                            <div className="cardpa">
                                <span>{mu.drink_name}</span>
                                <Collect id={(mu.id)} i={i} mu={mu}/>
                            </div>
                            <div 
                                className="d-flex justify-content-between cardpading"
                                onClick={()=>{
                                setdrinkId((mu.id))
                                setcss({
                                    visibility: 'visible',
                                    opacity:'1'
                                })
                            }}
                            >
                                <span className="d-flex align-items-center">
                                    ${mu.price}
                                </span>
                            </div>
                        </div>    
                    </div>
                )
            })}
        </>   
    )  
}else if(thisURL=='http://localhost:3000/favorite'){
    return(
        <>
            {/* 印出資料 */}
            {favdatas.map((mu,i)=>{
                // 儲存圖片路徑
                const img1 = (mu.drink_name)
                return(
                    <div 
                        className="card drinkCard" 
                        type="button" 
                        key={mu.id}  
                    >
                        <div>
                            <div 
                                className="imgdiv"
                                onClick={()=>{
                                    setdrinkId((mu.id))
                                    setcss({
                                        visibility: 'visible',
                                        opacity:'1'
                                    })
                                }}
                            >
                                <img src={require('../img/'+ img1 +'.jpg')} alt="" />
                            </div>
                            <div className="cardpa">
                                <span>{mu.drink_name}</span>
                                <Collect id={(mu.id)} i={i} mu={mu}/>
                            </div>
                            <div 
                                className="d-flex justify-content-between cardpading"
                                onClick={()=>{
                                setdrinkId((mu.id))
                                setcss({
                                    visibility: 'visible',
                                    opacity:'1'
                                })
                            }}
                            >
                                <span className="d-flex align-items-center">
                                    ${mu.price}
                                </span>
                            </div>
                        </div>    
                    </div>
                )
            })}
        </>   
    )  
}else if(thisURL=='http://localhost:3000/MenuTypeToday'){
    return(
        <>
            {/* 印出資料 */}
            {todaydatas.map((mu,i)=>{
                // 儲存圖片路徑
                const img1 = (mu.drink_name)
                return(
                    <div 
                        className="card drinkCard" 
                        type="button" 
                        key={mu.id}  
                    >
                        <div>
                            <div 
                                className="imgdiv"
                                onClick={()=>{
                                    setdrinkId((mu.id))
                                    setcss({
                                        visibility: 'visible',
                                        opacity:'1'
                                    })
                                }}
                            >
                                <img src={require('../img/'+ img1 +'.jpg')} alt="" />
                            </div>
                            <div className="cardpa">
                                <span>{mu.drink_name}</span>
                                <Collect id={(mu.id)} i={i} mu={mu}/>
                            </div>
                            <div 
                                className="d-flex justify-content-between cardpading"
                                onClick={()=>{
                                setdrinkId((mu.id))
                                setcss({
                                    visibility: 'visible',
                                    opacity:'1'
                                })
                            }}
                            >
                                <span className="d-flex align-items-center">
                                    ${mu.price}
                                </span>
                            </div>
                        </div>    
                    </div>
                )
            })}
        </>   
    )  



}else if(thisURL=='http://localhost:3000/MenuTypeIce'){
    return(
        <>
            {/* 印出資料 */}
            {icedatas.map((mu,i)=>{
                // 儲存圖片路徑
                const img1 = (mu.drink_name)
                return(
                    <div 
                        className="card drinkCard" 
                        type="button" 
                        key={mu.id}  
                    >
                        <div>
                            <div 
                                className="imgdiv"
                                onClick={()=>{
                                    setdrinkId((mu.id))
                                    setcss({
                                        visibility: 'visible',
                                        opacity:'1'
                                    })
                                }}
                            >
                                <img src={require('../img/'+ img1 +'.jpg')} alt="" />
                            </div>
                            <div className="cardpa">
                                <span>{mu.drink_name}</span>
                                <Collect id={(mu.id)} i={i} mu={mu}/>
                            </div>
                            <div 
                                className="d-flex justify-content-between cardpading"
                                onClick={()=>{
                                setdrinkId((mu.id))
                                setcss({
                                    visibility: 'visible',
                                    opacity:'1'
                                })
                            }}
                            >
                                <span className="d-flex align-items-center">
                                    ${mu.price}
                                </span>
                            </div>
                        </div>    
                    </div>
                )
            })}
        </>   
    )  



}else if(thisURL=='http://localhost:3000/MenuTypeHot'){
    return(
        <>
            {/* 印出資料 */}
            {hotdatas.map((mu,i)=>{
                // 儲存圖片路徑
                const img1 = (mu.drink_name)
                return(
                    <div 
                        className="card drinkCard" 
                        type="button" 
                        key={mu.id}  
                    >
                        <div>
                            <div 
                                className="imgdiv"
                                onClick={()=>{
                                    setdrinkId((mu.id))
                                    setcss({
                                        visibility: 'visible',
                                        opacity:'1'
                                    })
                                }}
                            >
                                <img src={require('../img/'+ img1 +'.jpg')} alt="" />
                            </div>
                            <div className="cardpa">
                                <span>{mu.drink_name}</span>
                                <Collect id={(mu.id)} i={i} mu={mu}/>
                            </div>
                            <div 
                                className="d-flex justify-content-between cardpading"
                                onClick={()=>{
                                setdrinkId((mu.id))
                                setcss({
                                    visibility: 'visible',
                                    opacity:'1'
                                })
                            }}
                            >
                                <span className="d-flex align-items-center">
                                    ${mu.price}
                                </span>
                            </div>
                        </div>    
                    </div>
                )
            })}
        </>   
    )  


}

}





export default MenuCard