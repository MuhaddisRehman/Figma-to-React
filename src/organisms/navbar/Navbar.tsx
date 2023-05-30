import React, { FC } from 'react'
import pagesIcon from '../../assets/icons/pages.png'
import fbIcon from '../../assets/icons/Facebook.png'
import twIcon from '../../assets/icons/Twitter1.png'
import instIcon from '../../assets/icons/insta.png'
import inIcon from '../../assets/icons/Linkedin.png'
import cartIcon from '../../assets/icons/cart.png'
import './navbar.css'
import BaseButton from '../../atoms/Button/BaseButton'
const Navbar:FC = () => {
  return (
    <div className='navbar'>
        
        <div className='navLeft'>
            <span><img src={pagesIcon} alt="page icon" />Pages</span>
            <div className='mediaIcons'>
                <img src={fbIcon} alt="facebook icon" />
                <img src={twIcon} alt="twitter icon" />
                <img src={inIcon} alt="linkedin icon" />
            </div>
        </div>
        <div className="navRight">
            <ul>
                <li><span><a href="#!">Home</a></span></li>
                <li><span><a href="#!">Pages</a></span></li>
                <li><span><a href="#!">About</a></span></li>
                <li><span><a href="#!">Services</a></span></li>
                <li><span><a href="#!">Contact</a></span></li>
                <li><span><img src={cartIcon} alt="cart icon" /></span></li>
            </ul>
            
            <BaseButton title='Order Today' variant="primary-sm"/>
        </div>
    </div>
  )
}

export default Navbar