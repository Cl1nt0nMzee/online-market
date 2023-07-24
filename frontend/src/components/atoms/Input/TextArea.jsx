import './_index.scss';

const CharacterCounter = ({current, max} ) => {

    return (
        <p className='characterCounter'> {current} / {max}</p>
    )
}

export const TextArea = ({id, label, placeholder, helperText}) => {

    return (
        <div className="textArea">
            <label htmlFor={id}> {label} </label>
            <textarea id={id} cols={undefined} rows={undefined} placeholder={placeholder}>
            </textarea>
            <CharacterCounter current={'32'} max={'500'}/>
        </div>
    )
}