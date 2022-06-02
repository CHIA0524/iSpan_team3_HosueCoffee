import React from 'react';
import ProcessBoxBright from '../component/ProcessBoxBright';
import ProcessBoxLine from '../component/ProcessBoxLine';
import ProcessBoxDark from '../component/ProcessBoxDark';

const Process2 = () => (
    
    <div className="process">
        <div className="processIn row">
            <ProcessBoxDark name="確認商品" number="1"/>
            <ProcessBoxLine/>
            <ProcessBoxBright name="填寫資料" number="2"/>
            <ProcessBoxLine/>
            <ProcessBoxDark name="完成結帳" number="3"/>
        </div>
    </div>
);


    export default Process2