import React from 'react'
import Gato from './components/Gato/'

class App extends React.Component {
    state = {
        fuerza: 'mucha',
        hambre: 'poca'
    }
    render () {
        const masDatos = {
            color: 'negro',
            tamaño: 'grande'
        }
        return (
            <div>
                <Gato 
                    name='Tomas'
                    age='5 años'
                    {...masDatos}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App