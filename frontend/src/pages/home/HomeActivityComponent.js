import { doc } from 'prettier';
import React from 'react';
import { useState, useEffect } from 'react';
import HomeCopyText from './HomeCopyText';


function HomeActivityComponent() {
    const [datas,setDatas] = useState([])
    const [TTdatas,setTTDatas] = useState([])
    const thismemberid=localStorage.getItem(true)
    const fetchData=async()=>{
        // console.log(process.env.REACT_APP_API_URL);
        const response = await fetch('http://localhost:3001/home/coupon')
        const results=await response.json();
        setDatas(results);
        var savetomb=[];
    
        
        for(var i=0;i<results.length;i++){
            // console.log(results[i].CP_id);

            const fk_CP_id=results[i].CP_id;
            const YN = await fetch(`http://localhost:3001/home/coupon/saved?fk_m_id=${thismemberid}&fk_coupon_id=${fk_CP_id}`)
            const YN1=await YN.json();
            const YNTT=YN1.total
            // console.log(YN1.total);
            savetomb.push({id:fk_CP_id,total:YNTT});
        }
        setTTDatas(savetomb);
    }
    // console.log(TTdatas)
    // console.log(datas);
    useEffect(()=>{
        fetchData();
    },[])

    // const myCopy = () => {
    //     alert('saved');
    // }

    return (
        <>
         <div className="activity" data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <h1>ACTIVITY</h1>
        {datas.length> 0 && datas.map((coupon,i)=>{
                const{CP_id,coupon_title,coupon_start_date,coupon_end_date}=coupon;
                return(

                <div className="box1">
                    <div className="coupon1">
                        <div className="couponText">
                            <h6>{coupon_title}</h6>
                            <p>活動日期<br />{coupon_start_date} to {coupon_end_date}</p>
                        </div>
                        </div>
                    <HomeCopyText CP_id={CP_id} thismemberid={thismemberid} TTdatas={TTdatas}/>
                </div>
                )})}
                </div>
    </>
    )
}

export default HomeActivityComponent