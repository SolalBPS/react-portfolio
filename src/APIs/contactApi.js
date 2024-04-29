export const getContact = (lang) => {
    // Simule une requête
    // return fetch(`https://portfolio-api/home?lang=${lang}`)
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
                        icon: "fa-id-card",
                        title: "Nom",
                        type: "text",
                        placeholder: "Solal Bompais"
                    },
                    {
                        icon: "fa-at",
                        title: "E-mail",
                        type: "email",
                        placeholder: "bompais.solal@gmail.com"
                    },
                    {
                        icon: "fa-comment-dots",
                        title: "Un Commentaire ou une question ?",
                        type: "text-area",
                        placeholder: "Écrivez votre question ou commentaire ici !"
                    },
                ],
                submit: "Envoyer",
                title: "Contactez moi"
            }
        case 'en':
            return {
                infos: [
                    {
                        icon: "fa-id-card",
                        title: "Name",
                        type: "text",
                        placeholder: "John Doe"
                    },
                    {
                        icon: "fa-at",
                        title: "E-mail",
                        type: "email",
                        placeholder: "john@doe.com"
                    },
                    {
                        icon: "fa-comment-dots",
                        title: "Comments or questions ?",
                        type: "text-area",
                        placeholder: "Write any question or comment here !"
                    },
                ],
                submit: "Send",
                title: "Contact me"

            };
        default:
            return [];
    }
};