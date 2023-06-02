import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Payment from './pages/Payment'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/item' element={<Detail/>}/>
      <Route path='/payment' element={<Payment/>}/>
    </Routes>
  )
}

function WrappedApp(){
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default WrappedApp
