import { useState } from 'react';
import "../pay1.css";

function AddNumBtn(props){
  const[total, setTotal]= useState(1)
  const{setfinalTotal} = props
  return( 
      <>
        <div className="col-3 numberDesk ">
            <p>數量：</p>
            <div className="addNum">
                <button className="NumL" onClick={() =>{if(total>1){
                    setTotal(total - 1)
                    }}}>-</button>
                <div>{total}</div>
                <button className="NumR" onClick={() =>{
                    setTotal(total + 1)
                    setfinalTotal(total + 1)}
                }>+</button>
             </div>
        </div>
            
               {/* 手機版 */}
                  <div class="number">
                     <div class="mAddNum">
                         <button className="buttonNum" onClick={() =>{if(total>1){
                         setTotal(total - 1)}}}>-</button>
                         <div>{total}</div>
                        <button className="buttonNum"onClick={() =>{
                         setTotal(total + 1)}} >+</button>
                     </div>
                     <h3>$499</h3>
                   </div>         
</>
)
}
export default AddNumBtn   
