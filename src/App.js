import './App.css';
import Form from './components/Form';
import Validator from './components/validator'
import { useState } from "react";
import { FormProvider } from './Context/FormContext';
import { ModalProvider } from './Context/ModalContext';

function App() {  
  return (
    <FormProvider>
      <ModalProvider>
          <Form/>
      </ModalProvider> 
    </FormProvider>
  )
}

export default App;
