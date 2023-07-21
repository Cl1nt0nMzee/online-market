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
        {text}
        </button>
    );
}

export const TertiaryButton = ({ text, size , button_function}) => {
    const [disabled, setDisabled] = useState(false);
    const handleClick = () => {
        setDisabled(true);
    }

    size == undefined ? size = '' : size = ` ${size}`;
    button_function == undefined ? button_function = {handleClick} : button_function = `${button_function}`;

    return (
        <button className={`tertiary ${size}`} type="button" disabled={disabled} onClick={handleClick}>
       {text}
        </button>
    );
}

export const DangerButton = ({text, size, button_function}) => {
    const [disabled, setDisabled] = useState(false);
    const handleClick = () => {
        setDisabled(true);
    }

    size == undefined ? size = '' : size = ` ${size}`;
    button_function == undefined ? button_function = handleClick : button_function = `${button_function}`;

    return (
        <button className={`danger ${size}`} type="button" disabled={disabled} onClick={button_function}>
       {text}
        </button>
    )
}

