import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brand from '../Assets/brand.png';
import french from '../Assets/french.png';
import us from '../Assets/english.png';
import '../Style/App.css';
import { useEffect, useState } from 'react';
import { getNavbar } from '../APIs/navbarApi';

function Header(props) {
    const [navigation, setNavigation] = useState([]);
    const [languages, setLanguages] = useState([]);

    // Requête les données au render
    useEffect(() => {
        const data = getNavbar(props.language);
        setNavigation(data.navigation);
        setLanguages(data.languages);
    }, [props.language]);

    // Source: W3Schools
    const onScroll = () => {
        // Progress bar
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollProgress = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrollProgress + "%";

        // Opacité de la navbar
        document.getElementById("navBar").style.setProperty('--bs-bg-opacity', (100 - scrollProgress) / 100);
        // Hue-rotate de la navbar
        // document.getElementById("navBar").style.setBackdropFilter = `hue-rotate(${scrollProgress * 3.6}deg)`;
    }
    window.onscroll = onScroll;

    return (
        <>
            <nav id="navBar" className="navbar navbar-expand-lg bg-blur bg-body-secondary position-sticky top-0 fs-5 z-3 pb-0 shadow-sm d-flex flex-column">
                <div className="container-fluid pb-2">
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
                                {navigation?.map((nav, idx) => {
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
                                <div className="dropdown-center d-flex align-items-center">
                                    <button className="bg-transparent border-0 rounded icon-dropdown dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={props.language === 'fr' ? french : us} alt={props.language} className='me-2' width='25px' height='25px' />
                                    </button>
                                    <ul className="dropdown-menu w-100">
                                        {languages?.map((lang, idx) => {
                                            return (
                                                <button key={idx} className={`dropdown-item ${props.language === lang.id && 'active'}`} onClick={() => props.changeLanguage(lang.id)}>
                                                    <img src={lang.id === 'fr' ? french : us} alt={lang.id} className='me-2' width='20%' height='20%' /> {lang.title}
                                                </button>
                                            )
                                        })}
                                    </ul>
                                </div>

                                {/* Thème */}
                                <button className="icon-btn nav-link d-flex align-items-center justify-content-center rounded" onClick={props.changeTheme}>
                                    <FontAwesomeIcon icon={props.theme === 'light' ? 'fa-moon' : 'fa-sun'} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Progress bar */}
                <div class="progress-container d-flex justify-content-center">
                    <div class="progress-bar bg-danger" id="progressBar"></div>
                </div>
            </nav>
        </>
    );
}

export default Header;
