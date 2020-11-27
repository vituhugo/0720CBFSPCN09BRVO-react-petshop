import React from 'react';

// function Card({titulo, texto, callback}) {
//     return (
//         <div>Hello Word</div>
//     )
// }

class Card extends React.Component {

    state = {
        nome_usuario: "Lee",
        estilo_helloword: {fontSize: "3em", margin: "10px"}
    }

    render() {
        setTimeout(() => {
            this.setState({
                nome_usuario: "Carol",
                estilo_helloword: {fontSize: "3em", margin: "10px", backgroundColor: "yellow"}
            })
        }, 3000)
        let {titulo, texto, callback} = this.props;
        return (
        <div style={this.state.estilo_helloword}>Hello Word, {this.state.nome_usuario}</div>
        )
    }
}

export default Card;

