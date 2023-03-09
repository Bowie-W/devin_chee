import { ReactElement } from 'react'
import './Header.scss'

export default function Header() : ReactElement{


    return(
        <div className='header_container'>
            <div className='header_left-box'></div>
            <h1 className='header_title'> Madelusiv</h1>
            <div className='header_right-box'></div>
        </div>
    )
}