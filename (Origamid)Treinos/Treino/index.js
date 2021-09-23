import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './components/Form';
import Footer from './Footer';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Form />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
