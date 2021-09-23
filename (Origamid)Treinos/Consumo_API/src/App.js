import React from 'react'
import './bootstrap.css'
import Produtos from './Produtos'

function App() {

  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function handleClick(event) {
    setLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json()
    setDados(json)
    setLoading(false)
  }

  return (
    <div className="container">
      <button onClick={handleClick} className="btn btn-success m-2" >Notebook</button>
      <button onClick={handleClick} className="btn btn-primary m-2" >Smartphone</button>
      <button onClick={handleClick} className="btn btn-warning m-2" >Tablet</button>
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Produtos dados={dados}/> }
    </div>
  )
}

export default App