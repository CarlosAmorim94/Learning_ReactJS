import React from "react"

const Requisicoes = () => {

    const [cars, setCars] = React.useState([])              // Adicionar API convertida para json num array para exibir
    const [loading, setLoading] = React.useState(false)     // informação de "Carregando".
    const [year, setYear] = React.useState('')              // Filtro para o ano

    function getCars() {
        setCars([])
        setLoading(true)
        
        /* const url = "https://api.b7web.com.br/carros/api/carros"
            if (url != '') {
                url += '?ano='+year
        }   */                                              //Opções para o filtro, adicionar variavel url ao fetch(url)

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

    React.useEffect(()=>{
        getCars()
    },[year])

    function handleFilter(e) {
        setYear(e.target.value)
        //getCars() não funciona direito, aplicar no Effect para monitorar essa função
    }

    return(<>
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