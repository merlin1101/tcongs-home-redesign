import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer () {
    return (
        <>
        <footer>
            <div id="footer-top">
                <section className="details">
                    <p>Empowering global brands with 8+ years of expertise in custom web development, e-commerce marketplace optimization, and Generative Engine Optimization (GEO). We turn complex challenges into seamless digital growth. </p>
                    <p className='social-icons'>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </p>
                </section>
                <section className="sevices">
                    <h6>Services</h6>
                    <ul>
                        <li><a href=''>Web & App Development</a></li>
                        <li><a href=''>Software Development</a></li>
                        <li><a href=''>E-commerce Solutions</a></li>
                        <li><a href=''>Digital Marketing</a></li>
                        <li><a href=''></a>Branding & UI/UX</li>
                        <li><a href=''>Business Growth</a></li>
                    </ul>
                </section>
                <section className="quick-links">
                    <h6>Quick Links</h6>
                    <ul>
                        <li><a href="#"></a>Home</li>
                        <li><a href="#"></a>Company</li>
                        <li><a href="#"></a>Services</li>
                        <li><a href="#"></a>Connect</li>
                    </ul>
                </section>
                <section className="location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30145.555451685566!2d72.81774424532803!3d19.186708332756133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6ef84440105%3A0x810ca1995ed5e4b7!2sMumbai%2C%20Maharashtra%20400064%2C%20India!5e0!3m2!1sen!2sae!4v1786724359494!5m2!1sen!2sae" width="300" height="150" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    <p className="location-data">Mumbai Office: Based in Mumbai, India. Serving clients worldwide.</p>
                </section>
            </div>
            <div id="footer-bottom">
                <p className='copyright pt-4'>© 2026 Tcongs Infotech. All Rights Reserved</p>
            </div>
        </footer>
        </>
    )
}

export default Footer