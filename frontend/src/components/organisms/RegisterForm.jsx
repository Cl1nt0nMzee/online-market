import { useRef, useState, useEffect } from "react";


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
            Similique et praesentium architecto aliquid nostrum quos nihil hic distinctio voluptatem necessitatibus eius sit fugiat consequuntur earum accusantium tempore labore repellendus expedita excepturi magnam fugit, commodi doloribus. Cumque, rerum consequatur!
            Aliquid veniam ab fugit. Sapiente dolorum at corporis eaque, unde sunt vero quaerat ab consectetur eveniet quas. Maxime possimus tenetur, vitae cumque ducimus vel aspernatur beatae temporibus, rem doloribus magni.</p>
        </form>
    );
};

export default RegisterForm;