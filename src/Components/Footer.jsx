import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brand from '../Assets/brand.png';
import '../Style/App.css';

function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center px-3 py-2 bg-blur text-body-secondary">
                <div></div>

                <a className="nav-link" href="/">
                    <img src={brand} alt='logo' width='50px' height='50px' />
                </a>

                {/* Back to top */}
                <a href="#top" className="icon-btn nav-link d-flex align-items-center justify-content-center rounded bounce-hover">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up" className='icon-hover' size='lg' />
                </a>
            </footer>
        </>
    );
}

export default Footer;
