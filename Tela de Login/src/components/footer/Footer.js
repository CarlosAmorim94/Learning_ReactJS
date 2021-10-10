import React from 'react'
import './Footer.css'
import facebook from '../../img/facebook.png'
import whatsapp from '../../img/whatsapp.png'
import instagram from '../../img/instagram.png'

export default function Footer() {
    return (
            <div className="w-full p-3 justify-arround grid grid-cols-3 bg-opacity-25 bg-white">
                <div>
                    <h1 className="p-4 text-center text-gray-700 text-xl">Empresa:</h1>
                    <ul className="text-center">
                        <li><a>História</a></li>
                        <li><a>Missão</a></li>
                        <li><a>Visão</a></li>
                        <li><a>Valores</a></li>
                        <li><a>Empregos</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="p-4 text-center text-gray-700 text-xl">Comunidade:</h1>
                        <ul className="text-center">
                            <li><a>Parceiro</a></li>
                            <li><a>endereço</a></li>
                            <li><a>Causas sociais</a></li>
                        </ul>
                </div>
                <div>
                    <h1 className="p-4 text-center text-gray-700 text-xl">Redes Sociais:</h1>
                        <ul className=" flex items-stretch justify-center" >
                            <li className="mx-auto"><img src={facebook} /> </li>
                            <li className="mx-auto"><img src={instagram} /> </li>
                            <li className="mx-auto"><img src={whatsapp} /> </li>
                        </ul>
                </div>
                
            </div>
    )
}
