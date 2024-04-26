import '../Style/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
// Particles.js
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import particlesOptionsDark from '../particlesOptionsDark.json'
import particlesOptionsLight from '../particlesOptionsLight.json'


function App() {
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

    // Particles.js
    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
            {init &&
                <Particles id="particles-js" options={theme === 'dark' ? particlesOptionsDark : particlesOptionsLight} />
            }
            <div className='d-flex flex-column' style={{ height: '100vh' }} data-bs-theme={theme}>
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
