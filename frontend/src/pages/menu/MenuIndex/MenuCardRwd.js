import {React, useEffect} from "react";




const MenuCardRwd = (props) => {
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
                        const img1 = (mu.drink_name)
                        return(
                            <div className="listBodyRwd">
                                <div 
                                    className="d-flex align-items-center justify-content-between cardRwd" 
                                    type="button" 
                                    key={mu.id}  
                                    onClick={()=>{
                                        setdrinkId((mu.id))
                                        setcss({
                                            visibility: 'visible',
                                            opacity:'1'
                                        })
                                    }}
                                >
                                    <div className="listRwdImg">
                                        <img 
                                            className=" listImg"
                                            src={require('../img/'+ img1 +'.jpg')} 
                                            alt=""
                                        />
                                    </div>
                                    <div className="nameRotateRwd">
                                        <span >
                                            {mu.drink_name}
                                        </span>
                                    </div>
                                    <div className="price">
                                        ${mu.price}
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
                    <div className="listBodyRwd">
                        <div 
                            className="d-flex align-items-center justify-content-between cardRwd" 
                            type="button" 
                            key={mu.id}  
                            onClick={()=>{
                                setdrinkId((mu.id))
                                setcss({
                                    visibility: 'visible',
                                    opacity:'1'
                                })
                            }}
                        >
                            <div className="listRwdImg">
                                <img 
                                    className=" listImg"
                                    src={require('../img/'+ img1 +'.jpg')} 
                                    alt=""
                                />
                            </div>
                            <div className="nameRotateRwd">
                                <span >
                                    {mu.drink_name}
                                </span>
                            </div>
                            <div className="price">
                                ${mu.price}
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
                    <div className="listBodyRwd">
                        <div 
                            className="d-flex align-items-center justify-content-between cardRwd" 
                            type="button" 
                            key={mu.id}  
                            onClick={()=>{
                                setdrinkId((mu.id))
                                setcss({
                                    visibility: 'visible',
                                    opacity:'1'
                                })
                            }}
                        >
                            <div className="listRwdImg">
                                <img 
                                    className=" listImg"
                                    src={require('../img/'+ img1 +'.jpg')} 
                                    alt=""
                                />
                            </div>
                            <div className="nameRotateRwd">
                                <span >
                                    {mu.drink_name}
                                </span>
                            </div>
                            <div className="price">
                                ${mu.price}
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
                    <div className="listBodyRwd">
                        <div 
                            className="d-flex align-items-center justify-content-between cardRwd" 
                            type="button" 
                            key={mu.id}  
                            onClick={()=>{
                                setdrinkId((mu.id))
                                setcss({
                                    visibility: 'visible',
                                    opacity:'1'
                                })
                            }}
                        >
                            <div className="listRwdImg">
                                <img 
                                    className=" listImg"
                                    src={require('../img/'+ img1 +'.jpg')} 
                                    alt=""
                                />
                            </div>
                            <div className="nameRotateRwd">
                                <span >
                                    {mu.drink_name}
                                </span>
                            </div>
                            <div className="price">
                                ${mu.price}
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
                    <div className="listBodyRwd">
                        <div 
                            className="d-flex align-items-center justify-content-between cardRwd" 
                            type="button" 
                            key={mu.id}  
                            onClick={()=>{
                                setdrinkId((mu.id))
                                setcss({
                                    visibility: 'visible',
                                    opacity:'1'
                                })
                            }}
                        >
                            <div className="listRwdImg">
                                <img 
                                    className=" listImg"
                                    src={require('../img/'+ img1 +'.jpg')} 
                                    alt=""
                                />
                            </div>
                            <div className="nameRotateRwd">
                                <span >
                                    {mu.drink_name}
                                </span>
                            </div>
                            <div className="price">
                                ${mu.price}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>   
    ) 

}





}
export default MenuCardRwd