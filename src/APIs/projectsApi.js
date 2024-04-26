export const getProjects = (lang) => {
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
                        icon: "fa-id-card",
                        title: "Application web de gestion de congés",
                        text: "Durant mon stage chez Delko j'ai créé une application web de gestion de congés pour l'entreprise.\nL'application permet aux employés de faire des demandes de congés, et aux managers de les accepter ou de les refuser.\nElle a été créée en utilisant le framework Symfony, et ses templates Twig. Elle utilise l'ORM Doctrine pour interagir avec une base de données MariaDB.",
                    },
                    {
                        icon: "fa-gamepad",
                        title: "Jeu vidéo de type Diablo",
                        text: "Durant mes études j'ai créé un jeu vidéo de type Diablo en utilisant Godot Engine et Blender. Le jeu comporte un donjon, et un système de combat inspiré de la série des Diablo. Il comporte également un système d'IA simple pour les ennemis.",
                    },
                    {
                        icon: "fa-list-ol",
                        title: "Site web de gestion de listes d'animes et mangas",
                        text: "Aussi durant mes études à l'ESIMED, j'ai créé un site web pour gérer des listes d'animes et de mangas. Le site permet aux utilisateurs de créer des listes d'animes et de mangas. Il a été créé en utilisant une architecture MVC maison et du JS natif, avec un Backend NodeJS ainsi qu'une base de données MySQL simple.",
                    }
                ],
                title: "Projets"
            }
        case 'en':
            return {
                infos: [
                    {
                        icon: "fa-id-card",
                        title: "Leave Management web application",
                        text: "During my internship at Delko i created a leave management web application for the company.\nThe application allows employees to request leaves, and managers to accept or refuse them.\nIt was created using the Symfony framework, and its Twig templates. It uses the Doctrine ORM to interact with a MariaDB Database.",
                    },
                    {
                        icon: "fa-gamepad",
                        title: "Diablo-like video game",
                        text: "During my studies i created a Diablo-like video game using Godot Engine and Blender. The game features a dungeon, and a combat system inspired by the Diablo series. It also features a simple AI system for the enemies.",
                    },
                    {
                        icon: "fa-list-ol",
                        title: "Anime and manga list management web site",
                        text: "Also during my studies at ESIMED, i created a web site to manage anime and manga lists. The site allows users to create lists of anime and manga. It was created using a homemade MVC architecture and vanilla JS, with a NodeJS Backend as well as a simple MySQL Database.",
                    }
                ],
                title: "Projects"

            };
        default:
            return [];
    }
};