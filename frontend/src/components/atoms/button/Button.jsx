import React, { useState } from 'react';
import './_index.scss'

export const PrimaryButton = ({ text, size , button_function}) => {
    
    const [disabled, setDisabled] = useState(false);
    const handleClick = () => {
        setDisabled(true);
    }
    size == undefined ? size = '' : size = ` ${size}`;
    button_function == undefined ? button_function = {handleClick} : button_function = `${button_function}`;
    return (
        <button className={`primary ${size}`} type="button" disabled={disabled} onClick={handleClick}>
        {text}
        </button>
    );
}

export const SecondaryButton = ({ text, size , button_function}) => {
    const [disabled, setDisabled] = useState(false);
    const handleClick = () => {
        setDisabled(true);
    }

    size == undefined ? size = '' : size = ` ${size}`;
    button_function == undefined ? button_function = {handleClick} : button_function = `${button_function}`;
    return (
        <button className={`secondary ${size}`} type="button" disabled={disabled} onClick={handleClick} >
        Secondary Button
        </button>
    );
}

export const TertiaryButton = () => {
    return (
        <button className="tertiary" type="button">
        Tertiary Button
        </button>
    );
}

