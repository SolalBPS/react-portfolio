import { useEffect, useState } from 'react';
import '../Style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
    const [title, setTitle] = useState("Contact me");
    const [infos, setInfos] = useState([
        {
            icon: "fa-id-card",
            title: "Name",
            type: "text",
            placeholder: "John Doe"
        },
        {
            icon: "fa-at",
            title: "E-mail",
            type: "email",
            placeholder: "john@doe.com"
        },
        {
            icon: "fa-comment-dots",
            title: "Comments or questions ?",
            type: "text-area",
            placeholder: "Write any question or comment here !"
        },
    ]);

    // Requête les données au render
    useEffect(() => {
        fetch("https://api/home")
            .then(response => response.json())
            .then(data => {
                console.log(data)

                setTitle(data.title);
                setInfos(data.infos);
            })
            .catch(error => {
                console.error(error)
            });
    }, []);
    
    return (
        <>
            <div className="bg-body p-4 d-flex flex-column flex-grow-1 align-items-center justify-content-start text-body-secondary fs-5">
                <h1 className="mb-5 mt-2">{title}</h1>

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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
