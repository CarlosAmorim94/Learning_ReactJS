import React from 'react';
import SearchBox from './components/SearchBox';
import './App.css';
import Modal from './components/Modal';


function App() {

  const [texto, setTexto] = React.useState('')      //Altera o texto do app, com base na props passada de outro componente
  const [list, setList] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)

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

  </>)
}

export default App;
