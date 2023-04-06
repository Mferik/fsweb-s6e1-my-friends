import React from 'react'
import PetsList from './PetsList'

export default function Friend() {
  /* 👉 önce başka bir compenenti bitirmen lazım? */


  /* 👉 Ya friend'leri yoksa? bunu unutmayalım. Bir şey yapmak lazım*/
  return (
    <div className='friend-friends container'>
      <div className='friend-info'>
        <div>
          <h3>Adı: Fatih </h3>
          <p>Yaş: 55 </p>
          <p>Evli mi?: Evet <button>Değiştir</button></p>
          <div>Hobileri:
            <ul>
             
            </ul>
          </div>
        </div>

        <div>
        <PetsList/>
        </div>
      </div>
    </div>
  )
}
