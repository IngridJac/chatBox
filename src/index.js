// REACT
import React from 'react';
import { render } from 'react-dom';
//COMPONENTS
import Connexion from './components/connexion';
import App from './components/app';
import NotFound from './components/notFound';
//ROOTER
import { BrowserRouter, Match, Miss } from 'react-router'; // BrowserRouter créé un component ou l'on indique les options de routes, Match envois vers un component en fonction de l'url tapée, Miss envoie au component message erreur
//CSS
import './index.css';

// FONCTION DE ROUTAGE
const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={Connexion} />
                <Match pattern='/pseudo/:pseudo' component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}
//quand l'action match exactement la pattern (l'url) de home (/) alors tu affiches le component 'connexion'
//quand l'url match l'url de pseudo (/pseudo) alors tu affiches le component 'app'. Ce n'est pas 'exactly' car on ne sait pas quel pseudo ce sera, on donne donc une pattern avec une variable dedans (:pseudo).
//quand cela ne match aucune url on affiche le component NotFound

render(
  <Root />,
    document.getElementById('root')
);