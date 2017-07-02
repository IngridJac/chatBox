import React from 'react';// 1.  j'importe React

class Formulaire extends React.Component { // 2. je créée mon component

    state = {
        length: this.props.length
    }

    createMessage = event => {// 3a. on créé la fonction pour créé le message récupéré par la ref. createMessage se lance quand on valide le form
        event.preventDefault();
        const message = {// c'est un objet qui contient un message et un pseudo
            message: this.messageSent.value,
            pseudo: this.props.pseudo
        };

        this.props.addMessage(message);// la Props addMessage écrite dans App dans Formulaire. Cette ligne de code envoit 'message' dans 'addMessage'

        //Reset
        this.messageForm.reset();//efface le message dans le form une fois celui-ci envoyé.
        const length = this.props.length;
        this.setState({ length:length });
    };

    render() {
        return ( //JSX
            <form
                className="form"
                onSubmit={e => this.createMessage(e)}// 1a. on créé l'événement clic sur le bouton pour déclencher la fonction qui va créer un message
                ref={input => this.messageForm = input}
            >
                <span></span>

                <textarea
                 required
                 maxLength={this.props.length}
                 ref={input => this.messageSent = input}// 2a. on créé une ref pour récupérer la valeur du message
                >
                </textarea>

                <button type="submit">SEND</button>
            </form>
        )
    }

    // A METTRE ABSOLUMENT!! nous permettent de vérifier si nos Props sont bien passées
    // de quel type nous voulons que les Prop soient (fonction, chaine de caractères.. etc)
    static propTypes = {
        addMessage: React.PropTypes.func.isRequired,//il le faut absolument et il faut que se soit une focntion
        pseudo: React.PropTypes.string.isRequired,
        length: React.PropTypes.number.isRequired
    }
}

export default Formulaire;// 3.  j'exporte mon component