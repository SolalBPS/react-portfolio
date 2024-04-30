import '../Style/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Blog from './Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { login } from '../APIs/authApi';
import Login from './Login';
// Particles.js
import Particles from "@tsparticles/react";
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
        login(username, password).then(data => {
            sessionStorage.setItem('token', data.token)
            window.location.href = '/blog';
        });
    }

    return (
        <>
            {props.particlesInit &&
                <Particles id="particles-js" options={theme === 'dark' ? particlesOptionsDark : particlesOptionsLight} />
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
                        <Route path="/skills" element={<Skills language={language} />} />
                        <Route path="/projects" element={<Projects language={language} />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/login" element={<Login language={language} handleLogin={handleLogin} />} />
                    </Routes>
                </BrowserRouter>

                <Footer />
            </div >
        </>
    );
}

export default App;
