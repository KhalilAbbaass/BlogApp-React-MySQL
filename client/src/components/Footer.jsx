import React from 'react';
import blogLogo from '../Assets/bloggapp.png';

const Footer = () => {
  return (
   <footer>

    <img alt='' src={blogLogo}></img>
    <span>
      Made with ❤ <b>React.js</b>
    </span>

   </footer>
  )
}

export default Footer