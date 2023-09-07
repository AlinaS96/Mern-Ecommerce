import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import './topbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Logout } from '../../redux/apiCalls'

const Topbar = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(state => state.user.currentUser)
    const handleLogout = () => {
        dispatch(Logout);
    }
    const cart = useSelector(state => state.cart)
    console.log(user)
    console.log(cart)

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const searchClick = () => {
        if (searchValue) {
            navigate('/products', { state: searchValue })
        }
    }
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="navbar">
                    <div className="search">
                        <input type="text" className="searchInput" placeholder='Search' onChange={handleSearchChange} />
                        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} size="xs" style={{
                            color: "#707070", ':hover': {
                                cursor: 'pointer',
                            }
                        }} onClick={searchClick} />
                    </div>
                    <div className="logo" >
                        <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                            <h1>
                                SHOP CENTRAL.
                            </h1>
                        </Link>
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
