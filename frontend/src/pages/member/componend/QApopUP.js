import { useState } from "react"

function QApopUP(){
  const [QAtitle,setQAtitle]=useState("");
  const [QAsel,setQAsel]=useState("");
  const [QAtextarea,setQAtextarea]=useState("");
  const [QATTMessage,setQATTMessage]=useState("請輸入主旨");
  const [QASLMessage,setQASLMessage]=useState("請選擇題問類型");
  const [QATEXTMessage,setQATEXTMessage]=useState("請輸入內容");
  const ans="";
  const thismemberid=localStorage.getItem("true");
  const CGQAtitle=(e)=>{
    setQAtitle(e.target.value);
  }
  const CGQAtext=(e)=>{
    setQAtextarea(e.target.value);
  }

  const OBQAtitle=()=>{
    if(QAtitle==""){
      setQATTMessage("請輸入主旨")
    }else{
      setQATTMessage("")
    }
  }
  const OBQAtext=()=>{
    if(QAtextarea){
      setQATEXTMessage("")
    }else
      setQATEXTMessage("請輸入內容")
  }
  const CGsel=()=>{
    setQAsel(document.getElementById("QAsel").value)
    setQASLMessage("")

  }

  const QAsub=async()=>{
    if(QATTMessage==""&&QASLMessage==""&&QATEXTMessage==""){
      const response = await fetch(`${process.env.REACT_APP_API_URL}/test/newQA?fk_member_id=${thismemberid}&ask_title=${QAtitle}&ask_type=${QAsel}&ask=${QAtextarea}&ans=${ans}`)
      const results=await response.json();  
      document.querySelector('.QApopupWrap').style.display="none"
      window.history.go(0)
    }if(QATTMessage!=""){
      document.querySelector(".RedTT").style.color="red";
    }if(QASLMessage!=""){
      document.querySelector(".Redsel").style.color="red";
    }if(QATEXTMessage!=""){
      document.querySelector(".RedTEXT").style.color="red";
    }
  }

  
    return(
        <>
           <div class="QApopupWrap" id="QApopupWrap" >
            <div class="QApopupBox">
            <div name="ansAddForm" class="ansAddForm d-flex flex-column text-start" >

            <div class="QApopupClose text-center" onClick={()=>{
                              document.querySelector('.QApopupWrap').style.display="none"
                            }}><i class="fa-solid fa-xmark"></i></div>

             <input type="text" name="" id="" placeholder="主旨" value={QAtitle} onChange={CGQAtitle} onBlur={OBQAtitle}></input>
             <div className="chickQA RedTT">{QATTMessage}</div>

            <select name="" id="QAsel" onChange={CGsel} >
                <option value="類型" disabled selected>類型</option>
                <option value="商品相關" >商品相關</option>
                <option value="付款相關" >付款相關</option>
                <option value="優惠活動" >優惠活動</option>
                <option value="其他" >其他</option>
            </select>
            <div className="chickQA Redsel">{QASLMessage}</div>


            <textarea name="" id="" cols="30" rows="10" value={QAtextarea} onChange={CGQAtext} onBlur={OBQAtext}></textarea>
            <div className="chickQA RedTEXT">{QATEXTMessage}</div>

                <div class="text-center">
            <button type="button" class="QAupbtn coffeeLightBtn" onClick={QAsub}>送出</button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default QApopUP