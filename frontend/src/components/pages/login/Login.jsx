import './Login.scss';

import RegisterForm from '../../organisms/RegisterForm';

const LogInPage = () => { 

    return (

        <div className='pageWrapper'>
            <main className='formWrapper'>
                <RegisterForm />
            </main>
        </div>

    )
}


export default LogInPage;