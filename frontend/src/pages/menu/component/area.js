import React,{useEffect, useState} from 'react';
import Areastore from './areastore';

function Area(props){
    const{area,setArea,areastore,setAreastore,astore,setAstore}=props
    const [datas,setDatas] = useState([])

    const fetchData=async()=>{
        const response = await fetch(`http://localhost:3001/menu/area`)
        const results=await response.json();
        setDatas(results);
    }
    const CGArea=async()=>{
        setArea(document.getElementById("select-profession").value)
        const area2=(document.getElementById("select-profession").value)
        const response = await fetch(`http://localhost:3001/menu/areastore?city=${area2}`)
        const results=await response.json();
        setAreastore(results);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
            <div className="Promo1">
                <div className="Payment">
                    <p>選擇地區</p>
                    <div className="sel sel--black-panther popo2">
                        <select 
                            className="dropdownbig"
                            id="select-profession" 
                            name="select-profession" 
                            onChange={CGArea} 
                        >
                            <option value="請選擇">請選擇</option>
                        {datas.length> 0 && datas.map((area,i)=>{
                            const{city}=area;
                            return(
                                <option value={city}>{city}</option>
                            )
                        })}
                        </select>
                    </div>
                    <hr className="rule"/>
                </div>
            </div>
            <div className="Promo1">
                <div className="Payment">
                    <p>選擇門市</p>
                        <Areastore 
                            area={area} 
                            setArea={setArea} 
                            areastore={areastore} 
                            setAreastore={setAreastore} 
                            astore={astore} 
                            setAstore={setAstore}
                        />
                    <hr className="rule"/>
                </div>
            </div>
        </>
    )
}
export default Area