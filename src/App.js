import './App.css';
import Form from './components/Form';
import Validator from './components/validator'
import { useState } from "react";

function App() {  
  

    const [errors, setErrors]=useState({
        uemail:"Email Required",
        upassword:"Password Required"
    })
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
      email: "",
      password: ""
  })
  
  console.log(formData);
  function inputChange(event){
      setFormData(prevState => {
          return{
              ...prevState,
              [event.target.name]: event.target.value
          }
      })
  }

  const changeSubmit = (event) => {
    event.preventDefault()
    if ((formData.email && formData.password) === ""){
      console.log("YEs");
      return`
          ${errors.uemail}
      `
    }
    else{
      setIsSubmitted(!isSubmitted)
    }
}


  return (
    <>
    {isSubmitted? <Validator handleSubmit={changeSubmit}/> : <Form formInput={formData} handleChange={inputChange} handleSubmit={changeSubmit} errorHandler={changeSubmit}/>}
    </>
  )
}

export default App;
