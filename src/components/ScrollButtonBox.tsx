import '../styles/ScrollButtonBox.scss'

function ScrollButtonBox({parallax}) {
  return (
    <div className='buttonBox'>
    <div className="buttonBox-container">
    <button onClick={() => parallax.current.scrollTo(0)} className="buttonBox-button">Profile</button>
    <button onClick={() => parallax.current.scrollTo(0.9)} className="buttonBox-button">Projects</button>
    <button onClick={() => parallax.current.scrollTo(2)} className="buttonBox-button">EPs</button>
    </div>
    </div>
  )
}

export default ScrollButtonBox