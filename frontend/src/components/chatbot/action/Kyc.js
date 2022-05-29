import React from 'react'
import { Formik,ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState,useEffect } from 'react';
import { getUser } from '../../../api/users.api';
import AuthStore from '../../../middleware/authstore';
import { Button } from '@material-ui/core';
import { editUser } from '../../../api/users.api';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './kyc.css'

const Kyc = (props) => {
    
    const [showForm,setShowForm]= useState(true);
    const loggedin= AuthStore.isAuthenticated();
    const token = localStorage.getItem("jwToken");
    const [currUser,setUser]=useState({});
    useEffect(()=>{
        
          getUser(token,loggedin._id).then(val=>{
            //console.log(val);
            setUser({...val});
            //setload(true);
          }) 
        
    },[]);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object().shape({
            acc_no: Yup.string()
            .required("Account no. is required")
            .min(11, "Account no. must be at least 11 digits.")
            .max(16,"Account no. must be at most 16 digits.")
            .matches(phoneRegExp, 'Acc no. must contain numbers only.'),
            phone_no: Yup.string()
            .required("Phone no. is required")
            .min(10, "Phone no. must have 10 digits.")
            .max(10, "Phone no. must have 10 digits.")
            .matches(phoneRegExp, 'Phone no. is not valid.'),
    });
    const handleSubmit=(values,errors)=>{
        editUser(token,currUser._id,true,values.acc_no,values.phone_no,currUser.limit).then(data=>{
            setShowForm(false);
        }) 

    }
    if(showForm) {
            return (
            <div className='form-container'>
                {
                    showForm &&
                    <Formik
                        initialValues={{
                            acc_no: "",
                            phone_no: "",
                        }}
                        onSubmit={(values, errors) => {
                            handleSubmit(values, errors);
                        }}
                        validationSchema={validationSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleSubmit,
                            handleChange,
                            handleBlur,
                        })=>{
                            return(
                                <form onSubmit={handleSubmit}>
                                    <div className='input-container'>
                                        <label>Bank Account Number</label>
                                        <input
                                            placeholder='Enter account number'
                                            value={values.acc_no}
                                            onChange={handleChange("acc_no")}
                                            onBlur={handleBlur("acc_no")}
                                        />
                                        <ErrorMessage name="acc_no">
                                            { msg => <div style={{ color: 'red',fontSize:'small' }}>{msg}</div> }
                                        </ErrorMessage>
                                    </div>
                                    <div className='input-container'>
                                        <label>Phone Number</label>
                                        <input
                                            placeholder='Enter phone number'
                                            value={values.phone_no}
                                            onChange={handleChange("phone_no")}
                                            onBlur={handleBlur("phone_no")}
                                        />
                                        {/* <div>{touched.phone_no && errors.phone_no}</div> */}
                                        <ErrorMessage name="phone_no">
                                            { msg => <div style={{ color: 'red',fontSize:'small' }}>{msg}</div> }
                                        </ErrorMessage>
                                    </div>
                                    <Button variant='contained' type='submit'  className='submit-button'>Submit</Button>
                                </form>
                            )
                        }}
                    </Formik>
                }
                
            </div>
        )
    }
    else {return(
        <div style={{ backgroundColor:'white',fontSize:'small' }} className='success'>
            <CheckCircleIcon className='success-icon'/>
            <h5>You have successfully completed your KYC.</h5>
        </div>
    )}
}

export default Kyc