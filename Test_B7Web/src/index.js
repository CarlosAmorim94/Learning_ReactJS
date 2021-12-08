import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
//import { createStore } from 'redux'
//import Reducers from './reducers' // Importa o combine
import App from './App';
// import Requisicoes from './Requisicoes'
// import Energia from './Energia' // Teste para API
import {store, persistor} from './store'


// Criar Store para redux aqui no index.js e encapsular com Provider toda a aplicação
//const store = createStore(Reducers) 



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
