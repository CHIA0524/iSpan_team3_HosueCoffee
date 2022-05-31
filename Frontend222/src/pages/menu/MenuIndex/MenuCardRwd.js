import React from "react";
import{useState,useEffect} from "react";
import "../style.scss"



const MenuCardRwd = () => {

    const [datas, setDatas ] = useState([])

    const fetchData = async()=>{

                        const response = await fetch('http://localhost:3002/menu');

                        const results = await response.json();
                        
                                        setDatas(results);
                    }

    useEffect(()=>{

        fetchData();

    },[])


    return(

        <>

        {datas.map((mu,i)=>{

            let drinkMame =(mu.drink_name);

            let price = (mu.price);



    return(

            <div className="listBody"  key={i}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="col-3">
                        <img className=" listImg" src={require('./img/'+drinkMame+'.jpg')} alt=""/>
                    </div>
                    <div className="nameRotate">
                        <div className="col-6 coffeeName">
                            <span>{drinkMame}</span>
                        </div>
                    </div>
                    <div className="price">
                    {'$'+price}
                    </div>
                </div>
            </div>

)


})}
</>

);
}
export default MenuCardRwd