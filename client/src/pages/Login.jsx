import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginDiv'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username'/>
        <input required type='password' placeholder='password'/>
        <button>Login</button>
        <p>This is an error</p>
        <span>Dont Have an Account ? <Link to='/register'>Register</Link></span>
      </form>


    </div>
  )
}

export default Login