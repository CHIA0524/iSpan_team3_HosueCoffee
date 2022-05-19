import React from 'react';
import './styleCheckout.scss'


const Process = () => (
    
    <div className="process">
        <div className="processIn row">
            <div className="processInBox processInBoxwhite col-2">
                <span className="processInBoxwhite check1">確認商品</span>
                <span className="processInBoxNum processInBoxwhite">1</span>
            </div>
            <div className="col-2 processInBoxNon">
                <div className="processInBoxLine"></div>
            </div>
            <div className="col-2 processInBox processInBoxwhite">
                <span className="check2">填寫資料</span> 
                <span className="processInBoxNum processInBoxwhite ">2</span>
            </div>
            <div className="col-2 processInBoxNon">
                <div className="processInBoxLine"></div>
            </div>
            <div className="col-2 processInBox processInBoxwhite">
                <span className="check2">完成結帳</span>
                <span className="processInBoxNum processInBoxwhite">3</span>
            </div>
        </div>
    </div>
);


    export default Process


