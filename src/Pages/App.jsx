import '../Style/App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from './Home/Home.jsx';
import Skills from './Skills/Skills.jsx';
import Projects from './Projects/Projects.jsx';
import Blog from './Blog/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../APIs/authApi.js';
import Login from './Login/Login.jsx';
// Particles.js
import Particles from '@tsparticles/react';
import particlesOptionsDark from '../Assets/particlesOptionsDark.json'
import particlesOptionsLight from '../Assets/particlesOptionsLight.json'

function App(props) {
    // Theme
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    }

    // Language
    const [language, setLanguage] = useState(localStorage.getItem('language') ?? 'en');
    const changeLanguage = (language) => {
        setLanguage(language)
        localStorage.setItem('language', language);
    }

    // Authentification
    const handleLogin = async (username, password) => {
        return login(username, password).then(data => {
            if (data.status === 200) {
                sessionStorage.setItem('token', data.data.token)
                sessionStorage.setItem('userId', data.data.id)
                window.location.href = '/blog';
                return true;
            } else {
                return false;
            }
        })
    }

    return (
        <>
            {/* Background Particles */}
            {props.particlesInit &&
                <Particles id='particles-js' options={theme === 'dark' ? particlesOptionsDark : particlesOptionsLight} />
            }
            <div className='d-flex flex-column' style={{ minHeight: '100vh' }} data-bs-theme={theme}>
                <Header
                    changeTheme={changeTheme}
                    theme={theme}
                    changeLanguage={changeLanguage}
                    language={language}
                />

                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home language={language} />} />
                        <Route path='/skills' element={<Skills language={language} />} />
                        <Route path='/projects' element={<Projects language={language} />} />
                        <Route path='/blog' element={<Blog language={language} />} />
                        <Route path='/login' element={<Login language={language} handleLogin={handleLogin} />} />
                    </Routes>
                </BrowserRouter>

                <Footer />
            </div >
        </>
    );
}

export default App;
