export const login = async (username, password) => {
    return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
            expiresInMins: 10, // optional, defaults to 60
        })
    })
        .then(res => res.json())
        .then(data => { return data });
};

export const checkAuth = async (token) => {
    return fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
        .then(res => res.json())
        .then(data => { return data })
        .catch(err => { return err });

};

export const getLoginTrans = (lang) => {
    switch (lang) {
        case 'fr':
            return {
                infos: {
                    ident: {
                        icon: "fa-user",
                        title: "Nom d'utilisateur",
                        type: "text",
                        placeholder: "Bob04"
                    },
                    password: {
                        icon: "fa-key",
                        title: "Mot de passe",
                        type: "password"
                    }
                },
                submit: "Connexion",
                title: "Vous devez vous connecter pour accéder au Blog"
            }
        case 'en':
            return {
                infos: {
                    ident: {
                        icon: "fa-user",
                        title: "Username",
                        type: "text",
                        placeholder: "Bob04"
                    },
                    password: {
                        icon: "fa-key",
                        title: "Password",
                        type: "password"
                    }
                },
                submit: "Login",
                title: "You must login to access the Blog"

            };
        default:
            return [];
    }
}