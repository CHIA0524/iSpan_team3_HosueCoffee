import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
// <----------pay1----------->
import './pay1.css';
import PInfo from './component/PInfo';
import Steps1 from './component/Steps1';
// <----------pay2----------->
import './pay2.css';
import Steps2 from './component/Steps2';



function Pay1(props){
    if(localStorage.getItem('sCarts')==null){
        localStorage.setItem('sCarts',JSON.stringify([]))
        
    }
  
    // if(JSON.parse(localStorage.getItem('sCarts'))==[]){
    // }
    
    
    const {auth}=props
    //console.log(auth)

    //回去繼續購物
    const keepshopping = ()=>{
        window.location.assign("http://localhost:3000/shop")
         }  

    //按下一步跳pay2
       const nextStep = ()=>{
           if(JSON.parse(localStorage.getItem('sCarts'))==false){
                alert("購物車沒有商品")
           }else if(!auth){
               //console.log(auth)
            alert("請登入會員")
           }else{
        document.querySelector('.payTwo').style.display="block"
        document.querySelector('.payOne').style.display="none"
    }
         }   
    
     //回上一步
    const preStep = ()=>{
        document.querySelector('.payTwo').style.display="none"
        document.querySelector('.payOne').style.display="block"
         } 
         
    //按下一步跳pay3
    const complete = ()=>{
        const a=document.querySelector('.sameAddress').checked
        if(a==true){
            setRName(name)
            setRPhone(phone)
            setREmail(email)
            setRAddress(address)
            if (nameMessage=="" ){
           
            window.location.replace("http://localhost:3000/shoppingCart/pay3")
           }else{
                 document.querySelector(".errorname").style.color="red";
                 document.querySelector(".errorphone").style.color="red";
                 document.querySelector(".erroremail").style.color="red";
                 document.querySelector(".erroraddress").style.color="red";
                 document.querySelector(".errorRname").style.color="red";
                 document.querySelector(".errorRphone").style.color="red";
                 document.querySelector(".errorRemail").style.color="red";
                 document.querySelector(".errorRaddress").style.color="red";
        }
        }else{
            if (nameMessage=="" ){    
            window.location.replace("http://localhost:3000/shoppingCart/pay3")          
               }else{
                 document.querySelector(".errorname").style.color="red";
                 document.querySelector(".errorphone").style.color="red";
                 document.querySelector(".erroremail").style.color="red";
                 document.querySelector(".erroraddress").style.color="red";
                 document.querySelector(".errorRname").style.color="red";
                 document.querySelector(".errorRphone").style.color="red";
                 document.querySelector(".errorRemail").style.color="red";
                 document.querySelector(".errorRaddress").style.color="red";
            }
        }

        }
        

// <----------pay1----------->
    // const [ subTotal, setsubTotal ]= useState(1)
    // const [ totalCash, setTotalCash ] = useState(1);
    // const[a,setA]=useState(0);
    const [ ptotal, setPtotal ]= useState(0)
    // console.log(ptotal)
    const [totalp ,settotalp]= useState()
    // const {setPtotal, ptotal } = props
    // const cash = (price) => {
    //     setTotalCash( 499 * Number(subTotal));
    //   }
    //   console.log(cash)

    // <----------pay2----------->
    const [name,setName]=useState()
    const [phone,setPhone]=useState()
    const [email,setEmail]=useState()
    const [address,setAddress]=useState()
    const [Rname,setRName]=useState()
    const [Rphone,setRPhone]=useState()
    const [Remail,setREmail]=useState()
    const [Raddress,setRAddress]=useState()
 
    //顯示錯誤訊息
  
    const [nameMessage,setNameMessage]=useState("請輸入姓名")
    const [phoneMessage,setPhoneMessage]=useState("請輸入手機")
    const [emailMessage,setEmailMessage]=useState("請輸入信箱")
    const [addressMessage,setAddressMessage]=useState("請輸入地址")
 
    const [RnameMessage,setRNameMessage]=useState("請輸入姓名")
    const [RphoneMessage,setRPhoneMessage]=useState("請輸入手機")
    const [RemailMessage,setREmailMessage]=useState("請輸入信箱")
    const [RaddressMessage,setRAddressMessage]=useState("請輸入地址")
 
 
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
     // console.log(name)
       
         //驗證
      
         const Wrongname=()=>{
             if(!name){
                 setNameMessage("請輸入姓名")
                 document.querySelector(".errorname").style.color="red";
             }else{
                 setNameMessage("")
             }
         }   
         const Wrongphone=()=>{
             if(!phone){
                 setPhoneMessage("請輸入手機")
                 document.querySelector(".errorphone").style.color="red";
                }else{
                 setPhoneMessage("")
             }
         }  
         const Wrongemail=()=>{
             if(!email){
                 setEmailMessage("請輸入信箱")
                 document.querySelector(".erroremail").style.color="red";
                }else{
                 setEmailMessage("")
             }
         }
         const Wrongaddress=()=>{
             if(!address){
                 setAddressMessage("請輸入地址")
                 document.querySelector(".erroraddress").style.color="red";
                }else{
                 setAddressMessage("")
             }
         }
         const WrongRname=()=>{
             if(!Rname){
                 setRNameMessage("請輸入姓名")
                 document.querySelector(".errorRname").style.color="red";
                }else{
                 setRNameMessage("")
             }
         }   
         const WrongRphone=()=>{
             if(!Rphone){
                 setRPhoneMessage("請輸入手機")
                 document.querySelector(".errorRphone").style.color="red";
                }else{
                 setRPhoneMessage("")
             }
         }  
         const WrongRemail=()=>{
             if(!Remail){
                 setREmailMessage("請輸入信箱")
                 document.querySelector(".errorRemail").style.color="red";
                }else{
                 setREmailMessage("")
             }
         }
         const WrongRaddress=()=>{
             if(!Raddress){
                 setRAddressMessage("請輸入地址")
                 document.querySelector(".errorRaddress").style.color="red";
                }else{
                 setRAddressMessage("")
             }
         }
     
 
        //相同運送地址 
        const shipSame = ()=>{
          const a=document.querySelector('.sameAddress').checked
         
          //console.log(a)
          if(a==true){
          document.querySelector('.receiverInfo').style.display="none"
          setRName(name)
          setRPhone(phone)
          setREmail(email)
          setRAddress(address)
          
          setRNameMessage("")
          setRPhoneMessage("")
          setREmailMessage("")
          setRAddressMessage("")

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
            // console.log(b)
            if(b==true){
               // document.getElementById("sprice").innerHTML = 80
               setShipgopay(80)
           }
           else{
               // document.getElementById("sprice").innerHTML = 100
               setShipgopay(100)
            }
             }    
             
    //pay1重後端抓資料
    // let[pricetotal1, setpricetotal1] = useState('')
    const [datas, setDatas ] = useState([])
    const fetchData = async()=>{    
     const response = await fetch('http://localhost:3001/shop'); 
     const results = await response.json();
                     setDatas(results);
     }
    
    useEffect(()=>{
        fetchData();
         },[])


  return(
      <>
       {/* <----------pay1-----------> */}
      <div className="payOne">
               <div className="container main">
                   <Steps1 />
                   <hr></hr>
                   <PInfo setPtotal={setPtotal} ptotal={ptotal} 
                    settotalp={settotalp} datas={datas}
                   />
                    {/* <!-- 折扣結帳區 --> */}
                    <div className="dInput">
                        <div>
                            <div>
                                <div className="dText">
                                    <p>優惠碼使用</p>
                                </div>
                                <div>
                                    <input type="text"/>
                                    <a href="">
                                        <button className="btn1 btn-outline-secondary" type="button">✓</button>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="dText">
                                    <p>紅利點數使用</p>
                                    <p className="pointText">剩餘點數 99點(可折扣99元)</p>
                                </div>
                                <div>
                                    <input type="text"/>
                                    <a href="">
                                        <button className="btn1 btn-outline-secondary" type="button">✓</button>
                                    </a>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="countTotal">
                                <div>
                                    <h4>商品小計</h4>
                                    <h4>優惠券</h4>
                                    <h4>紅利折扣</h4>
                                </div>
                                <div className="money">
                                    <h4>${ptotal}</h4>
                                    
                                    <h4>$499</h4>
                                    <h4>$499</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>        

                    <div className="check">
                        <div type="button" className="addCartBtn" id="subtract" onClick={keepshopping} ><p className="btnWords">繼續購物</p>
                            </div>
                        <div type="button" className="addCartBtn" id="subtract" onClick={nextStep}><p className="btnWords">下一步</p>
                        </div>
                    </div>
             </div>
        </div>
        
        
        {/* <----------pay2-----------> */}
        <div className="payTwo">
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
                          <div className="radioS pppay">
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
                          <div className="radioS ssship">
                              <div className="form-check  checkPart ">
                                  <input className="form-check-input postoffice" type="radio"       name="pickupmethod" id="post"
                                      value="postoffice" required  onClick={shipprice}  
                                      />
                                  <label className="form-check-label" for="post">郵局 + 80</label>
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
                          <div className="error errorname">{nameMessage}</div>
                         

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
                          <div className="error errorphone">{phoneMessage}</div>
                        
                          <input type="email" 
                          placeholder="信箱"
                          name="email"
                          value={email}
                          onChange={Iemail}
                        required
                          onBlur={Wrongemail}
                          />
                          <div className="error erroremail">{emailMessage}</div>
                         
                          <input type="text" 
                          placeholder="地址"
                          name= "address"
                          value={address}
                          onChange={Iaddress}
                        required
                          onBlur={Wrongaddress}
                          />
                          <div className="error erroraddress">{addressMessage}</div>
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
                                   <div className="error errorRname">{RnameMessage}</div>
                                     
                                     
                                     
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
                                    <div className="error errorRphone">{RphoneMessage}</div>
                                      
                                      
                                     <input type="email" 
                                     placeholder="信箱"
                                     name="Remail"
                                     value={Remail}
                                     onChange={RIemail}
                                     required
                                      onBlur={WrongRemail}
                                     />
                                   <div className="error errorRemail">{RemailMessage}</div>
                                    
                                     <input type="text" 
                                      placeholder="地址"
                                      name= "Raddress"
                                      value={Raddress}
                                      onChange={RIaddress}
                                      required
                                      onBlur={WrongRaddress}
                                      />
                                    <div className="error errorRaddress">{RaddressMessage}</div>

                                   
                                </div>
                            </div>
                           
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
                             
                              <div className="nextBtn" 
                              >
                               <button  className="btn btn-primary btn-lg btn-block pbtn " onClick={preStep}
                              >上一步 </button>
                              <button type="button" className="btn btn-primary btn-lg btn-block pbtn " onClick={complete}
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
                          <div className="nextBtn" 
                              >
                               <button  className="btn btn-primary btn-lg btn-block pbtn" onClick={preStep}
                              >上一步 </button>
                              <button type="button" className="btn btn-primary btn-lg btn-block pbtn" onClick={complete}
                              >結帳 </button>
                            </div>
      
      
                      </div>
                  </div>
      
              </div>
           </form>
        </div>

        </div>

     </>
  );
}

export default Pay1