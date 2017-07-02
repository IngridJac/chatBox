// REACT
import React from 'react';
import { render } from 'react-dom';
//COMPONENTS
import Connexion from './components/connexion';
import App from './components/app';
import NotFound from './components/notFound';
//ROOTER
import { BrowserRouter, Match, Miss } from 'react-router';
//CSS
import './index.css';

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

render(
  <Root />,
    document.getElementById('root')
);