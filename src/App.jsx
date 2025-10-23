import React from 'react'
import Front from './pages/Front'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Front/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App