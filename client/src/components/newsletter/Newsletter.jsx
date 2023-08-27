import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import './newsletter.css'


const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className="newsletterWrapper">
        <h1>Newsletter</h1>
        <h5>Get timely updates from your favorite products</h5>
        <div className="Search">
          <div className="searchInput">
            <input type="text" placeholder="Your email"/>
          </div>
          <div className="playIcon">
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
