import React from 'react';
import {useState,useEffect} from 'react';
import Space from './component/Space';
import Process from './Page1/Process';
import ProcessRwd from './Page1/ProcessRwd';
import List from './Page1/List';
import Pay from './Page1/Pay';
import './scss/styleCheckout.scss'


const OnlineCheckPage = () => {
        let[pricetotal1, setpricetotal1] = useState('')
        const [datas, setDatas ] = useState([])
        const [totalprice, settotalprice ] = useState()
        const fetchData = async()=>{
                                const response = await fetch('http://localhost:3001/menu');
                                const results = await response.json();
                                                setDatas(results);
                        }
        useEffect(()=>{fetchData();},[])
        return(
                <>
                        <Space />
                        <Process />
                        <ProcessRwd />
                        <Space />
                        <List setpricetotal1={setpricetotal1} datas={datas} settotalprice={settotalprice}  totalprice={totalprice}/>
                        <Pay totalprice={totalprice} />
                        
                </>
        )               
}
export default OnlineCheckPage