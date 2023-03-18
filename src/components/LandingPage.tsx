import './LandingPage.scss'
import Header from './Header'
import MainPage from './MainPage'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function LandingPage() : JSX.Element{

    const [profile, setProfile] = useState({})

    useEffect(()=> {
        axios
        .get("http://localhost:3030/tracks")
        .then((response)=>{
            console.log(response)
        })    

    }, [])

    useEffect(()=> {
        axios
        .get("http://localhost:3030/profile")
        .then((response) => {
            setProfile(response.data[0])
        })

    }, [])


    return (
        <div className='landingPage_main'>
            <Header/>
            <MainPage profile={profile}/>

        </div>

    )
}