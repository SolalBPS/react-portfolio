import { useEffect, useState } from 'react';
import '../../Style/App.css';
import me from '../../Assets/me.jpg';
import InfosDisplay from '../../Components/InfosDisplay.jsx';
import Contact from './Components/Contact.jsx';
import { getHome } from '../../APIs/homeApi.js';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import BadgeIcon from '../../Components/BadgeIcon.jsx';
import Timeline from './Components/Timeline.jsx';

function Home(props) {
    const [title, setTitle] = useState('');
    const [infos, setInfos] = useState([]);
    const [likesTitle, setLikesTitles] = useState('');
    const [likes, setLikes] = useState([]);
    const [timelineTitle, setTimelineTitle] = useState('');
    const [timeline, setTimeline] = useState([]);

    // Requête les données au render
    useEffect(() => {
        const data = getHome(props.language);
        setInfos(data.infos);
        setTitle(data.title);
        setLikesTitles(data.likesTitle);
        setLikes(data.likes);
        setTimelineTitle(data.timelineTitle);
        setTimeline(data.timeline);
    }, [props.language]);

    return (
        <>
            <div className='p-4 d-flex flex-column flex-grow-1 align-items-center justify-content-start text-body-secondary fs-5'>
                {/* A propos */}
                <h1 className='mb-5 mt-2'>{title}</h1>
                <div className='d-flex flex-row flex-wrap pb-5 border-bottom border-secondary'>
                    <div className='d-flex align-items-center justify-content-center col-lg-4 col-12'>
                        <img src={me} width='300px' alt='profile' className='shadow rounded-circle border border-5 border-danger'/>
                    </div>

                    {/* Affiche les données */}
                    <div className='col-lg-8 col-12'>
                        <InfosDisplay infos={infos} />
                    </div>
                </div>

                {/* Timeline */}
                <h1 className='my-5'>{timelineTitle}</h1>
                <div className='pb-5 border-bottom border-secondary w-100 d-flex align-items-center justify-content-center'>
                    <Timeline infos={timeline} />
                </div>

                {/* J'aime */}
                <h1 className='my-5'>{likesTitle}</h1>
                <div className='d-flex flex-row justify-content-center flex-wrap gap-5 w-100 pb-5 border-bottom border-secondary'>
                    {likes?.map((like, index) => {
                        return (
                            <OverlayTrigger
                                key={index}
                                placement={index % 2 === 0 ? 'bottom' : 'top'}
                                overlay={
                                    <Tooltip className='fs-4'>
                                        {like.title}
                                    </Tooltip>
                                }
                            >
                                <div
                                    data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
                                    data-aos-easing='ease-in-sine'
                                >
                                    <BadgeIcon icon={like.icon} />
                                </div>
                            </OverlayTrigger>
                        );
                    })}
                </div>

                {/* Contact */}
                <Contact language={props.language} />
            </div>
        </>
    );
}

export default Home;
