import { doc } from 'prettier';
import React from 'react';
import { useState, useEffect } from 'react';


function HomeNewComponent() {
    const [datas,setDatas] = useState([])

    return (
        <>
         <div className="new" data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="1000">
                <h1>NEWS</h1>
                {datas.length> 0 && datas.map((news,i)=>{
                const{news_title,news_content}=news;

                return(
                <div className="allNew">
                    <div className="new1 row">
                        <h5 className="col">{news_title}</h5>
                        <h5 className="newTime col">{news_content}</h5>
                    </div>
                </div>
                )})}
            </div>
    </>
    )
}

export default HomeNewComponent