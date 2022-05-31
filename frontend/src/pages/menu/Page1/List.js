import {createContext, useState }from "react";
import '../styleCheckout.scss'
import Fakeing from '../Fakeimg150.png'
import Counter from '../component/Counter';
import Button from '../component/Button';




const List = (props) => {


    let[Counter1, setCounter1] = useState('')

    // console.log(datas);
    // const datas = useContext(MenuContext)




    return(
    <div className="list">
            <div className="d-flex align-items-center justify-content-between">
                <div className="col-3">
                    <img className="listImg" src={Fakeing} alt="fake"/>
                </div>
                <div className="nameRotate">
                    <div className="col-6 coffeeName">
                        <span>name</span>
                    </div>
                    <div className="d-flex col-6 amount">
                        <div className="quantityText">
                            數量：
                        </div>
                        <Counter/>
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
    }


export default List