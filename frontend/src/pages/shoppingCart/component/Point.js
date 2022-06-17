import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Point(props){
    //用來儲存本頁資料
    const{ ptotal, setCtotal, ctotal,mpoint,setPointla,pointla } = props
   

    const [datas, setDatas ] = useState([])
    const thismemberid=localStorage.getItem(true)
    const Ipoint=(e)=>{
       setPointla(e.target.value);
    }


      const Bpoint=()=>{
        if(Number(pointla)> mpoint){  
            if(Number(pointla)>ptotal-ctotal){
                if(ptotal-ctotal>mpoint){
                setPointla(mpoint)   

                }else{
                setPointla(ptotal-ctotal)   
            }
                
            }else{
                setPointla(mpoint)    
            }
        }else{
            if(Number(pointla)>ptotal-ctotal){
                setPointla(ptotal-ctotal)      
            }else{
                setPointla(mpoint)    
            }
        } 
    }   
             
  
    
          
            
    
             
    



return(
    <>   
        <div>
            <div class="dText">
                <p>紅利點數使用</p>
                <p class="pointText">剩餘點數 {mpoint}點(可折{mpoint}元)</p>
            </div>
            <div>
            <form >
            <input type="number"
            id="myInput"
            onChange={Ipoint} 
            value={pointla} 
            onBlur={Bpoint}
            max={mpoint}
           
            />
            {/* <button className="pBtn" type="submit" >V</button> */}
            </form>
            </div>
           
        </div>
    </>
)

}
// }
export default Point;