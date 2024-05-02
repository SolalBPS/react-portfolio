import '../Style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { getLoginTrans } from '../APIs/authApi';

function Login(props) {
    const [title, setTitle] = useState('');
    const [infos, setInfos] = useState({});
    const [submit, setSubmit] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    // Inputs
    const [ident, setIdent] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const data = getLoginTrans(props.language);
        setInfos(data.infos);
        setTitle(data.title);
        setErrorMsg(data.error);
        setSubmit(data.submit);
    }, [props.language]);

    const handleLogin = async () => {
        const res = await props.handleLogin(ident, password);
        if (!res) {
            setError(true);
        }
    }

    return (
        <>
            <div className='w-100 d-flex flex-column justify-content-start align-items-center my-5 text-body-secondary' style={{ minHeight: '74vh' }}>
                <h1 className='mb-5 mt-2'>{title}</h1>

                <div className='d-flex flex-column align-items-center w-25 bg-body-tertiary border border-secondary rounded-4 p-4'>
                    {error &&
                        <div className='text-danger fs-2 mb-2'>
                            {errorMsg}.
                        </div>
                    }
                    <div className='w-100 d-flex flex-row align-items-start justify-content-start gap-3 mb-2'>
                        <FontAwesomeIcon icon={infos.ident?.icon ?? 'fa-user'} className='text-danger mt-1' size='xl' />
                        <div className='w-100 d-flex flex-column align-items-start justify-content-start'>
                            <h3 className='border-bottom border-danger form-label'>{infos.ident?.title}</h3>
                            <input className='w-100 form-control' type={infos.ident?.type} placeholder={infos.ident?.placeholder}
                                value={ident} onChange={(e) => setIdent(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='w-100 d-flex flex-row align-items-start justify-content-start gap-3 mb-2'>
                        <FontAwesomeIcon icon={infos.password?.icon ?? 'fa-user'} className='text-danger mt-1' size='xl' />
                        <div className='w-100 d-flex flex-column align-items-start justify-content-start'>
                            <h3 className='border-bottom border-danger form-label'>{infos.password?.title}</h3>
                            <input className='w-100 form-control' type={infos.password?.type} placeholder={infos.password?.placeholder}
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button className='btn bg-body border border-secondary rounded shadow-sm mt-3 w-25' onClick={handleLogin}>{submit}</button>
                </div>
            </div>
        </>
    );
}

export default Login;
