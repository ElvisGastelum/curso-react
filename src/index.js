import React from 'react';
import ReactDOM from 'react-dom';

class TarjetaFruta extends React.Component {
    constructor(){
        super()

        const METHODS = [
            'incrementarCantidad',
            'decrementarCantidad',
            'limpiarCantidad'
        ]

        METHODS.forEach((method) => {
            this[method] = this[method].bind(this)
        })

        this.state = {
            cantidad: 0
        }
    }

    incrementarCantidad () {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }
    decrementarCantidad () {
        if(this.state.cantidad > 0){
            this.setState({
                cantidad: this.state.cantidad - 1
            })
        }
    }
    limpiarCantidad () {
        this.setState({
            cantidad: this.state.cantidad = 0
        })
    }

    render () {
        return (
            <div>
                <hr/>
                <hr/>
                <h3>{ this.props.name }</h3>
                <p>Cantidad: { this.state.cantidad }</p>
                <button
                onClick={this.incrementarCantidad}>+</button>
                <button
                onClick={this.decrementarCantidad}>-</button>
                <button
                onClick={this.limpiarCantidad}>Limpiar</button>
                <p>${ this.state.cantidad * this.props.price }</p>
            </div>
        )
    }
}

class App extends React.Component {
    render () {
        return (
            <div>
                <TarjetaFruta name={'Sandia'} price={5.13} />
                <TarjetaFruta name={'Manzana'} price={7.30} />
                <TarjetaFruta name={'Pera'} price={8.20} />
                <TarjetaFruta name={'Papaya'} price={13.60} />

                <hr/>
            </div>
        )
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);