import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const BodyLeft = props => {
    
    let datas = props.datas1


    const phoneRegExp = /^09\d{2}-?\d{3}-?\d{3}$/
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, '請輸入正確 姓名EX:王小明')
            .max(4, '請輸入正確 姓名EX:王小明!')
            .required('請輸入名字'),
        phone: Yup.string().matches(phoneRegExp, '請輸入正確手機格式09XX-XXX-XXX')
            .min(10, "請輸入正確手機格式09XX-XXX-XXX")
            .max(10, "請輸入正確手機格式09XX-XXX-XXX")
            .required("請輸入手機號碼"),
    });


    return(
        <>     
            <Formik
                className="container together"
                initialValues={{
                name: '',
                phone: '',
                time: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
            {({ errors, touched,isSubmitting }) => (
                <Form className="superman">
                    <div className="body1">
                        <div className="total">
                            <div className="people">
                                        <div className='d-flex flex-column'>
                                        <span>姓名</span>
                                        <Field name="name" />
                                        {errors.name && touched.name ? (
                                            <div style={{color:'red'}}>{errors.name}</div>
                                        ) : null}
                                        </div>
                                        <div className='d-flex flex-column'>
                                        <span>手機號碼</span>
                                        <Field name="phone" />
                                        {errors.phone && touched.phone ? (
                                            <div style={{color:'red'}}>{errors.phone}</div>
                                        ) : null}
                                        </div>
                                        <div className='d-flex flex-column'>
                                        <span>領取時間</span>
                                        <Field name="time" type="time" />
                                        {errors.time && touched.time ? <div>{errors.time}</div> : null}
                                        </div>
                            </div>
                            <div className="selectStore">
                                <div className="hisstoryStoreName">
                                    <span>上次訂餐門市</span>
                                </div>
                                <div className="hisstoryStore">
                                    <div className="cardWrap">
                                        <img src="../img/01.jpg" alt=""/>
                                        <div className="itemText">
                                            <p>長榮店</p>
                                            <p>新北市 新店區中央路159號4F</p>
                                            <p>02-412-8869</p>
                                        </div>
                                        <i className="fa-solid fa-circle-info"></i>
                                    </div>
                                </div>    
                                <div>
                                    <span>選擇門市</span>
                                </div>
                                <div className="Promo1">
                                    <div className="Payment">
                                        <p>選擇縣市</p>
                                        <div className="sel sel--black-panther popo1">
                                            <select name="select-profession" id="select-profession">
                                                <option value="" disabled>選擇縣市</option>
                                                <option value="hacker">測試</option>
                                                <option value="gamer">測試</option>
                                                <option value="developer">測試</option>
                                                <option value="programmer">測試</option>
                                                <option value="designer">測試</option>
                                            </select>
                                        </div>
                                        <hr className="rule"/>
                                    </div>
                                </div>
                                <div className="Promo1">
                                    <div className="Payment">
                                        <p>選擇地區</p>
                                        <div className="sel sel--black-panther popo2">
                                            <select name="select-profession" id="select-profession">
                                                <option value="" disabled>選擇地區</option>
                                                <option value="hacker">測試</option>
                                                <option value="gamer">測試</option>
                                                <option value="developer">測試</option>
                                                <option value="programmer">測試</option>
                                                <option value="designer">測試</option>
                                            </select>
                                        </div>
                                        <hr className="rule"/>
                                    </div>
                                </div>
                                <div className="Promo1">
                                    <div className="Payment">
                                        <p>選擇門市</p>
                                        <div className="sel sel--black-panther">
                                            <select name="select-profession" id="select-profession">
                                                <option value="" disabled>選擇門市</option>
                                                <option value="hacker">測試</option>
                                                <option value="gamer">測試</option>
                                                <option value="developer">測試</option>
                                                <option value="programmer">測試</option>
                                                <option value="designer">測試</option>
                                            </select>
                                        </div>
                                        <hr className="rule"/>
                                    </div>
                                </div>
                            </div>
                            <div className="store1">
                                <div className="cardWrap">
                                    <img src="../img/01.jpg" alt=""/>
                                    <div className="itemText">
                                        <p>長榮店</p>
                                        <p>新北市 新店區中央路159號4F</p>
                                        <p>02-412-8869</p>
                                    </div>
                                    <i className="fa-solid fa-circle-info"></i>
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
                        
                            <button 
                            className="PaymentLast mt-1" 
                            type="submit" 
                            onClick={()=>{if (isSubmitting===true) {
                                window.location.href="/OnlineCheckPage3"
                            }}}
                            >
                                結帳
                            </button>
                    </div>
                </div>
            </div>
        </div>
         </Form>
         )}
    </Formik>
</> 




)
    }

export default  BodyLeft