import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateBlog from './CreateBlog'
import Library from './Library'
import Stories from './Stories'
import Stats from './Stats'
import Profile from './Profile'

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/createblog' element ={<CreateBlog/>}/>
        <Route path='/library' element ={<Library/>}/>
        <Route path='/stories' element ={<Stories/>}/>
        <Route path='/stats' element ={<Stats/>}/>
        <Route path='/profile' element ={<Profile/>}/>


      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App