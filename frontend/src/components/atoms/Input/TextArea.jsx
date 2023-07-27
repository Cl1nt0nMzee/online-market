import './_index.scss';

import { HelperText } from './TextInput';

const CharacterCounter = ({current, max} ) => {

    return (
        <div className="counterWrapper">
            <p className='characterCounter'> {current} / {max}</p>
        </div>
    )
}

export const TextArea = ({id, label, placeholder, helperText, maxChars}) => {

    return (
        <div className="textArea">
            <label htmlFor={id}> {label} </label>
            <textarea id={id} cols={undefined} rows={undefined} placeholder={placeholder}>
            </textarea>
            {maxChars? <CharacterCounter current={'32'} max={maxChars}/> : null}
            {helperText? <HelperText helperText={helperText}/> : null}
        </div>
    )
}