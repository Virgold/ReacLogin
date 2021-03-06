import React,{createContext,useState} from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) =>{
    const [open, setOpen] = useState(false);

    return(
        <ModalContext.Provider value={[open,setOpen]}>
            {props.children}
        </ModalContext.Provider>
    )

}