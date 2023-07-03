import './TextInput.css';

const FilledTextInput = ({ placeholder, label }) => {
    return (
        <div className="filled">
            <label for="exampleFormControlInput1"> { label }</label>
            <input type="text" placeholder={ placeholder } />
        </div>
    );
}

const StandardTextInput = ({ placeholder, label }) => {
    return (
        <div className="standard">
            <label for="exampleFormControlInput1"> { label }</label>
            <input type="text" placeholder={ placeholder } />
        </div>
    );
}


export { FilledTextInput, StandardTextInput }