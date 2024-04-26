import { useEffect, useState } from "react";
import "../Style/App.css";
import me from "../Assets/me.jpg";
import InfosDisplay from "./InfosDisplay";
import Contact from "./Contact";
import { getHome } from "../APIs/homeApi";

function Home(props) {
    const [title, setTitle] = useState("");
    const [infos, setInfos] = useState([]);

    // Requête les données au render
    useEffect(() => {
        const data = getHome(props.language);
        setInfos(data.infos);
        setTitle(data.title);
    }, [props.language]);

    return (
        <>
            <div className="p-4 d-flex flex-column flex-grow-1 align-items-center justify-content-start text-body-secondary fs-5">
                <h1 className="mb-5 mt-2">{title}</h1>

                <div className="d-flex flex-row flex-wrap pb-5 border-bottom border-secondary">
                    <div className="d-flex align-items-center justify-content-center col-lg-4 col-12">
                        <img src={me} width="300px" alt="profile" className="rounded-circle border border-5 border-danger"/>
                    </div>

                    {/* Affiche les données */}
                    <div className="col-lg-8 col-12">
                        <InfosDisplay infos={infos} />
                    </div>
                </div>

                {/* Contact */}
                <Contact language={props.language} />
            </div>
        </>
    );
}

export default Home;
