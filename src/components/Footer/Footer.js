import React from "react";
import "./Footer.css";
import { FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';
function Footer() {
  return (
    <div>
        
      <div className='flex shopping-cart'  >
      <h2 className="heading" >The Generics</h2>
        <div className="footer">
      <footer>
      <div>
        <a href="https://www.facebook.com/"><FaFacebook /></a>
        <a href="https://www.youtube.com/"><FaYoutube /></a>
        <a href="https://www.spotify.com/"><FaSpotify /></a>
      </div>
    </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
