import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brand from '../Assets/brand.png';
import french from '../Assets/french.png';
import us from '../Assets/english.png';
import '../Style/Header.css';
import { useEffect, useState } from 'react';
import { getNavbar } from '../APIs/navbarApi';

function Header(props) {
    const [navigation, setNavigation] = useState([]);

    // Requête les données au render
    useEffect(() => {
        setNavigation(getNavbar(props.language));
    }, [props.language]);

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

                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav d-flex align-items-center justify-content-between w-100">
                            {/* Navigation */}
                            <div className='d-flex'>
                                {navigation.map((nav, idx) => {
                                    return (
                                        <a key={idx} href={nav.url} className={`${idx < navigation.length - 1 && 'border-end border-secondary'} nav-link px-4 d-flex align-items-center justify-content-center`}>
                                            {nav.title}
                                        </a>
                                    )
                                })}
                            </div>

                            {/* Utilité */}
                            <div className='d-flex gap-5'>
                                {/* Langues */}
                                <div className="dropdown d-flex align-items-center">
                                    <button className="bg-transparent border border-secondary rounded icon-dropdown dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={props.language === 'fr' ? french : us} alt='french-flag' className='me-2' width='25px' height='25px' />
                                    </button>
                                    <ul className="dropdown-menu w-100">
                                        <button className="dropdown-item" onClick={() => props.changeLanguage('fr')}>
                                            <img src={french} alt='french-flag' className='me-2' width='20%' height='20%' /> French
                                        </button>
                                        <button className="dropdown-item" onClick={() => props.changeLanguage('en')}>
                                            <img src={us} alt='us-flag' className='me-2' width='20%' height='20%' /> English
                                        </button>
                                    </ul>
                                </div>

                                {/* Thème */}
                                <button className="icon-btn nav-link d-flex align-items-center justify-content-center border border-secondary rounded" onClick={changeTheme}>
                                    <FontAwesomeIcon icon={props.theme === 'light' ? 'fa-moon' : 'fa-sun'} />
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
