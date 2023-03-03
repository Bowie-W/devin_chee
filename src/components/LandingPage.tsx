import './LandingPage.scss'
import Header from './Header'
import MainPage from './MainPage'

export default function LandingPage() : JSX.Element{

    return (
        <div className='landingPage_main'>
            <Header/>
            <MainPage/>

        </div>

    )
}