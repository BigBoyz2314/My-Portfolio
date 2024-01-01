import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <div className="textContainer">
                <h2>ZAIN IMRAN</h2>
                <h1>Web Developer</h1>
                <div className="buttons">
                    <button>See The Lasted Works</button>
                    <button>Contact Me</button>
                </div>
                <img src="/scroll.png" alt="" />
            </div>
        </div>
        <div className="imageContainer">
            <img src="/zain.png" alt="" />
        </div>
    </div>
  )
}

export default Hero