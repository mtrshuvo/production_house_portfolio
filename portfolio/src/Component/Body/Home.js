import React, { useEffect, useState } from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'
import profileimg from "../../1.jpg"
const Home = () => {
  const [style, setStyle] = useState(false)

    window.addEventListener("load", (e)=> {
      setStyle(true);
    })
  return (
    <div className='main'>
      <div className='left'>Hello</div>
      <div className='right'>
        <div className='main-container'>
          <div className={`container-wrapper ${style ? 'transformdiv': ''}`}>
            <div className='avatar'>
              <img src={profileimg} width="300px" />
            </div>
            <div className='details'>
              <h1>John Doe</h1>
              <p>Creative Photographer based in New York and happy to travel all over Europe to capture photos</p>
              <ul className='social'>
                <li><a href="https://www.facebook.com"><FaFacebook /></a></li>
                <li><a href="https://www.facebook.com"><FaTwitter /></a></li>
                <li><a href="https://www.facebook.com"><FaYoutube /></a></li>
                <li><a href="https://www.facebook.com"><FaInstagram /></a></li>
                <li><a href="https://www.facebook.com"><FaTiktok /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home