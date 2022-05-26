import React from "react";
import{useState,useEffect,} from "react";
import "../style.scss";
import Counter from "../component/Counter";






const Popup = (props) => {
    
            //從後端抓資料
    const [datas, setDatas ] = useState([])

    const fetchData = async()=>{

                        const response = await fetch('http://localhost:3002/menu');

                        const results = await response.json();
                                        setDatas(results);
                    }

    useEffect(()=>{

        fetchData();

    },[])

    
    const [drinkCounter, setdrinkCounter] = useState()

    


    const price = drinkCounter

    console.log(price)
    return(

        <>
            {/* 將資料存成變數 */}
        {datas.map((mu,i)=>{

            let drinkMame =(mu.drink_name);

            let menuContent = (mu.content);

            // 用商品id設為div的id
            let id = (mu.id)


            
            return(

                <div  id={id}  className="overlay" key={id}>
                    <div className="popup">
                        <a className="close" href="/menu">&times;</a>
                        <div className="content">
                            <div className="popoimg">
                                <img src={require('./img/'+drinkMame+'.jpg')}alt=""/>
                            </div>
                            <div className="popupNameTop">
                                <div className="popupName">
                                    <h2>{drinkMame}</h2>
                                </div>
                                <div className="popotext">
                                    <span>
                                    {menuContent}
                                    </span>
                                </div>
                                <div className="content1">
                                    <div className="content2 btn2">
                                        <div className="d-flex justify-content-end mt-4">
                                            <div className="btn PaymentLast1 mt-1">加入購物車</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content2 btn1">
                                    <Counter setdrinkCounter={setdrinkCounter}/>
                                    <div className="btn PaymentLast1 mt-1">加入購物車</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



)
}


)}


</>

);}

export default Popup