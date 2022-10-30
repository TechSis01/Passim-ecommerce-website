
import './App.css';
import React,{useState,createContext,Fragment, useEffect} from 'react'
import Product from './Components/Products';
import HeroImage from './Components/HeroImage';
import Features from './Components/FeaturesSection';
import Modal from './Components/Modal';
import Footer from './Components/Footer';
 //export const testContext = createContext();

export const globalVariable = createContext();
const persistedItems = JSON.parse(localStorage.getItem('products'))
const persistedtotal= JSON.parse(localStorage.getItem('total'))
function App(){

  const[cartproducts,setCartProducts] = useState(persistedItems || [])
  const[totalAmount,setTotalAmount] =useState(persistedtotal || 0)
  const[cartVisible,setCartVisible] = useState(true)
  const[showModal,setShowModal] = useState(true)
  const[isCheckedOut, setIsCheckedOut] = useState(false)
  const[isSuccessful, setIsSuccessful] = useState(false)
  const[navBar, setNavBar] = useState(false)
  
  const[reload,setReload] = useState(false)
 //const[beforePreloader,setBeforePreloader] = useState(false)

  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(cartproducts))
    localStorage.setItem('total',JSON.stringify(totalAmount))
  },[cartproducts,totalAmount])

  
  
  return(
    <Fragment>
      <globalVariable.Provider value={{navBar,setNavBar,cartVisible,setCartVisible,totalAmount,setTotalAmount,isCheckedOut,setIsCheckedOut,isSuccessful,setIsSuccessful}}>
          <HeroImage cartproducts = {cartproducts} setCartProducts = {setCartProducts}/>
          <Product  cartproducts = {cartproducts} setCartProducts = {setCartProducts} totalAmount = {totalAmount} setTotalAmount={setTotalAmount} setShowModal = {setShowModal}/>
          <Features />
         <Modal  showModal={showModal} setShowModal={setShowModal} cartproducts = {cartproducts} setCartProducts = {setCartProducts} totalAmount = {totalAmount} setTotalAmount={setTotalAmount}/>
        <Footer />
      </globalVariable.Provider>
    </Fragment>
  )
}

export default App;