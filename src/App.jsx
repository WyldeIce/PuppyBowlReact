import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import {Routes, Route, useNavigate} from 'react-router-dom'
import NewPuppy from './Components/NewPuppy'
import AllPuppies from './Components/AllPuppy'
import SinglePuppy from './Components/SinglePuppy'
import NavBar from './Components/NavBar'

function App() {
const [puppies, setPuppies] = useState([])
const nav = useNavigate()

useEffect(() => {
  const fetchPuppies = async () => {
    const {data} = await axios.get("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    setPuppies(data.data.players)
  }
  fetchPuppies()
}, [])

const create = async (createdPuppy) => {
  const {data} = await axios.post("https://fsa-puppy-bowl.herokuapp.com/api/2310/players", createdPuppy)
  setPuppies([...puppies], data)
}

const deletePuppy = async (retire) => {
await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${retire.id}`)
setPuppies(puppies.filter((keepPuppies) => {
  return keepPuppies.id !== retire.id
}))
nav('/puppies')
}

return (
  <div>
    <Routes>
      <Route path='/puppies' element={<AllPuppies puppies={puppies} />} />
      <Route path='/puppies/:id' element={<SinglePuppy puppies={puppies} deletePuppy={deletePuppy} />} />
      <Route path='/puppies/newpuppy' element={<NewPuppy create={create} />} />
    </Routes>

    <h2>Search - </h2>
    <NavBar puppies={puppies} />
  </div>
)
}

export default App
