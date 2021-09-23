import React from 'react'

export default function Produtos({dados}) {
    return (
        <div>
            <h1>Produto: {dados.nome}</h1>
            <p>Preço: R$ {dados.preco}</p>
            <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} className="figure-img img-fluid rounded"/>
        </div>
    )
}
