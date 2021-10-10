import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';


function App() {

  return(
    <div className="w-full bg-gradient-to-b flex-col from-indigo-600 via-purple-300 to-pink-400">
      <Header className="w-full content-start"></Header>
      <Body className="w-full"></Body>
      <Footer className="w-full content-end"></Footer>
    </div>
  )
}

export default App;
