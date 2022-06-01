import {createContext, useState }from "react";
import '../styleCheckout.scss'
import Counter from '../component/Counter';
import Button from '../component/Button';




const List = (props) => {

    let[Counter1, setCounter1] = useState('')

    const datas1 = JSON.parse(localStorage.getItem('gifts'))

    console.log(datas1); 
    
    const {datas} = props

    const datasmath=datas.length;

    const datas1math=datas1.length;

    var menuCart=[];

    for( let i=0;i<datasmath;i++){ 
    
        for( let c=0;c<datas1math;c++){

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

                    const menuimg = (to.drink_name)

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
                                                <Counter />
                                            </div>
                                        </div>
                                        <div className="delete1">
                                            <Button name="刪除" herf="/"/>
                                        <div className="trash">
                                            <ion-icon name="trash-outline"></ion-icon>
                                        </div>
                                        </div>
                                        <div className="price">
                                            {/* {setpricetotal1}    */}
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
            </>   
    )    

}





export default List