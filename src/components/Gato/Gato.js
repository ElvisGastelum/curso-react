import React from 'react';

const Gato = (props) => (
    <div>
        <h2>Gato</h2>
        <pre>
            {JSON.stringify(props, null, 4)}
        </pre>
    </div>
)
export default Gato