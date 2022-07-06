import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './pay2.css';
import Steps2 from './component/Steps2';
import Pay3 from './Pay3';





function Pay2(){

   const [name,setName]=useState()
   const [phone,setPhone]=useState()
   const [email,setEmail]=useState()
   const [address,setAddress]=useState()
   const [Rname,setRName]=useState()
   const [Rphone,setRPhone]=useState()
   const [Remail,setREmail]=useState()
   const [Raddress,setRAddress]=useState()

   //顯示錯誤訊息
   const [nameMessage,setNameMessage]=useState()
   const [phoneMessage,setPhoneMessage]=useState()
   const [emailMessage,setEmailMessage]=useState()
   const [addressMessage,setAddressMessage]=useState()

   const [RnameMessage,setRNameMessage]=useState()
   const [RphoneMessage,setRPhoneMessage]=useState()
   const [RemailMessage,setREmailMessage]=useState()
   const [RaddressMessage,setRAddressMessage]=useState()


   const Iname=(e)=>{
    setName(e.target.value);
     }
   const Iphone=(e)=>{
    setPhone(e.target.value);
     }
   const Iemail=(e)=>{
    setEmail(e.target.value);
     }
   const Iaddress=(e)=>{
    setAddress(e.target.value);
     }
    const RIname=(e)=>{
    setRName(e.target.value);
    }
    const RIphone=(e)=>{
    setRPhone(e.target.value);
     }
    const RIemail=(e)=>{
    setREmail(e.target.value);
    }
    const RIaddress=(e)=>{
    setRAddress(e.target.value);
    }   
        // //console.log.log(name)
      
        //驗證 
        const Wrongname=()=>{
            if(!name){
                setNameMessage("請輸入姓名")
            }else{
                setNameMessage("")
            }
        }   
        const Wrongphone=()=>{
            if(!phone){
                setPhoneMessage("請輸入手機")
            }else{
                setPhoneMessage("")
            }
        }  
        const Wrongemail=()=>{
            if(!email){
                setEmailMessage("請輸入信箱")
            }else{
                setEmailMessage("")
            }
        }
        const Wrongaddress=()=>{
            if(!address){
                setAddressMessage("請輸入地址")
            }else{
                setAddressMessage("")
            }
        }
        const WrongRname=()=>{
            if(!Rname){
                setRNameMessage("請輸入姓名")
            }else{
                setRNameMessage("")
            }
        }   
        const WrongRphone=()=>{
            if(!Rphone){
                setRPhoneMessage("請輸入手機")
            }else{
                setRPhoneMessage("")
            }
        }  
        const WrongRemail=()=>{
            if(!Remail){
                setREmailMessage("請輸入信箱")
            }else{
                setREmailMessage("")
            }
        }
        const WrongRaddress=()=>{
            if(!Raddress){
                setRAddressMessage("請輸入地址")
            }else{
                setRAddressMessage("")
            }
        }
    

       //相同運送地址 
       const shipSame = ()=>{
        const a=document.querySelector('.sameAddress').checked
        
        //console.log.log(a)
        if(a==true){
         document.querySelector('.receiverInfo').style.display="none"
         setRName(name)
         setRPhone(phone)
         setREmail(email)
         setRAddress(address)
        }else{
            document.querySelector('.receiverInfo').style.display="block"
            setRName("")
            setRPhone("")
            setREmail("")
            setRAddress("")
        }
         }
    
         //運費選擇
    const [shipgopay,setShipgopay]=useState("請選擇運送方式");
    const shipprice = ()=>{
     const b = document.querySelector('.postoffice').checked
     //console.log.log(b)
     if(b==true){
        // document.getElementById("sprice").innerHTML = 80
        setShipgopay(80)
    }
    else{
        // document.getElementById("sprice").innerHTML = 100
        setShipgopay(100)
     }
      }     
   


  return(
      <>
       <div className="container main">
       <Steps2 />
          <form
        //    onSubmit={handleSubmit}
        //    onInvalid={handleInvalid}
        //    onChange={handleFormChange}
        >
              <div className="payInfoStart detail">
                  <div className="payInfoFill">
                      <div className="questInfo">
                          <div>付款方式</div>
                          <div className="radioS">
                              <div className="form-check checkPart">
                                  <input className="form-check-input " type="radio"      name="paymethod" id="cash" required
                                      value="cash" />
                                  <label label className="form-check-label" for="cash">匯款</label>
                              </div>
                              <div className="form-check  checkPart">
                                  <input className="form-check-input" type="radio"  name="paymethod" id="card"
                                      value="card" required/>
                                  <label className="form-check-label" for="card">信用卡</label>
                              </div>
                          </div>
                         
                      </div>
                      <div className="questInfo">
                          <div>取貨方式 </div>
                          <div className="radioS">
                              <div className="form-check  checkPart ">
                                  <input className="form-check-input postoffice" type="radio"       name="pickupmethod" id="store"
                                      value="postoffice" required  onClick={shipprice}  
                                      />
                                  <label className="form-check-label" for="store">郵局 + 80</label>
                              </div>
                              <div className="form-check  checkPart1">
                                  <input className="form-check-input" type="radio"       name="pickupmethod" id="home"
                                      value="blackcat"  required onClick={shipprice}
                                      />
                                  <label className="form-check-label" for="home" >黑貓 + 100</label>
                              </div>
                          </div>
                          
                          
                      </div>
                      <div className="buyerInfo">
                          <p>購買人資料</p>
                          <input type="text" 
                          placeholder="姓名"
                          name= "name"
                          value={name}
                          onChange={Iname}
                          onBlur={Wrongname}
                        required
                          />
                          <div className="error">{nameMessage}</div>
                         

                          <input type="tel" 
                          placeholder="手機"
                          name= "phone"
                          value={phone}
                          onChange={Iphone}
                          required
                          minLength={10}
                          maxLength={10}
                          onBlur={Wrongphone}
                          />
                          <div className="error">{phoneMessage}</div>
                        
                          <input type="email" 
                          placeholder="信箱"
                          name="email"
                          value={email}
                          onChange={Iemail}
                        required
                          onBlur={Wrongemail}
                          />
                          <div className="error">{emailMessage}</div>
                         
                          <input type="text" 
                          placeholder="地址"
                          name= "address"
                          value={address}
                          onChange={Iaddress}
                        required
                          onBlur={Wrongaddress}
                          />
                          <div className="error">{addressMessage}</div>
                      </div>
                 
                      <div className="pickup"  >
                           <div className="shiptohome">
                                <div className="form-check">
                                    <input className="form-check-input sameAddress" type="checkbox"      value=""id="flexCheckChecked" onClick={shipSame} />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        收件人資料與顧客資料相同
                                    </label>
                                </div>
                                <div className="receiverInfo">
                
                                    <p>收件人資料</p>
                                    <input type="text" 
                                     placeholder="姓名"
                                     name= "Rname"
                                     value={Rname}
                                     onChange={RIname}
                                     required
                                     onBlur={WrongRname}
                                     />
                                   <div className="error">{RnameMessage}</div>
                                     
                                     
                                     
                                     <input type="tel" 
                                      placeholder="手機"
                                      name= "Rphone"
                                      value={Rphone}
                                      onChange={RIphone}
                                      required
                                      minLength={10}
                                      maxLength={10}
                                      onBlur={WrongRphone}
                                      />
                                    <div className="error">{RphoneMessage}</div>
                                      
                                      
                                     <input type="email" 
                                     placeholder="信箱"
                                     name="Remail"
                                     value={Remail}
                                     onChange={RIemail}
                                     required
                                      onBlur={WrongRemail}
                                     />
                                   <div className="error">{RemailMessage}</div>
                                    
                                     <input type="text" 
                                      placeholder="地址"
                                      name= "Raddress"
                                      value={Raddress}
                                      onChange={RIaddress}
                                      required
                                      onBlur={WrongRaddress}
                                      />
                                    <div className="error">{RaddressMessage}</div>

                                   
                                </div>
                            </div>
                           {/* <div className="storepick">
                           <p>門市選擇</p>
                           
                           <select class="form-select form-select-sm " aria-label=".form-select-sm ">
                            <option selected>縣市</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                           </select>
                           <p></p>
                           <select class="form-select form-select-sm " aria-label=".form-select-sm ">
                            <option selected>地區</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                           </select>
                          
            
                           </div> */}
                      </div>
                      <div className="noteInfo">
                          <p>備註</p>
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                  </div>
      
                  <div className="payTotalCheck">
                      <div className="box">
                          <div className="totalInfo1">
                              <div>
                                  <p>商品小計</p>
                                  <p>運費</p>
                                  <p>優惠折扣</p>
                                  <p>紅利折扣</p>
                              </div>
                              <div className="money">
                                  <p>$1998</p>
                                  <p className="sprice">${shipgopay}</p>
                                  <p>$100</p>
                                  <p>$100</p>
                              </div>
                          </div>
                          <div className="line"></div>
                          <div className="totalInfo3">
                              <div>
                                  <h3>結帳金額</h3>
                              </div>
                              <div className="money">
                                  <h3>$898</h3>
                              </div>
                          </div>
                             {/* <div className="nextBtn">
                              <button type="submit" className="btn btn-primary btn-lg btn-block "><NavLink href="" to= "/shoppingCart/pay3" className="btnName">結帳 </NavLink></button>
                              </div> */}
                              <div className="nextBtn" 
                            //   onSubmit={toPay3}
                              >
                              <button type="submit" className="btn btn-primary btn-lg btn-block " 
                            //   onSubmit={handleSubmit}
                              >結帳 </button>
                              </div>
      
                      </div>
                  </div>
                 
                  {/* <!-- 手機版小計 --> */}
                  <div className="mText">
                      <hr></hr>
                      <br></br>
                      <h3>金額總計</h3>
                  </div>
                  <div className="mPayTotalCheck">
      
                      <div className="box">
                          <div className="totalInfo1">
                              <div>
                                  <p>商品小計</p>
                                  <p>運費</p>
                                  <p>優惠折扣</p>
                                  <p>紅利折扣</p>
      
                              </div>
                              <div className="money">
                                  <p>$1998</p>
                                  <p>自取</p>
                                  <p>$100</p>
                                  <p>$100</p>
      
      
                              </div>
                          </div>
                          <div className="line"></div>
                          <div className="totalInfo1">
                              <div>
                                  <h3>結帳金額</h3>
                              </div>
                              <div>
                                  <h3>$898</h3>
                              </div>
                          </div>
                          <Link href="" to= "/shoppingCart/pay3">
                              <button type="button" className="btn btn-primary btn-lg btn-block">結帳</button>
                          </Link>
      
      
                      </div>
                  </div>
      
              </div>
    </form>
    </div>
     </>
  );
}

export default Pay2