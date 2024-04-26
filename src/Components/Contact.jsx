import { useEffect, useState } from 'react';
import '../Style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getContact } from '../APIs/contactApi';

function Contact(props) {
    const [title, setTitle] = useState("");
    const [infos, setInfos] = useState([]);

    // Requête les données au render
    useEffect(() => {
        const data = getContact(props.language);
        setInfos(data.infos);
        setTitle(data.title);
    }, [props.language]);
    
    return (
        <>
            <div className="w-100 d-flex flex-column justify-content-center align-items-center my-5">
                <h1 className="mb-3">{title}</h1>

                <div className="d-flex flex-row h-100">
                    <div className="d-flex flex-column align-items-center justify-content-start w-100">
                        {infos.map((info, index) => {
                            return (
                                <div key={index} className="w-100 d-flex flex-row align-items-start justify-content-start gap-3">
                                    <FontAwesomeIcon icon={info?.icon} className="text-danger mt-1" size="xl" />
                                    <div className="w-100 d-flex flex-column align-items-start justify-content-start">
                                        <h3 className="border-bottom border-danger form-label">{info?.title}</h3>
                                        {info?.type === 'text-area'
                                            ? <textarea className='w-100 form-control' placeholder={info?.placeholder}>{info?.text}</textarea> 
                                            : <input className='w-100 form-control' type={info?.type} placeholder={info?.placeholder}>{info?.text}</input>}
                                    </div>
                                </div>
                            );
                        })}
                        <button className='btn btn-secondary mt-4 w-25'>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
