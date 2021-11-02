import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'


export default function Header() {
    return (
            <div className="w-full h-1/6 p-3 justify-between inline flex items-stretch bg-opacity-25 bg-white">
                <div className="logo">
                    <img src={logo} alt="" />   
                </div>
                <div className="flex self-center">
                    <ul className="flex">
                        <li className="mx-2 text-white"><a href="">Quem somos</a></li>
                        <li className="mx-2 text-white"><a href=""> Valores</a></li>
                        <li className="border-2 rounded-xl mx-2 px-4 text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"><a href="">Entrar!</a></li>
                    </ul>
                </div>
            </div>
    )
}
