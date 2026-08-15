import web from '../../assets/web.svg'
import software from '../../assets/software.svg'
import ecommerce from '../../assets/ecommerce.svg'
import digital from '../../assets/digital.svg'
import branding from '../../assets/branding.svg'
import growth from '../../assets/growth.svg'

const Services = () => {
    return (
        <>
            <div className='content'>
                <h2>What We Offer?</h2>
                <div className='services'>
                    <div className='service web-app-development'>
                        <img src={ web } alt="Web & App Development" />
                        <h3>Web & App Development</h3>
                    </div>
                    <div className='service software-development'>
                        <img src={ software } alt="Software Development" />
                        <h3>Software Development</h3>
                    </div>
                    <div className='service ecommerce-solutions'>
                        <img src={ ecommerce } alt="Ecommerce Solutions" />
                        <h3>Ecommerce Solutions</h3>
                    </div>
                    <div className='service digital-marketing'>
                        <img src={ digital } alt="Digital Marketing" />
                        <h3>Digital Marketing</h3>
                    </div>
                    <div className='service branding-ui-ux'>
                        <img src={ branding } alt="Branding & UI/UX" />
                        <h3>Branding & UI/UX</h3>
                    </div>
                    <div className='service business-growth'>
                        <img src={ growth } alt="Business Growth" />
                        <h3>Business Growth</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services