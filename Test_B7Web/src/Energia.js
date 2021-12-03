import React from 'react'

const Energia = () => {

    const [list, setList] = React.useState([])
    const [gadget, setGadget] = React.useState('')
    const [consumption, setConsumption] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const getListEnergy = async () => {
        setLoading(true)
        let energy = await fetch('https://happliance.herokuapp.com/api/v1/appliances/names/get')
        let json = await energy.json()
        setList(json)
        setLoading(false)
    }

    const getConsumption = async () => {
        setLoading(true)
        let consumo = await fetch(`https://happliance.herokuapp.com/api/v1/appliances/name?name=${consumption}`)
        let json2 = await consumo.json()
        setGadget(json2)
        setLoading(false)
    }

    React.useEffect(()=>(
        getListEnergy(),
        getConsumption()
    ),[consumption])

    function handleList(e) {
        setConsumption(e.target.value)
    }

    return(
        <>
        <div>
            <h2>Consumo de energia</h2>
            <select onChange={handleList}>
                <option></option>
                {list.map((item, key)=>(
                    <option key={key}>{item}</option>
                ))}
            </select>

            {gadget.length === 0 && loading === false && <h3>Selecione um aparelho acima</h3> }
            {loading === true && <h1>Carregando</h1>}
            
            <div>
                <h3> Eletrodoméstico {gadget.name} :</h3>
                <div>Potência : {gadget.power} Watts</div>
                <div>Usando {gadget.dailyUse} min/dia em {gadget.monthlyUsage} dias no mês</div>
                <div>Consumimos ao final do mês {gadget.monthlyConsumptionAverage} kWh</div>
            </div>
        </div>
        </>
    )
}

export default Energia