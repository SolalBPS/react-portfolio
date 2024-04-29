import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/App.css';
import App from './Components/App';

// ASSETS LIBS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Fontawesome
library.add(fas, fab)
Aos.init();

// Particles.js
let init = false;
await initParticlesEngine(async (engine) => {
    await loadSlim(engine);
}).then(() => {
    init = true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App particlesInit={init} />
    </React.StrictMode>
);