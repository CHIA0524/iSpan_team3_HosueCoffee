import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Point(props){
    //用來儲存本頁資料
    const{ ptotal, setCtotal, ctotal } = props
    
    


    const [datas, setDatas ] = useState([])
    const thismemberid=localStorage.getItem(true)
    const fetchData = async()=>{
        //讀取本頁資料，並寫入datas
        const response = await fetch(`http://localhost:3001/shoporder/point?member_id=${thismemberid}`);
        const results = await response.json();
        setDatas(results);
        console.log(results);
        
    }
    
  
    useEffect(()=>{
        fetchData();
    },[])

    const[pointla, setPointla]=useState()   
        const Ipoint=(e)=>{
            setPointla(e.target.value);
             }
    
             
             

    if(datas.length>0){
        console.log(datas[0]);
        const Po=datas[0];
        const{member_point, member_id}=Po
        console.log(member_point);


return(
    <>   
        <div>
            <div class="dText">
                <p>紅利點數使用</p>
                <p class="pointText">剩餘點數 {member_point}點(可折{member_point}元)</p>
            </div>
            <div>
            <input type="text"
            onChange={Ipoint}

            />
              <Link href="">
                  <button class="btn1            
                   btn-outline-secondary"      
                   type="button">✓</button>
              </Link>
            </div>
        </div>
    </>
)

}}
export default Point;