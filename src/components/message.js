import React from 'react';

class Message extends React.Component {

    preRender = (isUser) => {
        if (isUser) {
            return (
                <p className="user-message">
                    {this.props.details.message}
                </p>
            )
        }
        else {
            return (
                <p className="not-user-message">
                    <strong>{this.props.details.pseudo}</strong><i></i> {this.props.details.message}
                </p>
            )
        }
    };

    render() {
        return this.preRender(this.props.isUser(this.props.details.pseudo))
    }

    // A METTRE ABSOLUMENT!! nous permettent de vérifier si nos Props sont bien passées
    // de quel type nous voulons que les Prop soient (fonction, chaine de caractères.. etc)
    static propTypes = {
        details: React.PropTypes.object.isRequired
    };
}

export default Message;