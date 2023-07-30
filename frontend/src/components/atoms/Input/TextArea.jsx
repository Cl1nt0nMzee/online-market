import './_index.scss';
import React, { useEffect, useState } from 'react';
import { HelperText } from './TextInput';

const CharacterCounter = ({current, max} ) => {

    let style= ''; let warningmessage = '';
    let _curr = parseInt(current);
    let _max = parseInt(max);
    let constant = _curr / _max;

    if (constant > 0.8) {
        style = 'characterCounter warning';
        warningmessage = '';

        if (constant > 0.9) {
            style = 'characterCounter error';
            warningmessage = '';
            if (constant == 1) {
                warningmessage = 'Character limit exceeded!    ';
            }
            
        }
    } else {
        style = 'characterCounter';
        warningmessage = '';
    }
    return (
        <div className="counterWrapper">
            <p className={style}> {warningmessage} {current} / {max}</p>
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