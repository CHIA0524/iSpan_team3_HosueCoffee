import React from 'react';
import Space from './component/Space';
import Process2 from './Page2/Process2';
import Process2RWD from './Page2/Proccess2RWD';
import BodyLeft from './Page2/BodyLeft';
import './scss/checkout2.scss'



const OnlineCheckPage2 = () => {
    
    const datas1 = JSON.parse(localStorage.getItem('updateprices'))

    return (    
        <>
            <Space/>
            <Process2/>
            <Process2RWD/>
            <Space/>
            <div class="container together">
                    <BodyLeft datas1={datas1}/>
            </div>
            <Space/>
        </>
)

}

export default OnlineCheckPage2