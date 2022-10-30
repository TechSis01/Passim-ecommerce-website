import React,{useState,createContext,Fragment, useEffect,useContext} from 'react'
import { globalVariable } from '../App'
const Nav = [
    {
        brandName:'PASSIM',
        home:'HOME',
        shop:'SHOP',
        page:'PAGES',
        blog:'BLOG',
        landing:'LANDING'
    }
]
const pages = ["About Us","About Me","Gift Cards","Pricing Plans","Contact Us","404 Error Page"]

const Navbar = ({showPages,setShowPages,cartproducts,setCartProducts})=>{
    
    const {cartVisible,setCartVisible,navBar, setNavBar} = useContext(globalVariable)
    
  
    function showNav(){
        setNavBar(!navBar)
    }
    let searchIcon = <i className="fa-solid fa-magnifying-glass"></i>
    let cartIcon =  <i className="fi fi-rr-shopping-bag"></i>

    

    const showCartContainer = ()=>{
        setCartVisible(!cartVisible)
    }

    
    
    return(
        <Fragment>
            <nav>
                <div className="brand">
                    <h1>{Nav[0].brandName}</h1>
                </div>
                <div className = {`right-menu ${navBar ? 'right-menu-visible' : ''}`}>
                <div className = "dropdown">
                    <div id="link">{Nav[0].home}</div>
                    <div className="dropdown-content">
                       <ul>
                            <li><a href="">{pages[0]}</a></li>
                            <li><a href="">{pages[1]}</a></li>
                            <li><a href="">{pages[2]}</a></li>
                            <li><a href="">{pages[3]}</a></li>
                            <li><a href="">{pages[4]}</a></li>
                            <li><a href="">{pages[5]}</a></li>
                       </ul>
                    </div>
                </div>
                <div className = "dropdown">
                    <div  id="link">{Nav[0].shop}</div>
                    <div className="dropdown-content" id="larger-container">
                        <div className="flex-container">
                       <ul>
                            <li><a href="">{pages[0]}</a></li>
                            <li><a href="">{pages[1]}</a></li>
                            <li><a href="">{pages[2]}</a></li>
                            <li><a href="">{pages[3]}</a></li>
                            <li><a href="">{pages[4]}</a></li>
                            <li><a href="">{pages[5]}</a></li>
                       </ul>
                       <ul>
                            <li><a href="">{pages[0]}</a></li>
                            <li><a href="">{pages[1]}</a></li>
                            <li><a href="">{pages[2]}</a></li>
                            <li><a href="">{pages[3]}</a></li>
                            <li><a href="">{pages[4]}</a></li>
                            <li><a href="">{pages[5]}</a></li>
                       </ul>
                       <ul>
                            <li><a href="">{pages[0]}</a></li>
                            <li><a href="">{pages[1]}</a></li>
                            <li><a href="">{pages[2]}</a></li>
                            <li><a href="">{pages[3]}</a></li>
                            <li><a href="">{pages[4]}</a></li>
                            <li><a href="">{pages[5]}</a></li>
                       </ul>
                       </div>
                    </div>
                </div>
                <div className = "dropdown">
                    <div  id="link">{Nav[0].page}</div>
                    <div className="dropdown-content">
                       <ul>
                            <li><a href="">{pages[0]}</a></li>
                            <li><a href="">{pages[1]}</a></li>
                            <li><a href="">{pages[2]}</a></li>
                            <li><a href="">{pages[3]}</a></li>
                            <li><a href="">{pages[4]}</a></li>
                            <li><a href="">{pages[5]}</a></li>
                       </ul>
                    </div>
                </div>
                <div className = "dropdown">
                    <div  id="link">{Nav[0].blog}</div>
                    <div className="dropdown-content">
                       <ul>
                            <li><a href="">{pages[0]}</a></li>
                            <li><a href="">{pages[1]}</a></li>
                            <li><a href="">{pages[2]}</a></li>
                            <li><a href="">{pages[3]}</a></li>
                            <li><a href="">{pages[4]}</a></li>
                            <li><a href="">{pages[5]}</a></li>
                       </ul>
                    </div>
                </div>
                <div className = "dropdown">
                    <div  id="link">{Nav[0].landing}</div>
                    <div className="dropdown-content">
                       <ul>
                            <li><a href="">{pages[0]}</a></li>
                            <li><a href="">{pages[1]}</a></li>
                            <li><a href="">{pages[2]}</a></li>
                            <li><a href="">{pages[3]}</a></li>
                            <li><a href="">{pages[4]}</a></li>
                            <li><a href="">{pages[5]}</a></li>
                       </ul>
                    </div>
                </div>
                </div>
               
                <div className="nav-icons">
                    <div>{searchIcon}</div>
                    <div className = "cart-icon-container" onClick = {showCartContainer}>
                         <div className='cart-icon'>{cartIcon}</div>
                         <span className = "cartItem-length">{cartproducts.length}</span>
                    </div>
                </div>
                <div className='hamburger' onClick = {showNav}>
                    <div className = "line"></div>
                    <div className = "line"></div>
                    <div className = "line"></div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;