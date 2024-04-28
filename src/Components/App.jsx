import '../Style/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
// Particles.js
import Particles from "@tsparticles/react";
import particlesOptionsDark from '../Assets/particlesOptionsDark.json'
import particlesOptionsLight from '../Assets/particlesOptionsLight.json'


function App(props) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    }

    const [language, setLanguage] = useState(localStorage.getItem('language') ?? 'en');
    const changeLanguage = (language) => {
        setLanguage(language)
        localStorage.setItem('language', language);
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
                        <Route index element={<Home theme={theme} language={language} />} />
                        <Route path="/skills" element={<Skills theme={theme} language={language} />} />
                        <Route path="/projects" element={<Projects theme={theme} language={language} />} />
                        <Route path="/contact" element={<Contact theme={theme} language={language} />} />
                    </Routes>
                </BrowserRouter>

                <Footer />
            </div>
        </>
    );
}

export default App;
