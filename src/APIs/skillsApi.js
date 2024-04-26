export const getSkills = (lang) => {
    // Simule une requête
    // fetch(`https://portfolio-api/skills?lang=${lang}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         return data;
    //     })
    //     .catch(error => {
    //         console.error(error)
    //         return [];
    //     });

    switch (lang) {
        case 'fr':
            return {
                infos: [
                    {
                        icon: "fa-display",
                        title: "Front-end",
                        text: "Je suis compétent en HTML, CSS, et JavaScript ainsi qu'avec le langage de templating Twig. J'ai aussi de l'expérience avec le framework React JS, que j'ai utilisé pour créer ce portfolio.",
                    },
                    {
                        icon: "fa-server",
                        title: "Back-end",
                        text: "Je suis compétent en PHP natif ainsi qu'avec le framework Symfony. J'ai aussi de l'expérience avec Node JS. Je travaille au quotidien avec un framework PHP maison chez K-ZAM, la boite dans la quelle j'effectue mon alternance.",
                    },
                    {
                        icon: "fa-database",
                        title: "BDD",
                        text: "Je suis compétent en SQL et j'ai de l'expérience avec les systèmes de gestion de base de données MySQL, PostgreSQL et MariaDB. J'ai aussi de l'expérience avec l'ORM Doctrine.",
                    }
                ],
                individualSkills: ["fa-js", "fa-php", "fa-symfony", "fa-node-js", "fa-godot", "fa-mysql", "fa-mariadb", "fa-html5", "fa-css3", "fa-bootstrap"],
                title: "Mes compétences"
            }
        case 'en':
            return {
                infos: [
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
                        text: "I am competent in SQL and have experience with the MySQL, PostgreSQL and MariaDB database management systems. I also have experience with the ORM Doctrine.",
                    }
                ],
                individualSkills: ["fa-brands fa-js", "fa-brands fa-php", "fa-brands fa-symfony", "fa-brands fa-node-js", "fa-brands fa-godot", "fa-brands fa-blender", "fa-brands fa-mysql", "fa-brands fa-mariadb", "fa-brands fa-html5", "fa-brands fa-css3", "fa-brands fa-bootstrap"],
                title: "My skills"

            };
        default:
            return [];
    }
};