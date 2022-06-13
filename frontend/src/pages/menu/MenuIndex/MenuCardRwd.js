import {React, useEffect} from "react";




const MenuCardRwd = (props) => {
    
    const {setdrinkId, setcss, datas} = props
    useEffect(() => {},[setdrinkId]);
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
}
export default MenuCardRwd