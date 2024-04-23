import shrek from '../Assets/shrek2.gif';
import '../Style/App.css';

function Home() {
    return (
        <div className="App bg-body h-100 d-flex flex-column align-items-center justify-content-center">
            <img src={shrek} style={{ height: '200px', width: '200px' }} alt="logo" />
            <p className='fs-1 text-body'>
                Welcome to the Shrek's world
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
        </div>
    );
}

export default Home;
