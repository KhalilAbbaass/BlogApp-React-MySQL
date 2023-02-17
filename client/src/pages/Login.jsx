import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/authContext'
// this is used in context not here anymore
// import { loginUser } from '../services/Login'

const Login = () => {
  
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })

  const [err,setErr] = useState(null)

  const navigate = useNavigate()

  //login should come from the context api
  const {login} = useContext(AuthContext)
  
  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    //no need to use this way when we have context api
  //  await  loginUser(inputs).then((result) => {
  //     navigate('/')
  //   }).catch((err) => {
  //     setErr(err.response.data)
  //   })
  try{

    //login function from context
    await login(inputs);
    navigate('/')
  }catch(err){
    setErr(err.response.data)
  }

  }

  return (
    <div className='loginDiv'>
      <h1>Login</h1>
      <form>
        <input required type='text'  placeholder='username' name='username' onChange={handleChange}/>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Dont Have an Account ? <Link to='/register'>Register</Link></span>
      </form>


    </div>
  )
}

export default Login