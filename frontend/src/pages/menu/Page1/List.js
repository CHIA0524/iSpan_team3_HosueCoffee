import {createContext, useState }from "react";
import '../styleCheckout.scss'
import Counter from '../component/Counter';
import Button from '../component/Button';




const List = (props) => {


    let[Counter1, setCounter1] = useState('')

    // console.log(datas);
    // const datas = useContext(MenuContext)


    const datas1 = JSON.parse(localStorage.getItem('gifts'))

    const {datas} = props
        console.log(datas1);
        console.log(datas);
    // if datas1的ID = datas1的ID
    
    // if(datas1的ID = datas1的ID 就要渲染datas1的資料)
    
        // for i=0 i小於datas的id i++ 如果data1ID = datasID 渲染

    return(
        
        <>
            {/* 印出資料 */}
            {datas.map((datas,i)=>{

// console.log(datas);

    return(

    <div className="list" key={i}>
            <div className="d-flex align-items-center justify-content-between">
                <div className="col-3">
                    {/* <img className="listImg" src={require('./img/'+ datas +'.jpg')} alt="fake"/> */}
                </div>
                <div className="nameRotate">
                    <div className="col-6 coffeeName">
                        <span>{datas.drink_name}</span>
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