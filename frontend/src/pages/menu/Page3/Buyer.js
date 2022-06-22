import React,{useState,useEffect} from "react";



const Buyer = (props) => {
    const [datas, setDatas ] = useState([])
    const fetchData = async()=>{
                            const response = await fetch('http://localhost:3001/menu/oder');
                            const results = await response.json();
                            setDatas(results);
                    }
    useEffect(()=>{fetchData()
    },[])

    if(datas.length>0){
        return(
            <div className="member2">
                <div>
                    <span>購買人資訊</span>
                </div>
                <div className="memberBody2">
                    <div className="memberBodyIn">
                        <div>
                            <span>姓名:</span>
                        </div>
                        <div>
                            <span>{datas[0].orderer}</span>
                        </div>
                    </div>
                    <div className="memberBodyIn">
                        <div>
                            <span>電話:</span>
                        </div>
                        <div>
                            <span>{datas[0].phone}</span>
                        </div>
                    </div>
                    <div className="memberBodyIn">
                        <div>
                            <span>時間:</span>
                        </div>
                        <div>
                            <span>{datas[0].odertime}</span>
                        </div>
                    </div>
                </div>
            </div>
    )
        }
}

export default Buyer