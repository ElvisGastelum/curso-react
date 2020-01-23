import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <h1>Hola Mundo en React</h1>
    )
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);