import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Point(props){
    //用來儲存本頁資料
    const{ ptotal, setCtotal, ctotal,mpoint } = props
   

    const [datas, setDatas ] = useState([])
    const thismemberid=localStorage.getItem(true)
    
    const[pointla, setPointla]=useState(0)   
    const Ipoint=(e)=>{
        const a =  Number(mpoint)     
        const b =Number(setPointla(e.target.value));
        console.log(b)
       if (b>=a){
            setPointla(a)
       }
          }
          console.log(setPointla)
    
  
    
          
            
    
             
    



return(
    <>   
        <div>
            <div class="dText">
                <p>紅利點數使用</p>
                <p class="pointText">剩餘點數 {mpoint}點(可折{mpoint}元)</p>
            </div>
            <div>
            <form >
            <input type="text"
            id="myInput"
            onChange={Ipoint} 
            value={pointla} 
           
            />
            <button className="pBtn" type="submit" >V</button>
            </form>
            </div>
           
        </div>
    </>
)

}
// }
export default Point;