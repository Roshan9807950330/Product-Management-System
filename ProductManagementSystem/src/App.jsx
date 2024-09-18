import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Single from './pages/Single'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/product' element={<Single/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
