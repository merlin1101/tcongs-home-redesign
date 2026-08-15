import flameImg from "../../assets/flame.svg"
import repeatedClients from "../../assets/repeated-clients.svg"
import userCircle from "../../assets/user-circle.svg"
import smileImg from "../../assets/smile.svg"

const WhyUs = () => {
    return (
        <>
            <div className="content">
                <h2>Why Choose Us?</h2>
                <div className="our-mission">
                    <p>Tcongs Infotech aims to empower businesses with innovative digital solutions that drive real growth. We combine technology, creativity, and strategy to build high-performance websites and scalable digital products that deliver measurable results.</p>
                    <p className="since-2020">Since 2020, what we achieved... </p>
                    <div className="achievements">
                        <section className="achievement projects">
                            <img src={ flameImg } alt="flame" />
                            <h3>150+</h3>
                            <p>Projects Delivered</p>
                        </section>
                        <section className="achievement clients">
                            <img src={ repeatedClients } alt="repeated clients" />
                            <h3>80+</h3>
                            <p>Happy Clients</p>
                        </section>
                        <section className="achievement team">
                            <img src={ userCircle } alt="user circle" />
                            <h3>10+</h3>
                            <p>Team Members</p>
                        </section>
                        <section className="achievement rating">
                            <img src={ smileImg } alt="smile" />
                            <h3>4.9+</h3>
                            <p>Client Rating</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs