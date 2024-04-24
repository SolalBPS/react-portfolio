import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brand from '../Assets/brand.png';
import french from '../Assets/french.png';
import us from '../Assets/english.png';
import '../Style/Header.css';

function Header(props) {
    const changeTheme = () => {
        props.changeTheme();
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary position-sticky top-0 fs-5">
                <div className="container-fluid">
                    <a className="nav-link me-3" href="/">
                        <img src={brand} alt='logo' width='50px' height='50px' />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav d-flex align-items-center justify-content-between w-100">
                            {/* Navigation */}
                            <div className='d-flex'>
                                <a href='/' className="nav-link border-end nav-width d-flex align-items-center justify-content-center">
                                    Home
                                </a>
                                <a href='/skills' className="nav-link border-end nav-width d-flex align-items-center justify-content-center">
                                    Skills
                                </a>
                                <a href='/projects' className="nav-link border-end nav-width d-flex align-items-center justify-content-center">
                                    Projects
                                </a>
                                <a href='/contact' className="nav-link nav-width d-flex align-items-center justify-content-center">
                                    Contact
                                </a>
                            </div>


                            <div className='d-flex gap-3'>
                                {/* Langues */}
                                <div className="dropdown d-flex align-items-center">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FontAwesomeIcon icon="fa-solid fa-language" /> Language
                                    </button>
                                    <ul className="dropdown-menu w-100">
                                        <button className="dropdown-item" onClick={() => props.changeLanguage('fr-FR')}>
                                            <img src={french} alt='french-flag' className='me-2' width='10%' height='10%' /> French
                                        </button>
                                        <button className="dropdown-item" onClick={() => props.changeLanguage('en-US')}>
                                            <img src={us} alt='us-flag' className='me-2' width='10%' height='10%' /> English
                                        </button>
                                    </ul>
                                </div>

                                {/* Thème */}
                                <button className="nav-link d-flex align-items-center" onClick={changeTheme}>
                                    <FontAwesomeIcon icon={props.theme === 'light' ? 'fa-moon' : 'fa-sun'} className='me-2' />
                                    Theme
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
