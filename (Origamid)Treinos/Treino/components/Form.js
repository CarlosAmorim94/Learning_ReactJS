import React from 'react'
import Button from './Button'
import Input from './Input'
import Password from './Password'

export default function Form() {
    return (
        <div>
            <label/>Nome
            <Input />
            <label/>Senha
            <Password />
            <br/>
            <div>
                <Button botao='Login' />
                <Button botao='Esqueceu a senha' />
            </div>
            
        </div>
    )
}
