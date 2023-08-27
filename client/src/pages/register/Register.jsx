import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './register.css'


function Register() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')
 const navigate = useNavigate()
  const handleRegister = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8800/auth/register',{username,email,password},{
        headers: {"Content-Type": "application/json"},
        withCredentials: true
      }
    ).then(res=>{console.log(res); window.location.href='/login'}).catch(err=>console.log(err))
  
  }
    return (
    <div>
      <form onSubmit={handleRegister} className='registerForm'>
      <input type="text" placeholder='username' onChange={e=>{setUsername(e.target.value)}}/>
        <input type="text" placeholder='email' onChange={e=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder='password' onChange={e=>{setPassword(e.target.value)}} />
        <button type='submit'>Login</button>
      {/* {error && <h3>Something went wrong</h3> } */}
      </form>
    </div>
  )
}

export default Register
