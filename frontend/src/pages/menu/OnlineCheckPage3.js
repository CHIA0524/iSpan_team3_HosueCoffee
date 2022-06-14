import React from "react";
import { useState, useEffect } from "react";
import './scss/checkout3.scss'
import Space from "./component/Space";
import Process3 from "./Page3/Process3";
import Process3RWD from "./Page3/Process3RWD";
import PeopleNum from "./Page3/PeopleNum";
import ListB from "./Page3/ListB";
import Buyer from "./Page3/Buyer";
import Message from "./Page3/Message";
import Totalpay from "./Page3/Totalpay";





const OnlineCheckPage3 = () => {



    const [datas, setDatas ] = useState([])
        const fetchData = async()=>{
                                const response = await fetch('http://localhost:3002/menu/oder');
                                const results = await response.json();
                                                setDatas(results);
                                                console.log(results)
                        }
        useEffect(()=>{fetchData()
        },[])

                    


    return(
            <>
                <Space/>
                <Process3/>
                <Process3RWD/>
                <Space/>
                <PeopleNum datas={datas}/>
                <Buyer datas={datas}/>
                <Message/>
                <Totalpay/>
            </>




)

}

export default OnlineCheckPage3