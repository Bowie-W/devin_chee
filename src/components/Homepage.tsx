import axios from 'axios'
import { ReactComponentElement, ReactElement, useEffect, useState } from 'react'
import './Homepage.scss'
import Intro from './intro'
import LandingPage from './LandingPage'


function Homepage() {

  const [introEle, setIntroEle] = useState< JSX.Element| null>(<Intro/>)
  const [landPageStatus, setLandPageStatus] = useState <JSX.Element | null>(null)

  const [profile, setProfile] = useState({})
  const [tracks, setTracks] = useState([])

    useEffect(()=> {
        axios
        .get("http://localhost:3030/tracks")
        .then((response)=>{
            setTracks(response.data)
        })    

    }, [])

    useEffect(()=> {
        axios
        .get("http://localhost:3030/profile")
        .then((response) => {
            setProfile(response.data[0])
        })

    }, [])

  setTimeout(()=>{
    setIntroEle(null)
    setLandPageStatus(<LandingPage profile={profile} tracks={tracks}/>)
}, 6250)

  return (
    <div className="Homepage">
     {introEle} 
     {landPageStatus}
    </div>
  )
}

export default Homepage
