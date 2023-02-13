import React from 'react'
import { Link } from 'react-router-dom';
import blogLogo from '../Assets/bloggapp.png';

const Navbar = () => {
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
              <span>Khalil</span>
              <span>Logout</span>
              <span className='write'>
                <Link className='link' to='/write'>Write</Link>
              </span>

          </div>
          
      </div>

    </div>
  )
}

export default Navbar