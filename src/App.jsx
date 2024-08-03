import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import WatchList from './components/Watchlist'
import {Routes, Route} from 'react-router-dom'
// import WatchListContextWrapper from './context/WatchListContext'
import Provider from './context/WatchListContext'
import store from './redux/store'
import User from './components/User'
import UserRedux from './components/UserRedux'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider>
    {/* <User/> */}
    {/* <UserRedux/> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
      </Routes>
      </Provider>
  )
}

export default App
