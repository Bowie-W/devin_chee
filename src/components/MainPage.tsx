import './MainPage.scss'

export default function MainPage() : JSX.Element{

    return(
        <div className='mainPage_container'>
            <img className='mainPage_profilePic'></img>
            <div className='mainPage_bio_box'>
                <h2 className='maingPage_bio_box_tag'></h2>
                <p className='mainPage_bio_box_mainText'></p>
            </div>
            <div className='mainPage_audio'>
                <div className='mainPage_audio_musicPlayer'></div>
                <div className='mainPage_audio_tracks'> </div>
            </div>

        </div>

    )
}