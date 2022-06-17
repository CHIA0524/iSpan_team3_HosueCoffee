import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Area from '../component/area';


const BodyLeft = props => {
    
    let datas = props.datas1
    const [area,setArea]=useState("請選擇");
    const [astore,setAstore]=useState([]);
    const [areastore,setAreastore]=useState([]);
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
            >
            {({ errors, touched, isSubmitting,values }) => (
                <Form className="superman">
                    <div className="body1">
                        <div className="total">
                            <div className="people">
                                <div className='d-flex flex-column'>
                                    <span>姓名</span>
                                    <Field name="name" />
                                    {errors.name && touched.name ? (
                                        <div style={{color:'red'}}>
                                            {errors.name}
                                        </div>
                                    ) : null}
                                </div>
                                <div className='d-flex flex-column'>
                                    <span>手機號碼</span>
                                    <Field name="phone" />
                                    {errors.phone && touched.phone ? (
                                        <div style={{color:'red'}}>
                                            {errors.phone}
                                        </div>
                                    ) : null}
                                </div>
                                <div className='d-flex flex-column'>
                                    <span>領取時間</span>
                                    <Field name="time" type="time" />
                                    {errors.time && touched.time ? 
                                    <div>
                                        {errors.time}
                                    </div> : null}
                                </div>
                            </div>
                            <div className="selectStore">
                                <div>
                                    <br/>
                                </div>
                                <Area 
                                    area={area} 
                                    setArea={setArea} 
                                    areastore={areastore} 
                                    setAreastore={setAreastore} 
                                    astore={astore} 
                                    setAstore={setAstore}
                                />
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
                                    <span>${datas.totalprice}</span>
                                </div>
                            </div> 
                            <hr/> 
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
                                        onClick={async()=>{
                                            if (isSubmitting === true) {
                                                window.location.href=("/OnlineCheckPage3")
                                                localStorage.setItem("gifts", JSON.stringify([]))
                                                const indate = await fetch(`http://localhost:3001/menu/inmenu?pay=${'信用卡'}&orderer=${values.name}&phone=${values.phone}&odertime=${values.time}&drink_total_price=${datas.totalprice}`)
                                            }
                                        }}
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