import React from 'react'

export default function SearchBox(props) {

    const [texto, setTexto] = React.useState('')

  function inputTextChange(e) {               // Validando o value
    setTexto(e.target.value)
  }
  
  React.useEffect(()=>(
    props.onchangeText(texto)// eslint-disable-next-line
  ),[texto])
   
  function collectKey(e) {
    /*console.log(e.keyCode)*/
    if (e.keyCode === 13){                     // Verificando se tecla digitada é Enter
      props.pressEnter(texto)                 // Passando o texto digitado para a props
      setTexto('')                            // Limpando texto digitado
    }
  }

    return (
        <div>
            <input type='text' 
            value={texto}
            onChange={inputTextChange}
            onKeyUp={collectKey}
            placeholder={props.frasePadrao ?? "Digite alguma coisa"}>

            </input>
        </div>
    )
}
