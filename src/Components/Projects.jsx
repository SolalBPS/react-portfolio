import '../Style/App.css';
import { useEffect, useState } from 'react';
import projects from '../Assets/projects.png';
import InfosDisplay from './InfosDisplay';
import { getProjects } from '../APIs/projectsApi';

function Projects(props) {
    const [title, setTitle] = useState("");
    const [infos, setInfos] = useState([]);

    // Requête les données au render
    useEffect(() => {
        const data = getProjects(props.language);
        console.log(data)
        setInfos(data.infos);
        setTitle(data.title);
    }, [props.language]);

    return (
        <>
            <div className="bg-body h-100 p-4 d-flex flex-row flex-row align-items-center justify-content-start text-body-secondary fs-5">
                <div className="d-flex align-items-center justify-content-center w-25 ms-5">
                    <img src={projects} width="60%" alt="profile" />
                </div>

                <InfosDisplay title={title} infos={infos} />
            </div>
        </>
    );
}

export default Projects;
