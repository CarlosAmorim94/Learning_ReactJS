import React from 'react'

export default function SearchBox(props) {

    const [texto, setTexto] = React.useState('')

  function inputTextChange(e) {
    setTexto(e.target.value)
  }

  React.useEffect(()=>(
    props.onchangeText(texto)
  ), [texto])

    return (
        <div>
            <input type='text' 
            value={texto}
            onChange={inputTextChange}
            placeholder={props.frasePadrao ?? "Digite alguma coisa"}>

            </input>
        </div>
    )
}
