import '../Style/App.css';
import shrek from '../Assets/shrek2.gif';

function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center px-3 py-1 border-top bg-body-tertiary">
                <p className="col-md-4 mb-0 text-body-secondary">© Solal B</p>

                <a className="nav-link me-3 border rounded" href="/">
                    <img src={shrek} alt='logo' width='50px' height='50px' />
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><button className="nav-link px-2 text-body-secondary">Home</button></li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;
