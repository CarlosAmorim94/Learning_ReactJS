import React from 'react';
import SearchBox from './components/SearchBox';
import './App.css';


function App() {

  const [texto, setTexto] = React.useState('')
 
 
  
  function handleSearchInput(texto) {
    setTexto(texto)
  }



  return (<>
    <h1>Lista de tarefas</h1>
    <SearchBox 
    frasePadrao='Busque algo'
    onchangeText={handleSearchInput}
    />

    <hr/>

    <p>Texto procurado é {texto} </p>

  

  </>)
}

export default App;
