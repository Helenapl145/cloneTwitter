import {Browsers} from 'phosphor-react'

import background from '../assets/backgroud.png'
import './Profile.css'

export function Profile(){
    return(
        <div>
            <img className='background' src={background} alt="background" />

            <div className='infoUser'>
                <img src="https://avatars.githubusercontent.com/u/71864098?v=4" alt="Helena Lima" />
                <h1>Helena Lima</h1>
                <div className='wrapper'>
                    <p>Olá, sou a desenvolvedora WEB com foco no front end utilizando de tecnologias como HTML, CSS, 
                    JS, REACT e TAILWIND. Além desse projeto, já desenvolvir alguns outros que podem ser visto no meu portifólio.
                    </p>
                    <a href="https://portifolio-principal-three.vercel.app/" target='_blank'><Browsers/> Acesse aqui</a>
                </div>
            </div>
        </div>
    )
}