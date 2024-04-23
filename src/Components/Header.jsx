import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shrek from '../Assets/shrek2.gif';
import french from '../Assets/french.png';
import us from '../Assets/english.png';
import '../Style/App.css';

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary position-sticky top-0">
                <div className="container-fluid">
                    <a className="nav-link me-3" href="/">
                        <img src={shrek} alt='logo' width='50px' height='50px' />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav d-flex align-items-center justify-content-between w-100">
                            <button className="nav-link" onClick={props.changeTheme}>
                                <FontAwesomeIcon icon="fa-solid fa-lightbulb" className='me-2' />
                                Change theme
                            </button>
                            {/* <DropdownButton title={<><FontAwesomeIcon icon="fa-solid fa-language" /> Language </>}>
                                <Dropdown.Item onClick={() => props.changeLanguage('fr-FR')} className='d-flex align-items-center gap-3'>
                                    <img src={french} alt='french-flag' width='10%' height='10%' /> French
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => props.changeLanguage('en-US')} className='d-flex align-items-center gap-3'>
                                    <img src={us} alt='us-flag' width='10%' height='10%' /> English
                                </Dropdown.Item>
                            </DropdownButton> */}
                            <div className="dropstart">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon="fa-solid fa-language" /> Language
                                </button>
                                <ul className="dropdown-menu">
                                    <button className="dropdown-item" onClick={() => props.changeLanguage('fr-FR')}>
                                        <img src={french} alt='french-flag' width='10%' height='10%' /> French
                                    </button>
                                    <button className="dropdown-item" onClick={() => props.changeLanguage('en-US')}>
                                        <img src={us} alt='us-flag' width='10%' height='10%' /> English
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
