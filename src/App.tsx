import { ReactComponentElement, ReactElement, useState } from 'react'
import './App.scss'
import Intro from './components/intro'
import LandingPage from './components/LandingPage'

function App() {

  const [introEle, setIntroEle] = useState< JSX.Element| null>(<Intro/>)
  const [landPageStatus, setLandPageStatus] = useState <JSX.Element | null>(null)

  setTimeout(()=>{
    setIntroEle(null)
    setLandPageStatus(<LandingPage/>)
}, 6250)

  return (
    <div className="App">
     {introEle} 
     {landPageStatus}
    </div>
  )
}

export default App
