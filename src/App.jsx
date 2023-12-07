import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import {Home,SearchPage} from './pages/index'

function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Search' element={<SearchPage/>}/>
      </Routes>
    </Router>
      {/* {<Home/>} */}

      {/* {<Search/>} */}
    </>
  )
}

export default App
