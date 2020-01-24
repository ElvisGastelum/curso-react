import React from 'react'
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component {
    constructor(){
        super()

        this.state = {
            cantidad: 0
        }
    }

    incrementarCantidad = () => this.setState({
        cantidad: this.state.cantidad + 1
    })
    decrementarCantidad = () => {
        if(this.state.cantidad > 0){
            this.setState({
                cantidad: this.state.cantidad - 1
            })
        }
    }

    limpiarCantidad = () => this.setState({ cantidad: 0 })

    render () {
        const hasItems = this.state.cantidad > 0
        const activeClass = hasItems ? styles['card-active']: '';
        const classes = `${styles.card} ${activeClass}`

        return (
            <div className={classes}>
                <h3>{ this.props.name }</h3>
                <p>Cantidad: { this.state.cantidad }</p>
                <button onClick={this.incrementarCantidad}>+</button>
                <button onClick={this.decrementarCantidad}>-</button>
                <button onClick={this.limpiarCantidad}>Limpiar</button>
                <hr />
                <p>${ this.state.cantidad * this.props.price }</p>
            </div>
        )
    }
}

export default TarjetaFruta