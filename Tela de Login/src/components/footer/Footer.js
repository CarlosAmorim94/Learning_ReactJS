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
                        <li><a href="">História</a></li>
                        <li><a href="">Missão</a></li>
                        <li><a href="">Visão</a></li>
                        <li><a href="">Valores</a></li>
                        <li><a href="">Empregos</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="p-4 text-center text-gray-700 text-xl">Comunidade:</h1>
                        <ul className="text-center">
                            <li><a href="">Parceiro</a></li>
                            <li><a href="">endereço</a></li>
                            <li><a href="">Causas sociais</a></li>
                        </ul>
                </div>
                <div>
                    <h1 className="p-4 text-center text-gray-700 text-xl">Redes Sociais:</h1>
                        <ul className=" flex items-stretch justify-center" >
                            <li className="mx-auto"><img src={facebook} alt="" /> </li>
                            <li className="mx-auto"><img src={instagram} alt="" /> </li>
                            <li className="mx-auto"><img src={whatsapp} alt="" /> </li>
                        </ul>
                </div>
                
            </div>
    )
}
