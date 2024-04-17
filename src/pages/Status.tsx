import { KeyboardEvent, useEffect, useState } from 'react'
import { PaperPlaneRight } from 'phosphor-react'
import { useParams } from 'react-router-dom'

import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import avatar from '../assets/user.png'
import './Status.css'

export function Status(){
    const answersStorageJSON: string | null = localStorage.getItem('@answers');
    const answersStorage: string[] = answersStorageJSON ? JSON.parse(answersStorageJSON) : null;
    
    const initialAnswers: string[] = Array.isArray(answersStorage) ? answersStorage : [];

    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState<string[]>(initialAnswers)

    const params = useParams()
    const content = params.content

    if(answers.length > 0){
      localStorage.setItem('@answers', JSON.stringify(answers))
    }

    function createNewAnswer(e: { preventDefault: () => void }) {
      e.preventDefault()
      
      setAnswers([newAnswer, ...answers, ])
      setNewAnswer('')
    }

    function handleHotKeySubmit(e :  KeyboardEvent) {
        if(e.key === 'Enter' && (e.ctrlKey || e.metaKey)){
            setAnswers([newAnswer, ...answers, ])
            setNewAnswer('')
        }
    }

    function getData() {
        localStorage.setItem('@answers', JSON.stringify(answersStorage))
        setAnswers(answersStorage)
      }
  

      useEffect(() => {
        if (!answersStorage) {
          localStorage.setItem('@answers', JSON.stringify([]));
        }else {
          getData()
        }
      },[])



    
    return(
        <main className='status'>
            <Header title='Tweet'/>

            <Tweet content={content}/>

            <Separator />

            <form className='answerTweetForm' onSubmit={createNewAnswer}>

                <label htmlFor="tweet">
                    <img src={avatar} alt="avatar" />
                    <textarea 
                        id='tweet' 
                        placeholder="Tweet your answer" 
                        value={newAnswer}
                        onKeyDown={handleHotKeySubmit}
                        onChange={(e) => {
                        setNewAnswer(e.target.value)
                    }}/>
                </label>

                <button type='submit'>
                    <PaperPlaneRight />
                    <span>Answers</span>
                </button>
            </form>

            

          {answers.length > 0 && answers.map((answer, i) => {
            return <Tweet key={i} content={answer}/>
            })}
  
      </main>
    )
}