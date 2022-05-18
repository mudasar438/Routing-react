import React from 'react'
import { useContext } from 'react'
import GlobelContext from './Context/NoteContext'

const Belog = () => {
  const {belogs:dd}=useContext(GlobelContext)
 
  return (
    <div>Belog

      <h3>First : {dd.first}</h3>
      <h3>Second : {dd.last}</h3>
    </div>
  )
}

export default Belog