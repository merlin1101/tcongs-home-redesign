import digitalImg from "../../assets/digital.jpg"

const DigitalServices = () => {
    return (
        <>
            {/* <img src={ digitalImg } alt="Digital Image" /> */}
            <div className="content">
                <h2>Grow Your Digital Business</h2>
                <div className="digital-section">
                    <section className="promise">
                        <p>
                            <span>We build your digital foundation, </span> 
                            <span>then help you grow it</span>
                        </p>
                    </section>
                    <section className="digital-services">
                        <ul>
                            <li className="digital-service">Search Engine Optimization (SEO)</li>
                            <li className="digital-service">Social Media Marketing</li>
                            <li className="digital-service">Content Marketing</li>
                            <li className="digital-service">Google Ads (PPC Advertising)</li>
                            <li className="digital-service">Social Media Ads</li>
                            <li className="digital-service">Email Marketing</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

export default DigitalServices