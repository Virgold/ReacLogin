import React from "react";
import "../App.css";
// import { Icon } from '@iconify/react';
// import { useState } from "react";


export default function Validator(props){
    return(
        <>
        <div> VALID </div>
        <button onClick={props.handleSubmit}>back to Login</button>
        </>
    )
}