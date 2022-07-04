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
        console.log(event.target.name)
          return{
              ...prevState,
              [event.target.name]: event.target.value
          }
      })
  }


  const changeSubmit = (event) => {
    event.preventDefault()
    if ((formData.email && formData.password) === ""){
      console.log("Email and Password required*");
    }
    else{
      setIsSubmitted(!isSubmitted)
    }
}



  return (
    <>
    {isSubmitted? <Validator handleSubmit={changeSubmit} oPen={open} funcOpen={handleOpen} funcClose={handleClose}/> : <Form formInput={formData} handleChange={inputChange} handleSubmit={changeSubmit} oPen={open} funcOpen={handleOpen}/>}
    </>
  )
}

export default App;
