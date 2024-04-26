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
            return [
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
                }
            ];
        case 'en':
            return [
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
                }
            ];
        default:
            return [];
    }
};