import React from 'react';
import SearchBox from './components/SearchBox';
import './App.css';
import Modal from './components/Modal';
import {BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Page1 from './components/Page1';
// import {connect} from 'react-redux'      Jeito dificil de usar Redux
import { useSelector, useDispatch } from 'react-redux'



function App() {

  const [texto, setTexto] = React.useState('')      //Altera o texto do app, com base na props passada de outro componente
  const [list, setList] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)
  const dispatch = useDispatch()

  const name = useSelector(state => state.usuario.name)
  const contador = useSelector(state => state.usuario.contador)


  function handleSearchInput(texto) {             //Altera o texto do app, com base na props passada de outro componente
    setTexto(texto)
  }

  function handleButtonModal() {
    setShowModal(true)
  }

  React.useEffect(()=>{
    setList([
      {title: 'Terapia', done: true},
      {title: 'Ligar para o médico', done: false},
      {title: 'Comprar um bolo', done: false},
    ])
  },[])

  function addItem(novoItem) {
    /*alert(novoItem)*/                                           // Verificando se foi recebido o value de outro componente
    const newList = [...list, {title: novoItem, done: false}]
    setList(newList)                                               // Adicionando a newList na list
  }

  function handleCarlos() {

    dispatch({
      type: 'SET_NAME',
      payload: { name: 'Carlos'}
    })

    //props.setName('Carlos') Jeito "Dificil" de usar Redux
  }

  function handleIncrement() {

    dispatch({
      type: 'INCREMENT_CONTADOR'
    })

    //props.increment() Jeito "Dificil" de usar Redux
  }

  return (<>
    <h1>Lista de tarefas</h1>
    <SearchBox 
    frasePadrao='Adicione um item'
    onchangeText={handleSearchInput}          //Altera o texto do app, com base na props passada de outro componente, função recebe o valor do outro componente
    pressEnter={addItem}                      //Coletando o value digitado após apertar Enter, value veio de outro componente
    />

    <hr/>

    <p>Texto procurado é {texto}</p>

    <ul>
      {list.map((item, key)=>(                //Listar itens de 
        <li key={key}>
          {item.done &&                       //Se done for true a tag <del> irá passar um risco, se não, escrever normal
          <del>{item.title}</del>
        }
        {!item.done &&
          item.title}</li>
      ))}
    </ul>

      <hr/>

      <button onClick={handleButtonModal}>Exibir modal!</button> 
      <Modal show={showModal} setShow={setShowModal}>
        <h1>Testando!!!</h1>
      </Modal>

      <hr/>

      <div> {/* Não funciona nesse contexto, porém no repositório Costs está funcionabdo perfeitamente, pois a página foi englobada */}

        <h1>Testando React Router</h1>
        <BrowserRouter>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/page1" >Page 1</Link></li>
          </ul>

          
            <Routes>
              <Route patch="/" element={<App />}/>
              <Route patch="/page1" element={<Page1 />} />
            </Routes>
        </BrowserRouter>
          <h5>Somente para consulta! (Funcionando corretamente no Repo - Costs)</h5>

      </div>

      <hr/>

      <h1> testando Redux</h1>
          <br/>
          <h4>Nome : {name}</h4>
          <h4>Contador: {contador}</h4>

          <button onClick={handleCarlos}>Setar nome para Carlos</button>
          <button onClick={handleIncrement}>+1</button>

  </>)
}

/* Jeito "Dificil" de usar Redux

const mapStateToProps = (state) => {
  return {
    name: state.usuario.name,
    contador: state.usuario.contador
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (newName) => dispatch({
      type: 'SET_NAME',
      payload: {name: newName}
    }),
    increment: () => dispatch({
      type: 'INCREMENT_CONTADOR'
    })
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App) */


export default App


/* Dependencias

npm install redux redux-persist redux-react react-router-dom --save styled-components

*/