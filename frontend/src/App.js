import {useState, useEffect} from 'react'
import "./App.css"
import getNames from './response.js'

const App = () => {

  const [userName, setUserName] = useState("")

  useEffect(() => {
    getNames().then(({name}) => {
      setUserName(name)
    })
  }, [])

  return (
    <div className="App">
      <h2>Website</h2>
     <p>This is {userName} </p> 
    </div>
  )
}

export default App
