import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import UsuarioProvider from './Context/UsuarioProvider.jsx'

ReactDOM.render(
  <React.StrictMode>
    <UsuarioProvider>
    <App/>
    </UsuarioProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// reportWebVitals();
