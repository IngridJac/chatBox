import React from 'react';// 1.  j'importe React
import Formulaire from './formulaire'; // j'importe le formulaire dans l'app
import Message from './message';
import base from '../base';
//CSS
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';

class App extends React.Component { // 2. je créée mon component

    state = {
        messages: {}
    }

    componentWillMount() {// avant que le message soit posté (avant la mise à jour, changements dans le state)
        this.ref = base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }

    componentDidUpdate() {// dès que le message est posté (il y a une mise à jour, quelque chose change dans le state)
        //Mettre le scroll en bas
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    addMessage = message => {
        // Copier le state -> afin de ne pas travailler directement dessus
        const messages = {...this.state.messages} // le '...' récupère tout ce qu'on trouve dans ce qu'on lui donne. Ici on récupère donc le state
        // On ajoute le message avec une clé timestamp
        const timestamp = Date.now();// fonction qui récupère l'instant T en milisecondes.
        messages[`message-${timestamp}`] = message;
        // On supprime si plus de 10 messages
        Object.keys(messages).slice(0, -10).map(key => messages[key] = null);// on part de la fin, on prend les 10 derniers et on supprime le onzième
        // Récupérer et mettre à jour notre state
        this.setState({ messages: messages }); // ({state: const})
    };

    isUser = (pseudo) => {// fonction qui vérifie si c'est l'utilisateur
        return pseudo === this.props.params.pseudo;
    }

    render() {

        const messages = Object
            .keys(this.state.messages) // Renvoi un Array dans la console.
            .map(key => <Message key={key} details={this.state.messages[key]} isUser={this.isUser} />)
            // on passe notre state 'messages' en Props de Message
            // Le .map est une boucle qui loop à l'intérieur d'un Array.
            // Pour chaque key (une entrée) ça renvoi le component Message.
        ;
        // on récupère les clés de l'object qu'on passe en paramètres (ici notre state). Donc on récupère les key de chaque message envoyé.

        return ( //JSX
            <div className="box">
                <div>
                    <div className="messages" ref={input => this.messages = input}>
                        <ReactCSSTransitionGroup
                            component="div"
                            className="message"
                            transitionName="message"
                            transitionEnterTimeout={400}//phase de transition avant qu'il ne soit affiché
                            transitionLeaveTimeout={400}
                        >
                            {messages}
                        </ReactCSSTransitionGroup>
                    </div>
                    <Formulaire
                        addMessage={this.addMessage} // on passe la fonction addMessage en Props qu'on va utiliser dans le component Formulaire
                        pseudo={this.props.params.pseudo} // 'params' est une Props de App générée par le Routage qui contient 'pseudo'
                        length={140}
                    />
                </div>
            </div>
            // on englobe les messages avec des transitions CSS
            // ici, 'pseudo' est une Props du component Message. On peut avoir autant de Props que l'on veut.
            // les Props peuvent être des fonctions, des objects, des chaînes de caractère... etc
            // -> elles sont utilisées pour passer des informations d'un component à un autre.
        )
    }

    // A METTRE ABSOLUMENT!! nous permettent de vérifier si nos Props sont bien passées
    // de quel type nous voulons que les Prop soient (fonction, chaine de caractères.. etc)
    static propTypes = {
        params: React.PropTypes.object.isRequired
    };
}

export default App;// 3.  j'exporte mon component