import React from 'react'
import TarjetaFruta from './components/TarjetaFruta'

class App extends React.Component {
    render () {
        return (
            <div>
                <hr/>
                <TarjetaFruta name={'Sandia'} price={5.13} />
                <TarjetaFruta name={'Manzana'} price={7.30} />
                <TarjetaFruta name={'Pera'} price={8.20} />
                <TarjetaFruta name={'Papaya'} price={13.60} />
                <hr/>
                <hr/>
            </div>
        )
    }
}

export default App