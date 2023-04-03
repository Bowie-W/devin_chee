import './LandingPage.scss'
import Header from './Header'
import MainPage from './MainPage'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from './Footer'

export default function LandingPage({profile, tracks, eps}) : JSX.Element{



    return (
        <div className='landingPage_main'>
            <Header/>
            <MainPage profile={profile} tracks={tracks} eps={eps}/>
            <Footer/>

        </div>

    )
}