import React,{useContext,useState} from "react";
import "../App.css";
import { Icon } from '@iconify/react';
import { FormContext } from "../Context/FormContext";
import Validator from "./validator";
import { ModalContext } from "../Context/ModalContext";


export default function Form(props) {

    const [formData,setFormData]=useContext(FormContext);
    const [open,setOpen]= useContext(ModalContext);

    
    const [errors, setErrors]=useState({
        uemail:"",
        upassword:""
    })

    function inputChange(event){
        const {name,value,type} = event.target
          setFormData(prevState => {
              return{
                  ...prevState,
                  [name]: value
              }
          })
      }

      function formSubmit (event){
        event.preventDefault()
        if ((formData.email === "") && (formData.password === "")){
          console.log(formData);
          setErrors(
            {
              uemail:"Email Required*",
              upassword:"Password Required*"
            }
          )
        }
        else if ((formData.email === formData.email) && (formData.password === "")){
          console.log("EMAIL VALID");
          setErrors(
            {
              uemail:"",
              upassword:"Password Required*"
            }
          )
        }
        else if ((formData.email === "") && (formData.password === formData.password)){
          console.log("PASSWORD VALID");
          setErrors(
            {
              uemail:"Email Required*",
              upassword:""
            }
          )
        }
        else{
            setOpen(true)
          setErrors({
            uemail:"",
            upassword: ""
        })
        }
    }


    return (
        <>
            <Validator/>
            <div className="container-fluid vh-100 py-5 p-0">
                <h4 className="text-center py-3 fs-2">myLogin</h4>

                <form className="container shadow py-5 px-4 position-relative" onSubmit={formSubmit} handleSubmit={formSubmit}>
                    <p> <b>Login <Icon className="fs-5 lock" icon="bi:shield-lock-fill" color="#210203" /> </b></p>

                    <div className="mb-4 mt-5">
                        <label htmlFor="formEmail" className="form-label m-0"> <b>Email:</b> </label>
                        <input type="email" className="form-control py-2" id="formEmail" placeholder="Email" value={formData.email} name="email" onChange={inputChange}/>
                        <span className="error">{errors.uemail}</span>
                    </div>

                    <div className="mb-4 mt-4">
                        <label htmlFor="formPassword" className="form-label m-0"><b>Password:</b> </label>
                        <input type="password" className="form-control py-2" id="formPassword" placeholder="Password" value={formData.password} name="password" onChange={inputChange}/>
                        <span className="error">{errors.upassword}</span>
                    </div>
                    <div className="mt-5">
                        <button className="btn form-control loginbtn text-white py-2 fa-spin"><b>SUBMIT</b><Icon className="fs-3 mt-n5 ms-2" icon="ri:login-circle-line" color="white" /></button>
                    </div>
                </form>
            </div>
        </>
    )
}