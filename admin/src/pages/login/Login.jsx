import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { loginFailure, loginStart, loginSuccess, logout } from '../../redux/userRedux'
import { useDispatch, useSelector } from "react-redux"
// import './login.css'


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const { currentUser,isFetching, error } = useSelector((state) => state.user)

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginStart())
        try {
            axios.post("http://localhost:8800/auth/login", {email,password}, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            }).then(res => {
                console.log(res);
                if (res.data.isAdmin === 'true') {
                    dispatch(loginSuccess(res.data));
                }
            }).catch(err => {
                console.log(err);
                dispatch(loginFailure())
            })

        } catch (err) {
            dispatch(loginFailure())
        }
    }
    console.log(currentUser)
    return (
        <div style={{marginLeft:'230px'}}>
            <form onSubmit={handleLogin} className='loginForm'>
                <input type="text" placeholder='email' onChange={e => { setEmail(e.target.value) }} />
                <input type="text" placeholder='password' onChange={e => { setPassword(e.target.value) }} />
                <button disabled={isFetching} type='submit'>Login</button>
                {error && <h3>Invalid email or password</h3>}
            </form>
        </div>
    )
}

export default Login
