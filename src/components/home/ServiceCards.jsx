import webdevelopmentImg from '../../assets/web-development.png'
import digitalmarketingImg from '../../assets/digital-marketing.png'
import businessgrowthImg from '../../assets/business-growth.png'

const ServiceCards = () => {
    return (
        <>
            <div className='content'>
                <img src={ webdevelopmentImg } alt="Web Development" />
                <img src={ businessgrowthImg } alt="Business Growth" />
                <img src={ digitalmarketingImg } alt="Digital Marketing" />
            </div>
        </>
    )
}

export default ServiceCards