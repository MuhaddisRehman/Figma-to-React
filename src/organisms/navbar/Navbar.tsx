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
                <li><span>Home</span></li>
                <li><span>Pages</span></li>
                <li><span>About</span></li>
                <li><span>Services</span></li>
                <li><span>Contact</span></li>
                <li><span><img src={cartIcon} alt="cart icon" /></span></li>
            </ul>
            
            <BaseButton title='Order Today' variant="primary-sm"/>
        </div>
    </div>
  )
}

export default Navbar