import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Api from './components/Api.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Header/>
    <Main/>
    <Api/>
    </>
    );
  
}

export default App
