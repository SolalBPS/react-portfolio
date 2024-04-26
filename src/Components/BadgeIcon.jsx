import '../Style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function BadgeIcon(props) {

    return (
        <>
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip className='fs-5'>
                        {props.tooltip}
                    </Tooltip>
                }
            >
                <div
                    data-aos={props.index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className='border border-danger d-flex align-items-center justify-content-center icon hover border p-4 m-2 rounded-circle badge-icon'
                >
                    <FontAwesomeIcon icon={props.icon} className='text-body icon-hover' />
                </div>
            </OverlayTrigger>
        </>
    );
}

export default BadgeIcon;
