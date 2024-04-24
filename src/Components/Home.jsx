import { useEffect, useState } from "react";
import "../Style/App.css";
import me from "../Assets/me.jpg";
import InfosDisplay from "./InfosDisplay";

function Home() {
    const [title, setTitle] = useState("Welcome to Solal's portfolio");
    const [infos, setInfos] = useState([
        {
            icon: "fa-user",
            title: "About me",
            text: "I am Solal Bompais, a 22 years old computer science student as well as full-stack web developper intern.",
        },
        {
            icon: "fa-graduation-cap",
            title: "Studies",
            text: "I have an STI2D BAC which is unrelated to computer science, a DUT and a License in computer science, and i am currently studying towards a Master's degree in computer science at ESIMED, Marseille.",
        },
        {
            icon: "fa-briefcase",
            title: "Work experiences",
            text: "My first work experience was an internship at Delko Development, a car repair shop franchise company, where i created a leave management web application for the company. I am currently working as a full-stack web developper intern at K-ZAM, an ERP/Web applications for professionals company.",
        }
    ]);
    const [cats, setCats] = useState([]);

    // Requête les données au render
    useEffect(() => {
        fetch("https://api/home")
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

    // Requête des images de chats pour avoir assez de contenu pour scroll
    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?api_key=live_6wvN7RANQoTgRXQOCCE1670Udn58Vj0GZNxxbrEG0I8SemcoDKShdkEEIDzWWW72&limit=10')
            .then(response => response.json())
            .then(data => {
                setCats(data);
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <>
            <div className="bg-body p-4 d-flex flex-column flex-grow-1 align-items-center justify-content-start text-body-secondary fs-5">
                <h1 className="mb-5 mt-2">{title}</h1>

                <div className="d-flex flex-row">
                    <div className="d-flex align-items-center justify-content-center w-25 ms-5">
                        <img src={me} width="80%" alt="profile" className="rounded-circle border border-5 border-danger" />
                    </div>

                    <InfosDisplay infos={infos} />
                </div>

                <h1 className="mt-5">Here are some cats to have enough content to scroll</h1>
                <div className="d-flex flex-row flex-wrap w-50 justify-content-center mt-2">
                    {cats.map((cat) => {
                        return (
                            <img src={cat.url} width="300px" height="300px" alt="cat" className="rounded-circle border border-5 border-danger m-4" />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Home;
