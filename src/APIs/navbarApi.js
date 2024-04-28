export const getNavbar = (lang) => {
    // Simule une requête
    // fetch(`https://portfolio-api/navbar?lang=${lang}`)
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
                navigation: [
                    {
                        url: "/",
                        title: "Accueil",
                    },
                    {
                        url: "/skills",
                        title: "Compétences",
                    },
                    {
                        url: "/projects",
                        title: "Projets",
                    },
                    {
                        url: "/blog",
                        title: "Blog",
                    }
                ],
                languages: [
                    {
                        id: "fr",
                        title: "Français",
                    },
                    {
                        id: "en",
                        title: "Anglais",
                    }
                ],
            };
        case 'en':
            return {
                navigation: [
                    {
                        url: "/",
                        title: "Home",
                    },
                    {
                        url: "/skills",
                        title: "Skills",
                    },
                    {
                        url: "/projects",
                        title: "Projects",
                    },
                    {
                        url: "/blog",
                        title: "Blog",
                    }
                ],
                languages: [
                    {
                        id: "fr",
                        title: "French",
                    },
                    {
                        id: "en",
                        title: "English",
                    }
                ],
            };
        default:
            return [];
    }
};