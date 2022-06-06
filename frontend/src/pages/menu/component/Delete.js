import React from 'react';
import { AiFillDelete } from "react-icons/ai";




const Delete = (props) => {

    const datas1 = JSON.parse(localStorage.getItem('gifts'))
    
    const aaaId = props.aaaId


    console.log(aaaId);
    const deletedate = () => {const data2 = datas1.splice(aaaId,1)

        localStorage.setItem("gifts", JSON.stringify(data2))
    }
    

    return( 

    <div className="delete1">
        <div 
            className='btn' 
            herf="/"
            onClick={()=>{ 
                deletedate()
            }
            }
            >
            刪除
        </div>
        <div className="trash">
            <AiFillDelete />
        </div>
    </div>
    )



}


export default Delete