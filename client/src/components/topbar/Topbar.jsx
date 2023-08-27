import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './topbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../../redux/apiCalls'

const Topbar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const handleLogout = () => {
        Logout(dispatch);
        window.location.href = '/'
    }
    const cart = useSelector(state=>state.cart)
    console.log(cart)
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="navbar">
                    <div className="search">
                        <input type="text" className="searchInput" placeholder='Search' />
                        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} size="xs" style={{ color: "#707070", }} />
                    </div>
                    <div className="logo">
                        <h1 className="">
                            SHOP CENTRAL.
                        </h1>
                    </div>
                    <div className="signup">
                        {user ? (<span onClick={handleLogout}>Logout</span>)
                            : (<><Link to='/register'>Regsiter</Link>
                                <Link to='/login'>Sign In</Link></>)}
                        <div className="cart">
                            <Link to='/cart'>
                                <FontAwesomeIcon className='icon' icon={faCartShopping} style={{ color: "#000000", }} />
                            </Link>
                            <span>{cart.totalQuantity}</span>
                        </div>
                    </div>
                </div>
                <div className="ticker">
                    <h5>Super Deal: Free Shipping on Orders Over $100</h5>
                </div>
            </div>
        </div>
    )
}

export default Topbar
