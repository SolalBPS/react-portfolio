import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shrek from '../Assets/shrek2.gif';
import '../Style/App.css';

function Header(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-secondary position-sticky top-0">
                <div class="container-fluid">
                    <button class="nav-link">
                        <img src={shrek} alt='logo' width='50px' height='50px' />
                    </button>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button class="nav-link" onClick={props.changeTheme}>
                                    <FontAwesomeIcon icon="fa-solid fa-lightbulb" className='me-2' />
                                    Change theme
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
