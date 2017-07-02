import React from 'react';// 1.  j'importe React

class Connexion extends React.Component { // 2. je créée mon component

    goToChat = event => {// 3a. on créé la fonction pour aller vers le Chat en tant que l'utilisateur, ce dernier étant l'input récupéré par la ref
        event.preventDefault();// évite la page de se rafraichir car au clic sur submit la page se rafraichit automatiquement.
        // Récupérer le pseudo
        const pseudo = this.pseudoInput.value;
        // Changer l'url pour arriver dans notre application
        this.context.router.transitionTo(`/pseudo/${pseudo}`); // les backtick sont comme une chaines de caractères, et avec ${} on peut passer variables ou JavaScript
        // le contexte permet a un component parent (index.js) de passer des infos à tous les enfants. On utilise plutot les Props ou les stats pour cela, rarement le contexte.
    }

    render() {
        return ( //JSX
            <div
                className="connexionBox"
                onSubmit={(e) => this.goToChat(e)}// 1a. on créé l'événement clic sur le bouton pour déclencher la fonction qui va nous emmener au Chat
            >
                <form className="connexion">
                    <input
                        type="text"
                        placeholder="Pseudo"
                        required
                        ref={input => {this.pseudoInput = input}}//2a. on créé une ref pour récupérer la valeur de l'input
                    />
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        )
    }

    static contextTypes = { // permet de définir le context et ses fonctionnalités (ici le 'transitionTo')
        router: React.PropTypes.object
    }

}
// onSubmit -> un événement. On appelle l'event (e) qu'on passe avec une fonction fléchée, on appelle la fonction.
// on veut récupérer le pseudo afin d'aller a GoToChat, donc on agit sur l'input.

export default Connexion;// 3.  j'exporte mon component