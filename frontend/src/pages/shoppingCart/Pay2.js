import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './pay2.css';
// import './component/steps2.css';
import Steps2 from './component/Steps2';
import Pay3 from './Pay3';





function Pay2(){
   const [fields, setFields] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    Rname: '',
    Rphone: '',
    Remail: '',
    Raddress: '',
  })
 // 記錄欄位錯誤訊自用的狀態
 const [fieldErrors, setFieldErrors] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    Rname: '',
    Rphone: '',
    Remail: '',
    Raddress: '',

  })
  

  // 每個表單輸入時觸發onChange使用
  const handleChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value)

    // 步驟1+2
    const newData = { ...fields, [e.target.name]: e.target.value }

    // 步驟3: 設定回原狀態
    setFields(newData)
  }

  // 表單通過html5驗証時會呼叫
  const handleSubmit = (e) => {
    // 阻擋表單預設行為
    e.preventDefault()

    const formData = new FormData(e.target)
    // 獲取同名稱的checkbox
    console.log(formData.getAll('paymethod'))
    console.log(formData.getAll('pickupmethod'))
    
    console.log(formData.get('name'))
    console.log(formData.get('phone'))
    console.log(formData.get('email'))
    console.log(formData.get('address'))

    console.log(formData.get('Rname'))
    console.log(formData.get('Rphone'))
    console.log(formData.get('Remail'))
    console.log(formData.get('Raddress'))

    // 送到伺服器…ajax…fetch...
    console.log('這裡送出表單資料到伺服器了')
   
    // 如果都輸入完成，頁面跳轉
    
  }

  

    // 表單出現不合法的html5驗証時會呼叫
    const handleInvalid = (e) => {
    // 阻擋表單預設行為(錯誤的泡泡訊息)
    e.preventDefault()

    const newFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    setFieldErrors(newFieldErrors)

    //console.log(e.target.validationMessage)
  }

  // 當整個表單有變動時會觸發
  // 只是為了暫時清除錯誤訊息而已
  const handleFormChange = (e) => {
    const newFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }
    setFieldErrors(newFieldErrors)
  }
  
    //自取匯款選擇
    const Pickup1 = ()=>{
         document.querySelector('.shiptohome').style.display="block"
         document.querySelector('.storepick').style.display="none"
    }

    const Pickup2 = ()=>{
        document.querySelector('.storepick').style.display="block"
        document.querySelector('.shiptohome').style.display="none"
        }
    

    
    const shipSame = ()=>{
         document.querySelector('.receiverInfo').style.display="none"
         }
   


  return(
      <>
       <div className="container main">
       <Steps2 />
          <form
           onSubmit={handleSubmit}
           onInvalid={handleInvalid}
           onChange={handleFormChange}
        >
              <div className="payInfoStart detail">
                  <div className="payInfoFill">
                      <div className="questInfo">
                          <div>付款方式</div>
                          <div className="radioS">
                              <div className="form-check checkPart">
                                  <input className="form-check-input" type="radio"      name="paymethod" id="cash"
                                      value="cash" />
                                  <label label className="form-check-label" for="cash">匯款</label>
                              </div>
                              <div className="form-check  checkPart">
                                  <input className="form-check-input" type="radio"       name="paymethod" id="card"
                                      value="card"/>
                                  <label className="form-check-label" for="card">信用卡</label>
                              </div>
                          </div>
                      </div>
                      <div className="questInfo">
                          <div>取貨方式</div>
                          <div className="radioS">
                              <div className="form-check  checkPart">
                                  <input className="form-check-input" type="radio"       name="pickupmethod" id="store"
                                      value="storepickup" onClick={Pickup2} 
                                    //   onChange={handleInputChange}
                                      />
                                  <label className="form-check-label" for="store">自取</label>
                              </div>
                              <div className="form-check  checkPart">
                                  <input className="form-check-input" type="radio"       name="pickupmethod" id="home"
                                      value="shiptohome" onClick={Pickup1}
                                    //   onChange={handleInputChange}
                                      />
                                  <label className="form-check-label" for="home" >宅配 + 80</label>
                              </div>
                          </div>
      
                      </div>
                      <div className="buyerInfo">
                          <p>購買人資料</p>
                          <input type="text" 
                          placeholder="姓名"
                          name= "name"
                          value={fields.name}
                          onChange={handleChange}
                        required
                          />
                          {fieldErrors.name !== '' && (
                          <div className="error">{fieldErrors.name}</div>
                          )}
                          <input type="tel" 
                          placeholder="手機"
                          name= "phone"
                          value={fields.phone}
                          onChange={handleChange}
                          required
                          minLength={10}
                          maxLength={10}
                          />
                           {fieldErrors.phone !== '' && (
                          <div className="error">{fieldErrors.phone}</div>
                          )}
                          <input type="email" 
                          placeholder="信箱"
                          name="email"
                          value={fields.email}
                          onChange={handleChange}
                        required
                          />
                          {fieldErrors.email !== '' && (
                          <div className="error">{fieldErrors.email}</div>
                          )}
                          <input type="text" 
                          placeholder="地址"
                          name= "address"
                          value={fields.address}
                          onChange={handleChange}
                          />
                      </div>
                 
                      <div className="pickup"  >
                           <div className="shiptohome">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"      value=""id="flexCheckChecked" onClick={shipSame} />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        收件人資料與顧客資料相同
                                    </label>
                                </div>
                                <div className="receiverInfo">
                
                                    <p>收件人資料</p>
                                    <input type="text" 
                                     placeholder="姓名"
                                     name= "Rname"
                                     value={fields.Rname}
                                     onChange={handleChange}
                                     required
                                     />
                                     {fieldErrors.Rname !== '' && (
                                     <div className="error">{fieldErrors.Rname}</div>
                                     )}
                                     
                                     <input type="tel" 
                                      placeholder="手機"
                                      name= "Rphone"
                                      value={fields.Rphone}
                                      onChange={handleChange}
                                      required
                                      minLength={10}
                                      maxLength={10}
                                      />
                                       {fieldErrors.Rphone !== '' && (
                                      <div className="error">{fieldErrors.Rphone}</div>
                                      )}
                                      
                                     <input type="email" 
                                     placeholder="信箱"
                                     name="Remail"
                                     value={fields.Remail}
                                     onChange={handleChange}
                                     required
                                     />
                                     {fieldErrors.Remail !== '' && (
                                     <div className="error">{fieldErrors.Remail}</div>
                                     )}
                                     <input type="text" 
                                      placeholder="地址"
                                      name= "Raddress"
                                      value={fields.Raddress}
                                      onChange={handleChange}
                                      required
                                      />
                                       {fieldErrors.Raddress !== '' && (
                                     <div className="error">{fieldErrors.Raddress}</div>
                                     )}
                                </div>
                            </div>
                           <div className="storepick">
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
                                  <p>自取</p>
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
                              <button type="submit" className="btn btn-primary btn-lg btn-block " onSubmit={handleSubmit}
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