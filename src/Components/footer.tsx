import logo from "../Assets/Elewa-logo.svg"
import facebook from "../Assets/facebook.svg"
import instagram from "../Assets/instagram.svg"
import linekdin from "../Assets/linkedin.svg"

export default function Footer(){
    return (
        <div id="elewa-footer">
            <div id="footer-container">
                <div className="footer-text">
                    <a href="https://goo.gl/maps/qvfSXLhuTJzxX7j29">
                    <h4>Headquaters</h4>
                    <p>The Promenade, 19 General</p>
                    <p>Mathenge Rd</p>
                    <p>Nairobi Kenya</p>
                    </a>
                </div>

                <div className="footer-text">
                    <a href="tel:+254.78.92.27.755">
                    <h4>Contacts</h4>
                    <p>T +254 78 92 27 755</p>
                    <p>E info Kenya</p>
                    </a>
                </div>

                <div className="footer-text">
                    <h4>Navigation</h4>
                    <p><a href="/social-impact">Social Impact</a></p>
                    <p><a href="/about-us">About Us</a></p>
                    <p><a href="/invest">Invest</a></p>
                </div>

                <div className="footer-text">
                    <h4>Brands</h4>
                    <p>Elewa</p>
                    
                    <p>Italanta</p>
                    
                    <p>Venture Hubs</p>
                </div>

                <div className="footer-text">
                    <h4>Privacy</h4>
                    <p>Terms and conditions</p>
                    <p>Cookie preference</p>
                </div>
            </div>

            <div id="footer-img">
                <img src={logo} alt="" />
                <div id="footer-icons">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linekdin} alt="" />
                </div>
            </div>
        </div>
    )
}