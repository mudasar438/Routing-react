import React from 'react'
import { useContext } from 'react'
import GlobelContext from './Context/NoteContext'

const About = () => {
  const {initial:PropsFromMain} = useContext(GlobelContext)
  // console.log(PropsFromMain)
  return (
    <div>About


      <h3>Name: {PropsFromMain.name}</h3>
      <h3>Age:{PropsFromMain.Age} </h3>
      <h3>Company: {PropsFromMain.company}</h3>
    </div>
  )
}

export default About