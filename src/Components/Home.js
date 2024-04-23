import shrek from '../Assets/shrek2.gif';
import '../Style/App.css';

function Home() {
    return (
        <div className="App bg-body h-100">
            <img src={shrek} style={{ height: '200px', width: '200px' }} alt="logo" />
            <p className='fs-1 text-body'>
                Edit <code>src/App.js</code> and save to reload.
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
