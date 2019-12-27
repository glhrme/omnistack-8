import React, { useEffect, useState } from  'react'
import './Main.css'

import User from '../components/User'
import logo from '../assets/logo.svg'
import api from '../services/api'

function Main({ match }) {

    const [ users, setUsers ] = useState([])

    useEffect(()=>{
        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id
                }
            })
            setUsers(response.data)
        }

        loadUsers()
    },[match.params.id])

    return (
        <div className='main-container'>
            <img src={logo} alt='Tindev' />
            <ul>
                {users.map( user => {
                return ( <User 
                        user={ user }
                        loggedUser={ match.params.id }
                        key={ user._id }
                    /> )
                } )}
            </ul>
        </div>
    )
}
export default Main