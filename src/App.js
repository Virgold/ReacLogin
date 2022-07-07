import './App.css';
import Form from './components/Form';
import Validator from './components/validator'
import { useState } from "react";

function App() {  

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  

  const [errors, setErrors]=useState({
    uemail:"",
    upassword:""
})
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
      email: "",
      password: ""
  })
  
  console.log(formData);
  function inputChange(event){
    const {name,value,type} = event.target
      setFormData(prevState => {
          return{
              ...prevState,
              [name]: value
          }
      })
  }


  function changeSubmit (event){
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
      setIsSubmitted(!isSubmitted)
      setErrors({
        uemail:"",
        upassword: ""
    })
    }
}



  return (
    <>
    {isSubmitted? <Validator formInput={formData} handleSubmit={changeSubmit} oPen={open} funcOpen={handleOpen} funcClose={handleClose}/> : <Form formInput={formData} handleChange={inputChange} handleSubmit={changeSubmit} errorMessage={errors} oPen={open} funcOpen={handleOpen}/>}
    </>
  )
}

export default App;
