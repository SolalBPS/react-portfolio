import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Style/App.css';

function InfosDisplay(props) {
    return (
        <>
            <div className="bg-body-tertiary border border-secondary rounded-4 p-4 d-flex flex-column align-items-start align-items-sm-center justify-content-start w-100">
            {/* <div className="bg-body-tertiary bg-opacity-25 bg-blur border border-secondary rounded-4 p-4 d-flex flex-column align-items-start align-items-sm-center justify-content-start w-100"> */}
                {props.title &&
                    <h1>{props.title}</h1>
                }
                {props.infos.map((info, index) => {
                    return (
                        <div key={index} className="w-100 d-flex flex-row align-items-start justify-content-start gap-3">
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
