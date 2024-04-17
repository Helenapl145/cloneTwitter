import { FormEvent, KeyboardEvent, useEffect, useState } from 'react'

import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import avatar from '../assets/user.png'
import './Timeline.css'

export function Timeline() {
    const tweetsStorage = JSON.parse(localStorage.getItem('@tweets'));
    const initialTweets = Array.isArray(tweetsStorage) ? tweetsStorage : [];

    const [newTweet, setNewTweet] = useState('') 
    const [tweets, setTweets] = useState(initialTweets)

   

    if(tweets.length > 0){
      localStorage.setItem('@tweets', JSON.stringify(tweets))
    }

    function createNewTweet(e: FormEvent) {
      e.preventDefault()

      if(newTweet === '' ){
        alert('Escreva um tweet!')
        return
      }
      setTweets([newTweet, ...tweets])
  
      setNewTweet('')
    }

    function handleHotKeySubmit(e :  KeyboardEvent) {
        if(e.key === 'Enter' && (e.ctrlKey || e.metaKey)){
          if(newTweet === '' ){
            alert('Escreva um tweet!')
            return
          }
          setTweets([newTweet, ...tweets])
          setNewTweet('')
        }
    }
    

    function getData() {
      localStorage.setItem('@tweets', JSON.stringify(tweetsStorage))
      setTweets(tweetsStorage)
    }


    useEffect(() => {
      if (!tweetsStorage) {
        localStorage.setItem('@tweets', JSON.stringify([]));
      }else {
        getData()
      }
    })


    return(
        <main className='timeline'>
          <Header title='Home'/>
          <form className='newTweetForm' onSubmit={createNewTweet}>
            <label htmlFor="tweet">
              <img src={avatar} alt="avatar" />
              <textarea 
              id='tweet' 
              placeholder="What's happening?" 
              value={newTweet} 
              onKeyDown={handleHotKeySubmit}
              onChange={(e) => {
                setNewTweet(e.target.value)
              }}/>
            </label>

            <button type='submit'>Tweetar</button>
          </form>

          <Separator />

          {tweets.length > 0 && tweets.map((tweet, i) => (
            <Tweet 
              key={i} 
              content={tweet}
              />
          ))}
    
        </main>
    )
}