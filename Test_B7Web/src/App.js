import React from 'react';
import SearchBox from './components/SearchBox';
import './App.css';


function App() {

  const [texto, setTexto] = React.useState('')
  const [list, setList] = React.useState([])

  function handleSearchInput(texto) {
    setTexto(texto)
  }

  React.useEffect(()=>{
    setList([
      {nome: 'Carlos', numero: 14998057785},
      {nome: 'Danielle', numero: 149985674},
      {nome: 'Sophia', numero: 148579642},
    ])
  },[])

  return (<>
    <h1>Lista de tarefas</h1>
    <SearchBox 
    frasePadrao='Busque algo'
    onchangeText={handleSearchInput}
    />

    <hr/>

    <p>Texto procurado é {texto} </p>

    <ul>
      {list.map((item, key)=>(
        <li key={key}>
          {item.nome} - {item.numero}
        </li>
      ))}
    </ul>

  </>)
}

export default App;
