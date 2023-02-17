import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import blogLogo from '../Assets/bloggapp.png';
import { AuthContext } from '../Context/authContext';

const Navbar = () => {

  const {logout , currentUser} = useContext(AuthContext);


  return (
    <div className='navbar'>
      <div className='container'>
          <div className='logo'><img alt='' src={blogLogo}></img></div>
            <div className='links'>
              <Link className='link' to='/?cat=art'><h4>Art</h4></Link>
              <Link className='link' to='/?cat=Science'><h4>Science</h4></Link>
              <Link className='link' to='/?cat=Technology'><h4>Technology</h4></Link>
              <Link className='link' to='/?cat=Cinema'><h4>Cinema</h4></Link>
              <Link className='link' to='/?cat=Design'><h4>Design</h4></Link>
              <Link className='link' to='/?cat=Food'><h4>Food</h4></Link>
              <span>{currentUser?.username }</span>
             {currentUser ? 
             (
             <span onClick={logout}>Logout</span> 
             ) : (
             <Link className='link' to='/login'>Login</Link>
             )}
              <span className='write'>
                <Link className='link' to='/write'>Write</Link>
              </span>

          </div>
          
      </div>

    </div>
  )
}

export default Navbar