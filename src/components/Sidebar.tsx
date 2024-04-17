import { DotsThreeCircle, MagnifyingGlass, House, Pencil, User, X } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '20px',
    boxShadow: '1px 1px 20px rgba(34, 34, 34, 0.158)',
    width: '80%'
  },
};

import avatar from '../assets/user.png'
import logoTwitter from '../assets/logo-twitter.svg'
import './Sidebar.css'



export function Sidebar() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    const tweetsStorage = JSON.parse(localStorage.getItem('@tweets'));
    const initialTweets = Array.isArray(tweetsStorage) ? tweetsStorage : [];

    const [newTweet, setNewTweet] = useState('') 
    const [tweets, setTweets] = useState(initialTweets)

   

    if(tweets.length > 0){
      localStorage.setItem('@tweets', JSON.stringify(tweets))
    }

    function createNewTweet() {
      window.location.reload()
      if(newTweet === '' ){
        alert('Escreva um tweet!')
        return
      }
      setTweets([newTweet, ...tweets])
      setNewTweet('')
      closeModal()
    }

    function handleHotKeySubmit(e :  KeyboardEvent) {
        if(e.key === 'Enter' && (e.ctrlKey || e.metaKey)){
          if(newTweet === '' ){
            alert('Escreva um tweet!')
            return
          }
          setTweets([newTweet, ...tweets])
          setNewTweet('')
          closeModal()
          window.location.reload()
        }
    }
    

    function getData() {
      localStorage.setItem('@tweets', JSON.stringify(tweetsStorage))
      setTweets(tweetsStorage)
    }



    function openModal() {
      setIsOpen(true);
    }


    function closeModal() {
      setIsOpen(false);
    }


    useEffect(() => {
      if (!tweetsStorage) {
        localStorage.setItem('@tweets', JSON.stringify([]));
      }else {
        getData()
      }
    })
    return (
      
      <aside className="sidebar">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal} className='closeBtn'><X /></button>          
          <form className='newTweetForm'  onSubmit={createNewTweet}>
            <label htmlFor="tweet">
              <img src={avatar} alt="avatar" />
              <textarea 
              id='tweet' 
              placeholder="What's happening?"
              className='tweetArea'
              value={newTweet} 
              onKeyDown={handleHotKeySubmit}
              onChange={(e) => {
                setNewTweet(e.target.value)
              }}
              />
            </label>
            <div className='line'/>
            <button type='submit'>Tweetar</button>
          </form>
        </Modal>
  
        <img src={logoTwitter} alt="Logo" className='logo'/>

        <nav className='mainNavigation'>
            <NavLink to='/'>
              <House weight='fill'/>
              <span>Home</span>
            </NavLink>
            <NavLink to='/search'>
              <MagnifyingGlass />
              <span>Explore</span> 
            </NavLink>
            <NavLink to="/user">
              <User />
              <span>Profile</span>
            </NavLink>
            <NavLink to="/more"> 
              <DotsThreeCircle />
              <span>More</span>
            </NavLink>
        </nav>

        <button className='newTweet' type='button' onClick={openModal}>
          <Pencil />
          <span>Tweetar</span>
          </button>
      </aside>
    )

}