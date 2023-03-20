import './LandingPage.scss'
import Header from './Header'
import MainPage from './MainPage'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function LandingPage({profile, tracks}) : JSX.Element{



    return (
        <div className='landingPage_main'>
            <Header/>
            <MainPage profile={profile} tracks={tracks}/>

        </div>

    )
}