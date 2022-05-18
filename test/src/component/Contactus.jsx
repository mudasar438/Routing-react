import React from 'react'
import { useContext } from 'react'
import GlobelContext from './Context/NoteContext'

const Contactus = () => {
  const {pnumber:mycontect} = useContext(GlobelContext)
  const {mud} =useContext(GlobelContext)
  

  // console.log(mud)
  return (
    <div>Contactus

      <h3>Office: {mycontect.office}</h3>
      <h3> Home: {mycontect.home}</h3>
      <h3> Email: {mycontect.email}</h3>

      <h3>Developers : {mud}</h3>
    </div>
  )
}

export default Contactus