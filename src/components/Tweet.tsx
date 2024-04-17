import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import avatar from '../assets/user.png'
import './Tweet.css'

interface TweetProps {
    content?: string
}


export function Tweet({content} :  TweetProps) {
    const navigate = useNavigate()
    
    function handleClick() {
        navigate(`/status/${content}`)
          
    }

    return(
        <div className='tweet' onClick={handleClick}>
            <img src={avatar} alt="avatar" />

            <div className="tweetContent">
                <div className="tweetContentHeader">
                    <strong>Visitante</strong>
                    <span>@visitante145</span>
                </div>

                <p>
                   {content}
                </p>

                <div className="tweetContentFooter">
                    <button type='button'>
                        <ChatCircle />
                        20
                    </button>
                    <button type='button'>
                        <ArrowsClockwise />
                        20
                    </button>
                    <button type='button'>
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </div>
    )
}