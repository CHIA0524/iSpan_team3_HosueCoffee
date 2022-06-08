import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";




const InputButton = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            time: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .max(15, "Must be 15 characters or less.")
            .required("Name must not be empty."),
            email: Yup.string()
            .email("Please enter a valid email.")
            .required("Email must not be empty.")
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
        });
    return(
            <div className="people">
                <from onSubmit={formik.handleSubmit}>
                    <label>購買人資料</label>
                    <div>
                        <label>姓名:</label><br/>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <p></p>
                    </div>
                    <div>
                        <label>手機:</label><br/>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        <p></p>
                    </div>
                    <div>
                        <label>領取時間:</label><br/>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        <p></p>
                    </div>
                </from>
            </div>  
)

}
export default InputButton