import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCcPaypal, faCcStripe, faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="about">
        <h1>ALINA.</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
      
      <div className="Links">
        <h3>Useful Links</h3>
        <div className="linksWrapper">
          <ul>
            <li>Home</li>
            <li>Man Fashion</li>
            <li>Accessories</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
          </ul>
          <ul>
            <li>Cart</li>
            <li>Woman Fashion</li>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="Contact">
        <h3>Contact</h3>
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>622 Dixie Path, South Tobinchester 98336</span>
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} />
          <span>+1 234 56 78</span>
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>contact@lama.dev</span>
        </div>
        <div className="cards">
          <FontAwesomeIcon size="lg" icon={faCcPaypal} />
          <FontAwesomeIcon size="lg" icon={faCcVisa} />
          <FontAwesomeIcon size="lg" icon={faCcStripe} />
          <FontAwesomeIcon size="lg" icon={faCcMastercard} />
        </div>
      </div>
    
    </div>
  )
}

export default Footer
