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
                individualSkillsTitle: "Technologies & outils avec lesquelles je suis à l'aise",
                individualSkills: [
                    {
                        title: "JavaScript",
                        icon: "fa-brands fa-js"
                    },
                    {
                        title: "PHP",
                        icon: "fa-brands fa-php"
                    },
                    {
                        title: "Symfony",
                        icon: "fa-brands fa-symfony"
                    },
                    {
                        title: "Node JS",
                        icon: "fa-brands fa-node"
                    },
                    {
                        title: "HTML5",
                        icon: "fa-brands fa-html5"
                    },
                    {
                        title: "CSS3",
                        icon: "fa-brands fa-css3"
                    },
                    {
                        title: "Bootstrap",
                        icon: "fa-brands fa-bootstrap"
                    },
                    {
                        title: "React",
                        icon: "fa-brands fa-react"
                    },
                    {
                        title: "Docker",
                        icon: "fa-brands fa-docker"
                    },
                    {
                        title: "Windows",
                        icon: "fa-brands fa-windows"
                    },
                    {
                        title: "Linux",
                        icon: "fa-brands fa-linux"
                    },
                    {
                        title: "Ubuntu",
                        icon: "fa-brands fa-ubuntu"
                    },
                    {
                        title: "Python",
                        icon: "fa-brands fa-python"
                    },
                    {
                        title: "Git",
                        icon: "fa-brands fa-git"
                    },
                    {
                        title: "Github",
                        icon: "fa-brands fa-github"
                    },
                    {
                        title: "Jira",
                        icon: "fa-brands fa-jira"
                    }
                ],
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
                individualSkillsTitle: "Technologies & tools I am familiar with",
                individualSkills: [
                    {
                        title: "JavaScript",
                        icon: "fa-brands fa-js"
                    },
                    {
                        title: "PHP",
                        icon: "fa-brands fa-php"
                    },
                    {
                        title: "Symfony",
                        icon: "fa-brands fa-symfony"
                    },
                    {
                        title: "Node JS",
                        icon: "fa-brands fa-node"
                    },
                    {
                        title: "HTML5",
                        icon: "fa-brands fa-html5"
                    },
                    {
                        title: "CSS3",
                        icon: "fa-brands fa-css3"
                    },
                    {
                        title: "Bootstrap",
                        icon: "fa-brands fa-bootstrap"
                    },
                    {
                        title: "React",
                        icon: "fa-brands fa-react"
                    },
                    {
                        title: "Docker",
                        icon: "fa-brands fa-docker"
                    },
                    {
                        title: "Windows",
                        icon: "fa-brands fa-windows"
                    },
                    {
                        title: "Linux",
                        icon: "fa-brands fa-linux"
                    },
                    {
                        title: "Ubuntu",
                        icon: "fa-brands fa-ubuntu"
                    },
                    {
                        title: "Python",
                        icon: "fa-brands fa-python"
                    },
                    {
                        title: "Git",
                        icon: "fa-brands fa-git"
                    },
                    {
                        title: "Github",
                        icon: "fa-brands fa-github"
                    },
                    {
                        title: "Jira",
                        icon: "fa-brands fa-jira"
                    }
                ],
                title: "My skills"

            };
        default:
            return [];
    }
};