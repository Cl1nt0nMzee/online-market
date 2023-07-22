import './_index.scss';

export const HelperText = ({helperText}) => {

    return (
        <p className='helperText'> {helperText} </p>
    );
}


export const FilledTextInput = ({ placeholder, label, id }) => {
    return (
        <div className="filled">
            <label htmlFor={id}> { label }</label>
            <input type="text" placeholder={ placeholder } id={id}/>
        </div>
    );
}

export const StandardTextInput = ({ placeholder, label , id, helperText}) => {
    return (
        <div className="standard">
            <label htmlFor={id}> { label }</label>
            <input type="text" placeholder={ placeholder } id={id} />
            {helperText? <HelperText helperText={helperText}/> : null}
        </div>
    );
}


//export { FilledTextInput, StandardTextInput }