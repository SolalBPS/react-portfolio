export const login = async (username, password) => {
    return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
            expiresInMins: 30, // optional, defaults to 60
        })
    })
        // Ajoute le code de status à la réponse
        .then(async res => { 
            return { status: res.status, data: await res.json() }
        })
        .then(data => { return data })
        .catch(err => { return err });
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
                        placeholder: "Nom d'utilisateur",
                    },
                    password: {
                        icon: "fa-key",
                        title: "Mot de passe",
                        type: "password"
                    }
                },
                submit: "Connexion",
                error: "Identifiants incorrects",
                title: "Vous devez vous connecter pour accéder au Blog"
            }
        case 'en':
            return {
                infos: {
                    ident: {
                        icon: "fa-user",
                        title: "Username",
                        type: "text",
                        placeholder: "Username"
                    },
                    password: {
                        icon: "fa-key",
                        title: "Password",
                        type: "password"
                    }
                },
                submit: "Login",
                error: "Incorrect credentials",
                title: "You must login to access the Blog"

            };
        default:
            return [];
    }
}