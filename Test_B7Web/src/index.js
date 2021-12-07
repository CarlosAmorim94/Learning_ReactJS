import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducers from './reducers' // Importa o combine
import App from './App';
// import Requisicoes from './Requisicoes'
// import Energia from './Energia' // Teste para API

// Criar Store para redux aqui no index.js e encapsular com Provider toda a aplicação
const store = createStore(Reducers)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
