import React from 'react'
import { Connect } from 'react-redux'

import api from '../../services/api'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import './index.css'

function User({user, loggedUser}) {

    async function handleLike(id) {
        const response = await api.post(`/devs/${id}/likes`, null, {
            headers: { user: loggedUser }
        })
        window.location.reload(this)
    }

    async function handleDislike(id) {
        const response = await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: loggedUser }
        })
        window.location.reload(this)
    }

    return (
        <li>
            <img src={user.avatar}/>
            <footer>
                    <strong>{user.name}</strong>
                    <p>{user.bio}</p>
                </footer>
                <div className='buttons'>
                    <button 
                        type='button'
                        onClick={ () => handleLike(user._id) }>
                        <img 
                            src={dislike} 
                            alt='Dislike button'
                        />
                    </button>
                    <button 
                        type='button'
                        onClick={ ( ) => handleLike(user._id)} >
                        <img 
                            src={like} 
                            alt='Like button'
                        />
                    </button>
                </div>
        </li>
    )
}

export default User