import React from 'react';

class Formulaire extends React.Component {

    state = {
        length: this.props.length
    }

    createMessage = event => {
        event.preventDefault();
        const message = {
            message: this.messageSent.value,
            pseudo: this.props.pseudo
        };

        this.props.addMessage(message);

        //Reset
        this.messageForm.reset();
        const length = this.props.length;
        this.setState({ length:length });
    };

    render() {
        return (
            <form
                className="form"
                onSubmit={e => this.createMessage(e)}
                ref={input => this.messageForm = input}
            >
                <span></span>

                <textarea
                 required
                 maxLength={this.props.length}
                 ref={input => this.messageSent = input}
                >
                </textarea>

                <button type="submit">SEND</button>
            </form>
        )
    }

    static propTypes = {
        addMessage: React.PropTypes.func.isRequired,
        pseudo: React.PropTypes.string.isRequired,
        length: React.PropTypes.number.isRequired
    }
}

export default Formulaire;