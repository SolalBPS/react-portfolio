export const getHome = (lang) => {
    // Simule une requête
    // fetch(`https://portfolio-api/home?lang=${lang}`)
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
                        icon: "fa-user",
                        title: "A propos de moi",
                        text: "Je suis Solal Bompais, un étudiant en informatique de 22 ans et alternant développeur web full-stack.",
                    },
                    {
                        icon: "fa-graduation-cap",
                        title: "Etudes",
                        text: "J'ai un BAC STI2D qui n'a rien à voir avec l'informatique, un DUT et une License en informatique, et je suis actuellement en Master informatique à l'ESIMED, Marseille.",
                    },
                    {
                        icon: "fa-briefcase",
                        title: "Expériences professionnelles",
                        text: "Ma première expérience professionnelle a été un stage chez Delko Développement, une entreprise de franchise de garages, où j'ai créé une application web de gestion des congés pour l'entreprise. Je suis actuellement en alternance chez K-ZAM, une entreprise d'ERP/Applications web pour les professionnels.",
                    }
                ],
                title: "Bienvenue sur le portfolio de Solal",
                likesTitle: "Ce que j'aime",
                likes: [
                    {
                        icon: "fa-code",
                        title: "Développer"
                    },
                    {
                        icon: "fa-gamepad",
                        title: "Jeux vidéos"
                    },
                    {
                        icon: "fa-tv",
                        title: "Séries"
                    },
                    {
                        icon: "fa-music",
                        title: "Musique"
                    },
                    {
                        icon: "fa-book",
                        title: "Mangas"
                    },
                ]
            }
        case 'en':
            return {
                infos: [
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
                ],
                title: "Welcome to Solal's portfolio",
                likesTitle: "What i like",
                likes: [
                    {
                        icon: "fa-code",
                        title: "Developing"
                    },
                    {
                        icon: "fa-gamepad",
                        title: "Video games"
                    },
                    {
                        icon: "fa-tv",
                        title: "Series"
                    },
                    {
                        icon: "fa-music",
                        title: "Music"
                    },
                    {
                        icon: "fa-book",
                        title: "Mangas"
                    },
                ]

            };
        default:
            return [];
    }
};