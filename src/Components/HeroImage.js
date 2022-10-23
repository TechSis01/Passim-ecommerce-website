import model from '../images/model.jpg'
import React,{useState,createContext,Fragment, useEffect} from 'react'
import Navbar from './Navbar'
import HeroContent from './HeroContent'
// import Pages from './Pages'
const HeroImage = ({cartproducts,setCartProducts})=>{
    const [showPages,setShowPages] = useState(true)
    return(
        <Fragment>
            <div className="hero-section" id="top">
                <Navbar showPages = {showPages} setShowPages = {setShowPages} cartproducts = {cartproducts} setCartProducts = {setCartProducts}/>
                 <img src={model} alt='model' className="model"></img>
                 <HeroContent />
            </div>
        </Fragment>
    )
}

export default HeroImage;