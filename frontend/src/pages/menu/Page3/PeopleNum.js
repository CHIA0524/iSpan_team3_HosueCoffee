import React,{useState,useEffect} from "react";






const PeopleNum = () => {
    
    const [datas, setDatas ] = useState([])
    const fetchData = async()=>{
                            const response = await fetch('http://localhost:3001/menu/oder');
                            const results = await response.json();
                            setDatas(results);
                    }
    useEffect(()=>{fetchData()
    },[])
    console.log(datas);

    if(datas.length>0){
return(
    <div className="member1">
        <div className="memberBody">
            <div className="memberNum">
                <span>取餐時間</span>
                <span>{datas[0].odertime}</span>
            </div>
            <div className="memberNum">
                <span>訂單編號:</span>
                <span>{datas[0].id}</span>
            </div>
        </div>
    </div>
)
            }
}

export default PeopleNum