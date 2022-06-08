import React from 'react';
import {Link} from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';





const BodyRight = props => {


    let datas = props.datas1
    console.log(datas);


    
    return(
        <>
        <div className="body2">  
            <div className="totalCard">
                <div className="d-flex justify-content-between">
                    <div>
                        <span>商品小計</span>
                    </div>
                    <div>
                        <span>$250</span>
                    </div>
                </div> 
                <hr/> 
                <div className="d-flex justify-content-between my-2">
                    <div className="d-flex">
                        <span>運費</span>
                    </div>
                    <div>
                        <span>自取免運</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between my-2 mb-3">
                    <div>
                        <span>優惠折扣</span>
                    </div>
                    <div>
                        <span>$100</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between my-2 mt-5">
                    <div>
                        <span>結帳金額</span>
                    </div>
                    <div>
                        <h3 style={{color:'red'}}>${datas.totalprice}</h3>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-end mt-4">
                        <Link to="/OnlineCheckPage">
                            <div className="btn PaymentLast mt-1">上一頁</div>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                        <Link to="/OnlineCheckPage3">
                            <button className="PaymentLast mt-1" type="submit">
                                結帳
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
          <div className="body2">  
          <div className="totalCard">
              <div className="d-flex justify-content-between">
                  <div>
                      <span>商品小計</span>
                  </div>
                  <div>
                      <span>$250</span>
                  </div>
              </div> 
              <hr/> 
              <div className="d-flex justify-content-between my-2">
                  <div className="d-flex">
                      <span>運費</span>
                  </div>
                  <div>
                      <span>自取免運</span>
                  </div>
              </div>
              <div className="d-flex justify-content-between my-2 mb-3">
                  <div>
                      <span>優惠折扣</span>
                  </div>
                  <div>
                      <span>$100</span>
                  </div>
              </div>
              <div className="d-flex justify-content-between my-2 mt-5">
                  <div>
                      <span>結帳金額</span>
                  </div>
                  <div>
                      <h3 style={{color:'red'}}>${datas.totalprice}</h3>
                  </div>
              </div>
              <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-end mt-4">
                      <Link to="/OnlineCheckPage">
                          <div className="btn PaymentLast mt-1">上一頁</div>
                      </Link>
                  </div>
                  <div className="d-flex justify-content-end mt-4">
                      <Link to="/OnlineCheckPage3">
                          <button className="PaymentLast mt-1" type="submit">
                              結帳
                          </button>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
</>
)

    }


export default BodyRight