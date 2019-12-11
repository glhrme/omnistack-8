import React from  'react'
import './Main.css'

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

function Main({ match }) {

    return (
        <div className='main-container'>
            <img src={logo} alt='Tindev' />
            <ul>
                <li>
                    <img src='https://avatars0.githubusercontent.com/u/46634674?s=200&v=4' alt='' />
                    <footer>
                        <strong>Guilherme dos Santos</strong>
                        <p>asdadadasdasdasdsdfsdfasdfsafsadsadasdasdadasdadasdasdasdasdadasfsadfasfasfsadfsdfsdfhsdbfjsdnsdvjidavnasods</p>
                    </footer>
                    <div className='buttons'>
                        <button type='button'>
                            <img src={dislike} alt='Dislike button' />
                        </button>
                        <button type='button'>
                            <img src={like} alt='Like button' />
                        </button>
                    </div>
                </li>

                <li>
                    <img src='https://avatars0.githubusercontent.com/u/46634674?s=200&v=4' alt='' />
                    <footer>
                        <strong>Guilherme dos Santos</strong>
                        <p>Estudante asdadas</p>
                    </footer>
                    <div className='buttons'>
                        <button type='button'>
                            <img src={dislike} alt='Dislike button' />
                        </button>
                        <button type='button'>
                            <img src={like} alt='Like button' />
                        </button>
                    </div>
                </li>
                
                <li>
                    <img src='https://avatars0.githubusercontent.com/u/46634674?s=200&v=4' alt='' />
                    <footer>
                        <strong>Guilherme dos Santos</strong>
                        <p>Estudante asdadas</p>
                    </footer>
                    <div className='buttons'>
                        <button type='button'>
                            <img src={dislike} alt='Dislike button' />
                        </button>
                        <button type='button'>
                            <img src={like} alt='Like button' />
                        </button>
                    </div>
                </li>

                <li>
                    <img src='https://avatars0.githubusercontent.com/u/46634674?s=200&v=4' alt='' />
                    <footer>
                        <strong>Guilherme dos Santos</strong>
                        <p>Estudante asdadas</p>
                    </footer>
                    <div className='buttons'>
                        <button type='button'>
                            <img src={dislike} alt='Dislike button' />
                        </button>
                        <button type='button'>
                            <img src={like} alt='Like button' />
                        </button>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Main