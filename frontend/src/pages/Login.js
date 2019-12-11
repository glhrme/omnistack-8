import React, { useState } from 'react'
import './Login.css'

import api from '../services/api'
import logo from '../assets/logo.svg'

function Login({ history}) {

    const [ user, setUsername ] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        const response = await api.post('/devs', {
            user
        })

        const { _id } = response.data

        console.log(user)
        console.log(response)
        history.push(`/main/${_id}`)
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"/>
                <input 
                    placeholder='Digite seu usuário do github'
                    value={user}
                    onChange={ event => setUsername(event.target.value) }
                />
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
}

export default Login