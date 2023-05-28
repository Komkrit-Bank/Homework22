import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

function WrapppedApp(){
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default WrapppedApp
