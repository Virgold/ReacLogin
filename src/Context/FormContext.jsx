import React,{createContext,useState  } from "react";

export const FormContext = createContext()

export const FormProvider = (props) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    return (
        <FormContext.Provider value={[formData, setFormData]}>
            {props.children}
        </FormContext.Provider>
    )
    
}