import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='left'><FontAwesomeIcon icon={faChevronLeft} size="lg" style={{ color: "#808080", }} /></div>
            <div className='headerDetails'>
                <span>SUMMER SALE</span>
                <h2>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</h2>
                <button>
                    <span>Shop Now</span>
                    <FontAwesomeIcon className='caret' icon={faCaretRight} size="xs" style={{ color: "#000000", }} />
                </button>
            </div>
            <div className='right'><FontAwesomeIcon icon={faChevronRight} size="lg" style={{ color: "#6e6e6e", }} /></div>
        </div>
    )
}

export default Header
