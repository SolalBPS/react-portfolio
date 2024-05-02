import { useEffect, useState } from 'react';
import laptop from '../../Assets/laptop.png';
import InfosDisplay from '../../Components/InfosDisplay.jsx';
import { getSkills } from '../../APIs/skillsApi.js';
import BadgeIcon from '../../Components/BadgeIcon.jsx';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Skills(props) {
    const [title, setTitle] = useState('');
    const [infos, setInfos] = useState([]);
    const [individualSkillsSitle, setIndividualSkillsTitle] = useState('');
    const [individualSkills, setIndividualSkills] = useState([]);

    // Requête les données au render
    useEffect(() => {
        const data = getSkills(props.language);
        setInfos(data.infos);
        setTitle(data.title);
        setIndividualSkillsTitle(data.individualSkillsTitle);
        setIndividualSkills(data.individualSkills);
    }, [props.language]);

    return (
        <>
            <div className='p-4 d-flex flex-column align-items-center flex-row text-body-secondary fs-5'>
                <h1 className='mb-5 mt-2'>{title}</h1>

                <div className='d-flex flex-row align-items-center justify-content-start pb-5 border-bottom'>
                    <div className='d-flex align-items-center justify-content-center col-lg-4 col-12'>
                        <img src={laptop} width='50%' alt='profile' />
                    </div>

                    <div className='col-lg-8 col-12'>
                        <InfosDisplay infos={infos} />
                    </div>
                </div>

                <h1 className='my-5'>{individualSkillsSitle}</h1>

                <div className='d-flex flex-row justify-content-center flex-wrap w-25 mb-5'>
                    {individualSkills?.map((skill, index) => {
                        return (
                            <OverlayTrigger
                                placement={index % 2 === 0 ? 'left' : 'right'}
                                overlay={
                                    <Tooltip className='fs-4'>
                                        {skill.title}
                                    </Tooltip>
                                }
                            >
                                <div
                                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                    data-aos-easing='ease-in-sine'
                                    className='rounded-circle'
                                >
                                    <BadgeIcon icon={skill.icon} />
                                </div>
                            </OverlayTrigger>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Skills;
