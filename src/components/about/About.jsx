import Me from "../../img/Me6.jpg"
import Mon from "../../img/1.jpg"
import "./About.css"
const About = () => {
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-tittle">About Me</h1>
                <h3 className="a-sub">
                Elon Musk has had two wives but is currently unmarried. 
                Since 2018, he has been in a relationship with the Canadian singer/songwriter Claire Elise Boucher, 
                professionally known as Grimes, with whom he has a son.
 
                </h3>
                <p className="a-desc">
                Elon Reeve Musk FRS (born June 28, 1971) is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; 
                early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. 
                With an estimated net worth of around US$270 billion as of January 2022,
                 Musk is the wealthiest person in the world according to the Bloomberg billionaires index and the Forbes real-time billionaires list.
                </p>
                <div className="a-award">
                    <img src={Mon} alt="" className="a-award-img" />
                    <div className="a-award-text">
                    <h4 className="a-award-title">2008 National Conservation Achievement</h4>
                    <p className="a-award-desc">2008 National Conservation Achievement award for Tesla and SolarCity. 
                    Other 2008 recipients include journalist Thomas Friedman, U.S. Senator Patrick Leahy (D-VT), 
                    and Florida Governor Charlie Crist.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About