import React from 'react';
import Counter from '../component/Counter';
import Button from '../component/Button';




const List = (props) => {

    // TODO計數器資料傳遞
    // let[Counter1, setCounter1] = useState('')
    // 接收localStorage上的購物車資料
    const datas1 = JSON.parse(localStorage.getItem('gifts'))
    // 接收資料庫資料
    const {datas} = props
    // 計算datas的長度
    const datasmath=datas.length
    // 計算datas1的長度
    const datas1math=datas1.length
    // 建立一個空陣列
    var menuCart=[];
    
    for( let i=0; i<datasmath; i++){ 
    
        for( let c=0; c<datas1math; c++){

            if(datas[i].id === datas1[c].id)

            { 
                var newdata = datas[i]  

                var newarr = newdata

                menuCart.push(newarr)
            } 
        }
    } 
    return(
        <> 
            {/* 印出資料 */}
            {menuCart.map((to,i)=>{
                // 設定圖片路徑
                const menuimg = (to.drink_name)

                const total = datas1[i].drinkCounter
                
                return(
                    <div className="list" key={to.id}> 
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="col-1">
                                    <img 
                                        className="listImg" 
                                        src={require('../MenuIndex/img/'+ menuimg +'.jpg')} 
                                        alt="fake"
                                    />
                                </div>
                                <div className="nameRotate">
                                    <div className="col-6 coffeeName">
                                        <span>
                                            {to.drink_name}
                                        </span>
                                    </div>
                                    <div className="d-flex col-6 amount">
                                        <div className="quantityText">
                                            數量：
                                        </div>
                                        {/* <Counter /> */}
                                        {datas1[i].drinkCounter}
                                    </div>
                                </div>
                                <div className="delete1">
                                    <Button name="刪除" herf="/"/>
                                <div className="trash">
                                    <ion-icon name="trash-outline"></ion-icon>
                                </div>
                                </div>
                                <div className="price">
                                {total*to.price}
                                </div>
                            </div>
                        </div>
                    )
                })}
        </>   
    )    

}





export default List