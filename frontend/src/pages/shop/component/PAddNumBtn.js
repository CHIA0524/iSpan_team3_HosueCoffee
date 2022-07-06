import { useState } from 'react';
import "../pay1.css";

function AddNumBtn(props){
  // 數量變數
  const[amount, setAmount]= useState(1)
//   const{setfinalTotal} = props
// 計算總數量
  const {setsubTotal  }= props
  return( 
      <>
        <div className="col-3 numberDesk ">
            <p>數量：</p>
            <div className="addNum">
                <button className="NumL" onClick={() =>{if(amount>1){
                    setAmount(amount - 1)
                    setsubTotal(amount - 1)
                    }}}>-</button>
                <div>{amount}</div>
                <button className="NumR" onClick={() =>{
                    setAmount(amount + 1)
                    setsubTotal(amount + 1)}
                }>+</button>
             </div>
        </div>
            
               {/* 手機版 */}
                  <div class="number">
                     <div class="mAddNum">
                         <button className="buttonNum" onClick={() =>{if(amount>1){
                         setAmount(amount - 1)
                         }}}>-</button>
                         <div>{amount}</div>
                        <button className="buttonNum"onClick={() =>{
                         setAmount(amount + 1)
                         }} >+</button>
                     </div>
                     <h3>${499* Number(amount)}</h3>
                   </div>         
</>
)
}
export default AddNumBtn   
