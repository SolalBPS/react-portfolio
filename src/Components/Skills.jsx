import { useEffect, useState } from 'react';
import '../Style/Skills.css';
import laptop from "../Assets/laptop.png";
import InfosDisplay from './InfosDisplay';
import { getSkills } from '../APIs/skillsApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills(props) {
    const [title, setTitle] = useState("");
    const [infos, setInfos] = useState([]);
    const [individualSkills, setIndividualSkills] = useState([]);

    // Requête les données au render
    useEffect(() => {
        const data = getSkills(props.language);
        setInfos(data.infos);
        setTitle(data.title);
        setIndividualSkills(data.individualSkills);
    }, [props.language]);

    return (
        <>
            <div className="bg-body h-100 p-4 d-flex flex-column flex-row text-body-secondary fs-5">
                <div className='d-flex flex-row align-items-center justify-content-start'>
                    <div className="d-flex align-items-center justify-content-center w-25 ms-5">
                        <img src={laptop} width="80%" alt="profile" />
                    </div>

                    <InfosDisplay title={title} infos={infos} />
                </div>

                <div className='d-flex flex-row justify-content-center flex-wrap'>
                    {individualSkills.map((skill) => {
                        return (
                            <div className='d-flex align-items-center justify-content-center icon hover border p-4 mx-2 rounded-circle skill-icon'>
                                <FontAwesomeIcon icon={skill} style={{ fontSize: "100px" }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Skills;
