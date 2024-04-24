import { useEffect, useState } from 'react';
import '../Style/App.css';
import laptop from "../Assets/laptop.png";
import InfosDisplay from './InfosDisplay';

function Skills() {
    const [title, setTitle] = useState("My skills");
    const [infos, setInfos] = useState([
        {
            icon: "fa-display",
            title: "Front-end",
            text: "I am competent in HTML, CSS, and JavaScript as well a the templating language Twig. I also have experience with the React JS framework, which i used to create this portfolio.",
        },
        {
            icon: "fa-server",
            title: "Back-end",
            text: "I am competent in vanilla PHP as well as the Symfony framework. I also have experience with the Node JS runtime environment. I also work on a daily basis with a homemade PHP framework at K-ZAM.",
        },
        {
            icon: "fa-database",
            title: "DB",
            text: "I am competent in SQL and have experience with the MySQL and PostgreSQL database management systems. I also have experience with the ORM Doctrine.",
        }
    ]);

    // Requête les données au render
    useEffect(() => {
        fetch("https://api/skills")
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
                    <img src={laptop} width="80%" alt="profile" />
                </div>

                <InfosDisplay title={title} infos={infos} />
            </div>
        </>
    );
}

export default Skills;
