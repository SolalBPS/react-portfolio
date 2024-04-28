import '../Style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BadgeIcon(props) {

    return (
        <>
            <div className="shadow border border-danger d-flex align-items-center justify-content-center icon hover border p-4 m-2 rounded-circle badge-icon">
                <FontAwesomeIcon icon={props.icon} className="text-body icon-hover" />
            </div>
        </>
    );
}

export default BadgeIcon;
