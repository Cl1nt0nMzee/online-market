import { useRef, useState, useEffect } from "react";
import { DangerButton, PrimaryButton, SecondaryButton, TertiaryButton } from "../atoms/button/Button";
import { CheckBox, CheckBox_1 } from "../atoms/Checkbox/CheckBox";
import { PasswordInput } from "../atoms/Input/PasswordInput";
import { TextArea } from "../atoms/Input/TextArea";
import { HelperText } from "../atoms/Input/TextInput";

import { FilledTextInput, StandardTextInput } from '../atoms/Input/TextInput';
import {ToggleSwitch} from "../atoms/ToggleSwitch/ToggleSwitch";
//import Textarea from '../atoms/Input/Textarea';


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,24}$/;

const RegisterForm = () => {

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);


    
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    return (
        <form>
            <h1 className="typ__headline Bold">Lorem Ipsum </h1>
            <p className="typ__captions"> 
            Similique et praesentium architecto aliquid nostrum quos nihil hic distinctio voluptatem necessitatibus eius sit fugiat consequuntur earum accusantium tempore labore repellendus expedita excepturi magnam fugit, commodi doloribus. Cumque, rerum consequatur!</p> 

            <StandardTextInput id={'name'} placeholder={'Enter your name'} label={'Name'}/>
            < PasswordInput placeholder={'Enter your password'} id={'password'} label={'Password'} helperText={'Lorem Ipsum'}/>
            < TextArea placeholder={'Enter some text here'} label={'Text Area'} maxChars={30} helperText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} status={'warning'}/>

            < PrimaryButton  text={"Log In Now"} />
            <SecondaryButton  text={"Log In Now"}/>
            <ToggleSwitch />
            < CheckBox />
            < CheckBox_1 labal={'Lorem Ipsum'} />
            <HelperText helperText={'Lorem Ipsum'} status={'error'}/>
        </form>
    );
};

export default RegisterForm;