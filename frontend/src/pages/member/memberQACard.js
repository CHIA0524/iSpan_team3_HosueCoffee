import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
function MemberQACard(){
    
    return(
        
            <tr>
                <td className="col-3None" scope="row">283982</td>
                <td className="col-3None">商品相關</td>
                <td>咖啡豆風味</td>
                <td>未回復</td>
                <td className="tbTime col-3None">2022/02/23 19:00</td>
                <td><Link to='/member/QAcheck'><AiFillEye size={40}/></Link></td>
            </tr>
       
    )
                
}
export default MemberQACard