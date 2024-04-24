import brand from '../Assets/brand.png';

function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center px-3 py-2 border-top bg-body-tertiary">
                <p className="mb-0 text-body-secondary">© Solal B</p>

                <a className="nav-link me-3" href="/">
                    <img src={brand} alt='logo' width='50px' height='50px' />
                </a>

                
                <div></div>
            </footer>
        </>
    );
}

export default Footer;
