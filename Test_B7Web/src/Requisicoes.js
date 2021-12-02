import React from "react"

const Requisicoes = () => {

    const [cars, setCars] = React.useState([])              // Adicionar API convertida para json num array para exibir
    const [loading, setLoading] = React.useState(false)     // informação de "Carregando".
    const [year, setYear] = React.useState('')              // Filtro para o ano
    const [emailField, setEmailField] = React.useState('')  // Coletar email para POST
    const [passwordField, setPasswordField] = React.useState('')  // Coletar senha para POST

    const getCars = async () => {
    // async function getCars() {...} Outro modo de fazer função assincrona
        setCars([])
        setLoading(true)
        

        let result = await fetch(`https://api.b7web.com.br/carros/api/carros?ano=${year}`)   // coleta informações
        let json = await result.json()                                                       // converte as informações em JSON 
            if (json.error === '') {                                                         // Adiciona a uma lista
                setCars(json.cars)
            } else {
                alert(json.error)
            }
    }

    /* ------------ OUTRA OPÇÃO DE FUNÇÃO FETCH ----------
    const getCars = () => {                            
        setCars([])
        setLoading(true)
        

        fetch(`https://api.b7web.com.br/carros/api/carros?ano=${year}`)
            .then(function(result) {
                return result.json()
            }).then(function(json) {
                setLoading(false)

                if (json.error === '') {
                    setCars(json.cars)
                } else {
                    alert(json.error)
                }
                
            })
    }
    */

    React.useEffect(()=>{
        getCars()
    },[year])

    function handleFilter(e) {
        setYear(e.target.value)
        //getCars() não funciona direito, aplicar no Effect para monitorar essa função
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault()

        let url = 'https://api.b7web.com.br/carros/api/auth/login'

        let result = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailField,
                password: passwordField
            })
        })
        let json = await result.json()
            if(json.error !== '') {
                alert(json.error)
            }

            console.log("RESULT", json)
    }

    return(<>

            <h2>Faça login</h2>
            <form onSubmit={handleLoginSubmit}>
                <label>Email:
                    <input 
                    type="email" 
                    value={emailField}
                    onChange={(e)=>(setEmailField(e.target.value))}></input>
                </label><br/>
                <label>Senha:
                    <input 
                    type="password" 
                    value={passwordField}
                    onChange={(e)=>(setPasswordField(e.target.value))}></input>
                </label><br/>
                <button type="submit">Enviar</button>
            </form>

            <hr/>
            <h1>Testando APIs - Carros</h1>
            <select onChange={handleFilter}>
                <option></option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>1585</option>

            </select>
            <button onClick={getCars}>Carregar carros</button>
            <div>
                {loading === true && <h1>Carregando</h1>}

                {cars.length === 0 && loading === false && 
                    <h2>Nenhum carro encontrado</h2>
                }

                {cars.map((item, key)=>(
                    <div key={key}>
                        <img src={item.photo} width="200" alt="teste" />
                        <h3>{item.brand} - {item.name}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Requisicoes