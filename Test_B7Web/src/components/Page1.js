import React from 'react'
import { Link } from 'react-router-dom'

export default function Page1() {
    return (
        <>
        <nav>
            <li><Link to="/" />Home</li>
            <li><Link to="/page1" />Page 1</li>
          </nav>

        <h1>Teste de página 1</h1>
            
        </>
    )
}
