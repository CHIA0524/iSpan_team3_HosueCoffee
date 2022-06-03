import React from "react";
import ProcessBoxBright from '../component/ProcessBoxBright';
import ProcessBoxLine from '../component/ProcessBoxLine';
import ProcessBoxDark from '../component/ProcessBoxDark';







const Process3 = () => (


        <div className="process">
            <div className="processIn row">
            <ProcessBoxDark name="確認商品" number="1"/>
            <ProcessBoxLine/>
            <ProcessBoxDark name="填寫資料" number="2"/>
            <ProcessBoxLine/>
            <ProcessBoxBright name="完成結帳" number="3"/>
            </div>
        </div>




)

export default Process3