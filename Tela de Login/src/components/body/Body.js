import React from 'react'
import './Body.css'
import perfil from '../../img/perfil.png'
import facebook from '../../img/login/face.png'
import google from '../../img/login/google.png'
import linkedin from '../../img/login/linkedin.png'
//import { useFormik } from 'formik';


export default function Body() {


    return (
        <div className="flex items-stretch my-5 mx-auto container w-full h-3/5 bg-center"> 
            <div className="flex-col w-2/4 my-auto mx-auto drop-shadow-2xl rounded-3xl bg-opacity-25 bg-white">
                <div className="w-20 my-4 mx-auto"> 
                    <img src={perfil} alt="" className="h-full w-full"/>
                </div>
                    <form>
                        <label className="flex p-4 my-0 mx-auto ">
                            <input type="email" placeholder="Digite seu e-mail" className="login py-2 bg-white mx-auto w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"/>
                        </label>
                        <label className="flex p-4 mx-auto ">
                            <input type="password" placeholder="Digite sua senha" className="senha py-2 bg-white mx-auto w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"/>
                        </label>
                        <div className="flex">
                            <button className="border-2 mx-auto rounded-xl my-4 px-5 py-2 w-5/6 text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:bg-pink-500">Login!</button>
                        </div>
                    </form>
                <hr/>
                <div className="mx-auto my-5">
                    <div className="my-4 flex justify-center">
                        Login com:
                    </div>

                    <div className="px- space-x-8 justify-center flex">
                        <div>
                            <img src={facebook} alt="" />
                        </div>
                        <div>
                            <img src={google} alt="" />
                        </div>
                        <div>
                            <img src={linkedin} alt="" />
                        </div> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
} // eslint-disable-next-line
