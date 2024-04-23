import '../Style/App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
    const [theme, setTheme] = useState('dark');
    
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <div data-bs-theme={theme} style={{ height: '100vh' }}>
                <Header changeTheme={changeTheme} />
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        </>
    );
}

export default App;
