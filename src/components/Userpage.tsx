import './Userpage.scss'
import Login from './Login'
import Editing from './Editing'
import {useState } from 'react'


export default function Userpage(){

    const [logStatus, setLogStatus] = useState(true)

    return(
        <div>
            { !logStatus && <Login logStatus={logStatus} setLogStatus={setLogStatus}/>}
            { logStatus && <Editing/>}

        </div>
    )
}