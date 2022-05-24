import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import './pay2.css';
// import './component/steps2.css';
import Steps2 from './component/Steps2';





function Pay2(){
   const [fields, setFields] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  })
 // 記錄欄位錯誤訊自用的狀態
 const [fieldErrors, setFieldErrors] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
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
    console.log(formData.get('name'))
    console.log(formData.get('email'))
    // 獲取同名稱的checkbox
    console.log(formData.getAll('likeList'))

    // 送到伺服器…ajax…fetch...
    console.log('這裡送出表單資料到伺服器了')
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
  return(
      <>
       <div class="container main">
       <Steps2 />
          <form
           onSubmit={handleSubmit}
        onInvalid={handleInvalid}
        onChange={handleFormChange}
        >
              <div class="payInfoStart detail">
                  <div class="payInfoFill">
                      <div class="questInfo">
                          <div>付款方式</div>
                          <div class="radioS">
                              <div class="form-check checkPart">
                                  <input class="form-check-input" type="radio"       name="paymethod" id="inlineRadio1"
                                      value="option1"/>
                                  <label label class="form-check-label" for="inlineRadio1">匯款</label>
                              </div>
                              <div class="form-check  checkPart">
                                  <input class="form-check-input" type="radio"       name="paymethod" id="inlineRadio2"
                                      value="option2"/>
                                  <label class="form-check-label" for="inlineRadio2">信用卡</label>
                              </div>
                          </div>
                      </div>
                      <div class="questInfo">
                          <div>取貨方式</div>
                          <div class="radioS">
                              <div class="form-check  checkPart">
                                  <input class="form-check-input" type="radio"       name="pickupmethod" id="inlineRadio1"
                                      value="option1"/>
                                  <label class="form-check-label" for="inlineRadio1">自取</label>
                              </div>
                              <div class="form-check  checkPart">
                                  <input class="form-check-input" type="radio"       name="pickupmethod" id="inlineRadio2"
                                      value="option2"/>
                                  <label class="form-check-label" for="inlineRadio2">宅配 + 80</label>
                              </div>
                          </div>
      
                      </div>
                      <div class="buyerInfo">
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
                          />
                          <input type="email" 
                          placeholder="信箱"
                          name="email"
                          value={fields.email}
                          onChange={handleChange}
                        required
                          />
                          <input type="text" 
                          placeholder="地址"
                          name= "address"
                          value={fields.address}
                          onChange={handleChange}
                          required
                          />
                      </div>
                      <div class="form-check">
                          <input class="form-check-input" type="checkbox" value=""       id="flexCheckChecked" checked/>
                          <label class="form-check-label" for="flexCheckChecked">
                              收件人資料與顧客資料相同
                          </label>
                      </div>
                      <div class="receiverInfo">
      
                          <p>收件人資料</p>
                          <input type="text" placeholder="姓名"/>
                          <input type="text" placeholder="手機"/>
                          <input type="text" placeholder="信箱"/>
                          <input type="text" placeholder="地址"/>
                      </div>
                      <div class="noteInfo">
                          <p>備註</p>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                  </div>
      
                  <div class="payTotalCheck">
                      <div class="box">
                          <div class="totalInfo1">
                              <div>
                                  <p>商品小計</p>
                                  <p>運費</p>
                                  <p>優惠折扣</p>
                                  <p>紅利折扣</p>
                              </div>
                              <div class="money">
                                  <p>$1998</p>
                                  <p>自取</p>
                                  <p>$100</p>
                                  <p>$100</p>
                              </div>
                          </div>
                          <div class="line"></div>
                          <div class="totalInfo3">
                              <div>
                                  <h3>結帳金額</h3>
                              </div>
                              <div class="money">
                                  <h3>$898</h3>
                              </div>
                          </div>
                             {/* <div className="nextBtn">
                              <button type="submit" class="btn btn-primary btn-lg btn-block "><NavLink href="" to= "/shoppingCart/pay3" className="btnName">結帳 </NavLink></button>
                              </div> */}
                              <div className="nextBtn" //onSubmit={toPay3}
                              >
                              <button type="submit" class="btn btn-primary btn-lg btn-block ">結帳 </button>
                              </div>
      
                      </div>
                  </div>
                 
                  {/* <!-- 手機版小計 --> */}
                  <div class="mText">
                      <hr></hr>
                      <br></br>
                      <h3>金額總計</h3>
                  </div>
                  <div class="mPayTotalCheck">
      
                      <div class="box">
                          <div class="totalInfo1">
                              <div>
                                  <p>商品小計</p>
                                  <p>運費</p>
                                  <p>優惠折扣</p>
                                  <p>紅利折扣</p>
      
                              </div>
                              <div class="money">
                                  <p>$1998</p>
                                  <p>自取</p>
                                  <p>$100</p>
                                  <p>$100</p>
      
      
                              </div>
                          </div>
                          <div class="line"></div>
                          <div class="totalInfo1">
                              <div>
                                  <h3>結帳金額</h3>
                              </div>
                              <div>
                                  <h3>$898</h3>
                              </div>
                          </div>
                          <Link href="" to= "/shoppingCart/pay3">
                              <button type="button" class="btn btn-primary btn-lg btn-block">結帳</button>
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