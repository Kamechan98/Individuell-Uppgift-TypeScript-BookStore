import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div>
    <div className='Header'>
      <div className='top'>
      <div className='call-to-action' id='call-to-action'>
      <a href="/" className='header-link'><h1><img src="https://www.sfbok.se/sites/all/themes/custom/sfbok/img/logo2x.png" alt="" /></h1></a>  
      </div>
      <a href='/create' id='create-btn'>Create new product</a>
      <a href='/shop' id='create-btn'>Shop</a>
      <a href='/contact-us' id='create-btn'>Contact us</a>
      <button>
      <img id='shop-img' src="https://icons.veryicon.com/png/o/education-technology/smart-campus-1/shopping-cart-88.png" alt="" />
      </button>
      </div>

      <div className='bottom'>
        <h2>Find your next big adventure here!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a officia fuga, voluptatem earum possimus assumenda nobis illo ut blanditiis consequatur quia eaque, id architecto provident corrupti. Rem, saepe et!</p>
      </div>
      
      
      
    </div>
    
      
  </div>
  )
}

export default Header