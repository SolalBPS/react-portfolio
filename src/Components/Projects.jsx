import '../Style/App.css';
import { useEffect, useState } from 'react';
import projects from '../Assets/projects.png';
import InfosDisplay from './InfosDisplay';

function Projects() {
    const [title, setTitle] = useState("Projects");
    const [infos, setInfos] = useState([
        {
            icon: "fa-id-card",
            title: "Leave Management web application",
            text: "During my internship at Delko i created a leave management web application for the company.\nThe application allows employees to request leaves, and managers to accept or refuse them.\nIt was created using the Symfony framework, and its Twig templates. It uses the Doctrine ORM to interact with a MariaDB Database.",
        },
        {
            icon: "fa-gamepad",
            title: "Diablo-like video game",
            text: "During my studies i created a Diablo-like video game using Godot Engine and Blender. The game features a dungeon, and a combat system inspired by the Diablo series. It also features a simple AI system for the enemies.",
        },
        {
            icon: "fa-list-ol",
            title: "Anime and manga list management web site",
            text: "Also during my studies at ESIMED, i created a web site to manage anime and manga lists. The site allows users to create lists of anime and manga, and to add them to their lists. It was created using a homemade MVC architecture and vanilla JS, with a NodeJS Backend as well as a simple MySQL Database.",
        }
    ]);

    // Requête les données au render
    useEffect(() => {
        fetch("https://api/projects")
            .then(response => response.json())
            .then(data => {
                console.log(data)

                setTitle(data.title);
                setInfos(data.infos);
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <>
            <div className="bg-body h-100 p-4 d-flex flex-row flex-row align-items-center justify-content-start text-body-secondary fs-5">
                <div className="d-flex align-items-center justify-content-center w-25 ms-5">
                    <img src={projects} width="60%" alt="profile" />
                </div>

                <InfosDisplay title={title} infos={infos} />
            </div>
        </>
    );
}

export default Projects;
