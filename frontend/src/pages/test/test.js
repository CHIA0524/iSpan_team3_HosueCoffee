import { Checkbox } from "@mui/material";
import { useState } from "react";
import './test.css';
function Test(){
    const [account,setAccount]=useState();
    const [mail,setMail]=useState();
    const [password,setPassword]=useState();
    const [account2,setAccount2]=useState();
    const [mail2,setMail2]=useState();
    const [password2,setPassword2]=useState();
    const changeAC=(e)=>{
        setAccount(e.target.value);
      }
    const changeM=(e)=>{
        setMail(e.target.value);
      }
    const changeP=(e)=>{
        setPassword(e.target.value);
      }
    const changeAC2=(e)=>{
        setAccount2(e.target.value);
      }
    const changeM2=(e)=>{
        setMail2(e.target.value);
      }
    const changeP2=(e)=>{
        setPassword2(e.target.value);
      }
      const CHBOX=()=>{
          const a=document.querySelector('.CHBX').checked
          console.log(a);
          if(a==true){
            document.querySelector(".downINT").style.display="none"
            setAccount2(account)
            setMail2(mail)
            setPassword2(password)
          }else{
            document.querySelector(".downINT").style.display="block"
            setAccount2("")
            setMail2("")
            setPassword2("")
          }
      }

    return(
        <>  <form>
            <input className="INT888" type="text" placeholder="&ensp;會員帳號" name='會員帳號' value={account} onChange={changeAC}></input>
            <br></br>

            <input className="INT888" type="text" placeholder="&ensp;會員信箱" name='會員信箱' value={mail} onChange={changeM}></input>
            <br></br>
            <input className="INT888" type="text" placeholder="&ensp;會員密碼" name='會員密碼' value={password} onChange={changeP}></input>
            <div className="a8787">
            <input type="Checkbox" className="CHBX" onClick={CHBOX}></input><div className="CHBX2" >與上方相同</div>
            <br></br>
            </div>
            
            <div className="downINT">
            <input className="INT888" type="text" placeholder="&ensp;會員帳號2" name='會員帳號2' value={account2} onChange={changeAC2}></input>
            <br></br>

            <input className="INT888" type="text" placeholder="&ensp;會員信箱2" name='會員信箱2' value={mail2} onChange={changeM2}></input>
            <br></br>

            <input className="INT888" type="text" placeholder="&ensp;會員密碼2" name='會員密碼2' value={password2} onChange={changeP2}></input>
            </div>
            <button>送出底下資料</button>
            </form>
        
        </>
    )

}
export default Test