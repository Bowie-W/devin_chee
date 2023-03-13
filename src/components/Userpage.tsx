import './Userpage.scss'
import Login from './Login'
import Editing from './Editing'


export default function Userpage(){

    return(
        <div>
            {<Login/>}
            {<Editing/>}

        </div>
    )
}