import React from 'react'
import Search from './Search'
import FriendsList from './FriendsList'
import PetsList from './PetsList'


export default function App() {

  /* 👉 Buraya state tanımlamak gerekli mi? */

  return (
    <div className='app-friends container'>
      <Search/>
      <FriendsList/>
      
    </div>
  )
}
