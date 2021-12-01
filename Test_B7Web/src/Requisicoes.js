import React from "react"

const Requisicoes = () => {

    const [cars, setCars] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    function getCars() {
        setLoading(true)
        fetch("https://api.b7web.com.br/carros/api/carros")
            .then(function(result) {
                return result.json()
            }).then(function(json) {
                setLoading(false)
                setCars(json.cars)
            })
    }

    React.useEffect(()=>{
        getCars()
    },[])

    return(<>
            <h1>Testando APIs - Carros</h1>
            <button onClick={getCars}>Carregar carros</button>
            <div>
                {loading === true && <h1>Carregando</h1>}
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