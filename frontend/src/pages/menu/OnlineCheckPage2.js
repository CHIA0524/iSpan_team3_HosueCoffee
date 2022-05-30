import React from 'react';
import Space from './component/Space';
import Process2 from './Page2/Process2';
import Process2RWD from './Page2/Proccess2RWD';
import BodyLeft from './Page2/BodyLeft';
import BodyRight from './Page2/BodyRight';
import './checkout2.scss'



const OnlineCheckPage2 = () => {
    


    return (    


    <>
        <Space/>
        <Process2/>
        <Process2RWD/>
        <Space/>
        <div class="container together">
            <div class="superman">
                <BodyLeft/>
                <BodyRight/>
            </div>
        </div>
        <Space/>
    </>
    
)

}

export default OnlineCheckPage2