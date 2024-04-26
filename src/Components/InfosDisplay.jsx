import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Style/App.css';

function InfosDisplay(props) {
    return (
        <>
            <div className="d-flex flex-column align-items-start align-items-sm-center justify-content-start w-100">
                {props.title &&
                    <h1>{props.title}</h1>
                }
                {props.infos.map((info, index) => {
                    return (
                        <div key={index} className="w-75 d-flex flex-row align-items-start justify-content-start gap-3">
                            <FontAwesomeIcon icon={info?.icon} className="text-danger mt-1" size="xl" />
                            <div className="d-flex flex-column align-items-start justify-content-start">
                                <h3 className="border-bottom border-danger">{info?.title}</h3>
                                <p>{info?.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default InfosDisplay;
