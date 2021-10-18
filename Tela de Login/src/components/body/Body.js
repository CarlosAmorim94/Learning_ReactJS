import React from 'react'
import './Body.css'
import perfil from '../../img/perfil.png'
import facebook from '../../img/login/face.png'
import google from '../../img/login/google.png'
import linkedin from '../../img/login/linkedin.png'


export default function Body(props) {

    const [texto, setTexto] = React.useState('')

    function handleText(e) {
        setTexto(e.target.value)
    }
    
    // Remover as divs e encapsular os formulários em um Form.

    return (
        <div className="flex items-stretch my-5 mx-auto container w-full h-3/5 bg-center">
            <div className="flex-col w-2/4 my-auto mx-auto drop-shadow-2xl rounded-3xl bg-opacity-25 bg-white">
                <div className="w-20 my-4 mx-auto">
                    <img src={perfil} className="h-full w-full"/>
                </div>
                <div className="flex p-4 my-0 mx-auto ">
                    <input type="email" placeholder="Digite seu e-mail" onChange={handleText} value={texto} className="login py-2 bg-white mx-auto w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"></input>
                </div>
                <div className="flex p-4 mx-auto ">
                    <input type="password" placeholder="Digite sua senha" className="senha py-2 bg-white mx-auto w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"></input>
                </div>
                <div className="flex">
                    <button className="border-2 mx-auto rounded-xl my-4 px-5 py-2 w-5/6 text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:bg-pink-500">Login!</button>
                </div>
                <hr/>
                <div className="mx-auto my-5">
                    <div className="my-4 flex justify-center">
                        Login com:
                    </div>

                    <div className="px- space-x-8 justify-center flex">
                        <div>
                            <img src={facebook} />
                        </div>
                        <div>
                            <img src={google} />
                        </div>
                        <div>
                            <img src={linkedin} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
