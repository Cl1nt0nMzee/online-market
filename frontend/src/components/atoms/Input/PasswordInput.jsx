import './_index.scss';
import { useState } from 'react';
import { HelperText } from './TextInput';

export const PasswordInput = ({id, label, placeholder, helperText}) => {
    
    const [inputType, setInputType] = useState("password");

    const handleClick = (e) => {
        e.preventDefault();

        if (inputType === "password") {
            // alert('text'),
            setInputType("text")
        } else {
            // alert('password')
            setInputType("password")
        }
    } 

    return (
        <div className="password">
            <label htmlFor={id}> { label }</label>
            <input type={inputType} placeholder={ placeholder } id={id}/>
            <button className="switch" onClick={handleClick}> x </button>
            {helperText? <HelperText helperText={helperText}/> : null}
        </div>
    )
}