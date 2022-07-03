import React from "react";
import "../App.css";
import { Icon } from '@iconify/react';
// import { useState } from "react";
// import Validator from './validator'

export default function Form(props) {

  

    return (
        <>
            <div className="container-fluid vh-100 py-5 p-0">
                <h4 className="text-center py-3 fs-2">myLogin</h4>

                <form className="container shadow py-5 px-4 position-relative" onSubmit={props.handleSubmit}>
                    <p> <b>Login <Icon className="fs-5 lock" icon="bi:shield-lock-fill" color="#210203" /> </b></p>

                    <div className="mb-4 mt-5">
                        <label htmlFor="formEmail" className="form-label m-0"> <b>Email:</b> </label>
                        <input type="email" className="form-control py-2" id="formEmail" placeholder="Email" value={props.formInput.email} name="email" onChange={props.handleChange}/>
                        <span className="error">{props.errorHandler}</span>
                    </div>

                    <div className="mb-4 mt-4">
                        <label htmlFor="formPassword" className="form-label m-0"><b>Password:</b> </label>
                        <input type="password" className="form-control py-2" id="formPassword" placeholder="Password" value={props.formInput.password} name="password" onChange={props.handleChange}/>
                        <span className="error">{props.errorHandler}</span>
                    </div>
                    <div className="mt-5">
                        <button className="btn form-control loginbtn text-white py-2 fa-spin"><b>SUBMIT</b><Icon className="fs-3 mt-n5 ms-2" icon="ri:login-circle-line" color="white" /></button>
                    </div>
                </form>
            </div>
        </>
    )
}