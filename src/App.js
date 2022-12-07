import React, { useEffect } from 'react'
import './App.css'
import List from './Components/List'

function App() {


  return (
    <div className='main'>
      <div className='head'>
        <h2 className='heading' >Toll Management Application</h2>
      </div>
      <List></List>


    </div>
  )
}

export default App