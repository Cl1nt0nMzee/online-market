import './_index.scss';

export const FilledTextInput = ({ placeholder, label, id }) => {
    return (
        <div className="filled">
            <label htmlFor={id}> { label }</label>
            <input type="text" placeholder={ placeholder } id={id}/>
        </div>
    );
}

export const StandardTextInput = ({ placeholder, label , id}) => {
    return (
        <div className="standard">
            <label htmlFor={id}> { label }</label>
            <input type="text" placeholder={ placeholder } id={id} />
        </div>
    );
}


//export { FilledTextInput, StandardTextInput }