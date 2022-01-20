import "./intro.css"
import Me from "../../img/Me3.jpg"



const Intro = () => {
  return (
     <div className="i"> 
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Elon Mask</h1>
                <div className="i-tittle">
                    <div className="i-tittle-wrapper">
                        <div className="i-tittle-item">CEO of SpaceX</div>
                        <div className="i-tittle-item">CEO of Tesla</div>
                        <div className="i-tittle-item">Physic</div>
                        <div className="i-tittle-item">Billionaire</div>
                    </div>
                </div>
                <p className="i-desc">
                Visionary entrepreneur Elon Musk is the charismatic co-founder of PayPal (PYPL) and Tesla (TSLA),
                 as well as the founder of SpaceX, Neuralink, and The Boring Company.
                 He serves as CEO of Tesla and CEO/lead designer of SpaceX.
                </p>
            </div>

        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
     </div>
     )
}

export default Intro
