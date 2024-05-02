import '../Style/App.css';
import { useEffect, useState } from 'react';
import projects from '../Assets/projects.png';
import InfosDisplay from './InfosDisplay';
import { getProjects } from '../APIs/projectsApi';

function Projects(props) {
    const [title, setTitle] = useState('');
    const [infos, setInfos] = useState([]);

    // Requête les données au render
    useEffect(() => {
        const data = getProjects(props.language);
        setInfos(data.infos);
        setTitle(data.title);
    }, [props.language]);

    return (
        <>
            <div className='p-4 h-100 d-flex flex-column align-items-center flex-row text-body-secondary fs-5' style={{ minHeight: '85vh' }}>
                <h1 className='mb-5 mt-2'>{title}</h1>

                <div className='d-flex flex-row align-items-center justify-content-start'>
                    <div className='d-flex align-items-center justify-content-center col-lg-4 col-12'>
                        <img src={projects} width='50%' className='bg-blur' alt='projects' />
                    </div>

                    <div className='col-lg-8 col-12'>
                        <InfosDisplay infos={infos} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
