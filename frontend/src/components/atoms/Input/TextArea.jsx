import './_index.scss';
import React, { useEffect, useState } from 'react';
import { HelperText } from './TextInput';

const CharacterCounter = ({current, max} ) => {

    return (
        <div className="counterWrapper">
            <p className='characterCounter'> {current} / {max}</p>
        </div>
    )
}

export const TextArea = ({id, label, placeholder, helperText, maxChars, status}) => {

    const [count, setCount] = useState(0);

    const onChange = (e) => {
        let currentCount = e.target.value.length;
        setCount(currentCount);
    }

    return (
        <div className="textArea">
            <label htmlFor={id}> {label} </label>
            <textarea id={id} cols={undefined} rows={undefined} placeholder={placeholder} onChange={onChange} maxLength={maxChars}>
            </textarea>
            {maxChars? <CharacterCounter current={count} max={maxChars}/> : null}
            {helperText? <HelperText helperText={helperText} status={status}/> : null}
        </div>
    )
}