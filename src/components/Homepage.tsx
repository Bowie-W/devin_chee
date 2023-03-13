import { ReactComponentElement, ReactElement, useState } from 'react'
import './Homepage.scss'
import Intro from './intro'
import LandingPage from './LandingPage'
import { BrowserRouter, Routes, Route} from "react-router-dom"

function Homepage() {

  const [introEle, setIntroEle] = useState< JSX.Element| null>(<Intro/>)
  const [landPageStatus, setLandPageStatus] = useState <JSX.Element | null>(null)

  setTimeout(()=>{
    setIntroEle(null)
    setLandPageStatus(<LandingPage/>)
}, 6250)

  return (
    <div className="Homepage">
     {introEle} 
     {landPageStatus}
    </div>
  )
}

export default Homepage
