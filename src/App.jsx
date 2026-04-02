import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Information from "./components/Information";
import Tecnology from "./components/Tecnology";
import Start from "./components/Start";
import Footer from "./components/Footer";
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/register'
import './App.css'

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Information />
      <Tecnology />
      <Start />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
