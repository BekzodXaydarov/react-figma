import Button from "../Button/Button"
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero container-padding" id="home">
       <div className="hero-info">
        <h3 className="hero-info-text" data-aos="fade-right">Explorer and Travel</h3>
        <h1 className="hero-info-title" data-aos="fade-right">Let’s Go Now</h1>
        <p className="hero-info-description" data-aos="fade-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className="hero-info-time" data-aos="fade-up">
            <div className="hero-info-location">
                <img src="/svgs/location.svg" alt="search" />
                <div className="hero-info-time-text">
                    <span>Location</span>
                    <h4>Thailand</h4>
                </div>
            </div>
            <div className="line"></div>
            <div className="hero-info-date">
            <img src="/svgs/date.svg" alt="search" />
                <div className="hero-info-time-text">
                    <span>Date</span>
                    <h4>13 May, 2023</h4>
                </div>
            </div>
            <Button img="/svgs/search.svg" style={{width:"65px",height:"65px"}} />
        </div>
       </div>
       <div></div>
    </section>
  )
}

export default Hero
