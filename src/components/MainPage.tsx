import './MainPage.scss'
import axios from 'axios'
import { useEffect } from 'react'
import { Audioplayer } from './Audioplayer'

export default function MainPage({profile}) : JSX.Element{


    const tracks = [
        {
            url :'https://res.cloudinary.com/dl2liojkl/video/upload/v1671132047/xg3vk8jhm72n4ttqslv2.mp3',
            title : 'Pink and White',
            tags: ["r&b"],
        },
        {
            url :'https://res.cloudinary.com/dl2liojkl/video/upload/v1671132047/xg3vk8jhm72n4ttqslv2.mp3',
            title : 'Pink and White',
            tags: ["r&b", "rap"],
        }

        
    ]

    console.log(profile.picture)

    return(
        <div className='mainPage_container'>
            <img className='mainPage_profilePic' src={profile.picture}></img>
            <div className='mainPage_bio_box'>
                <h2 className='mainPage_bio_box_tag'>de_vinchee</h2>
                <p className='mainPage_bio_box_mainText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='mainPage_audio'>
                <Audioplayer/>
                <div className='mainPage_audio_tracks'> </div>
            </div>

        </div>

    )
}