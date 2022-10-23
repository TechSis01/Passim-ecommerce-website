import React,{useState,createContext,Fragment, useEffect,useReducer} from 'react'

import product1 from '../images/face-toner.jpg'
import product2 from '../images/bb-cream.jpg'
import product3 from '../images/hairmask.jpg'
import product4 from '../images/lip-balm.jpg'
import product5 from '../images/micellar-water.jpg'
import product6 from '../images/moisturizer.jpg'
import product7 from '../images/oil-serum.jpg'
import product8 from '../images/post-shave.png'
import product9 from '../images/product1.png'
import product10 from '../images/product2.png'
import product11 from '../images/product3.png'
import product12 from '../images/product4.png'
import product13 from '../images/product5.png'
import product14 from '../images/product5.png'
import product15 from '../images/repair-cream.jpg'
import product16 from '../images/skincare-image.jpg'
import product17 from '../images/skin-care-set.jpg'


import TonerButton from './TonerButton'
import SerumButton from './SerumBtn'
import ShowerGelButton from './GelBtn'
import MoistureButton from './MoistureBtn'
import AllButton from './AllProductsBtn'
import Cart from './Cart'
export const products = [
    {
        id:'e1',
        productName:'FACE TONER',
        price:2000,
        img:product1,
        type:"toner",
        quantity:1,
    },
    {
        id :'e2',
        productName:'FACE CREAM',
        price:3000,
        img:product2,
        type:"moisturizer",
        quantity:1,
    },
    {
        id :'e3',
        productName:'MILK TONER',
        price:3000,
        img:product3,
        type:"toner",
        quantity:1,
    },
    {
        id :'e4',
        productName:'VITAMIN C SERUM',
        price:3000,
        img:product4,
        type:"serum",
        quantity:1,
    },
    {
        id :'e5',
        productName:'SHEA FACE CREAM',
        price:3000,
        img:product5,
        type:'serum',
        quantity:1,
    },
    {
        id :'e6',
        productName:'AQUA GEL',
        price:3000,
        img:product6,
        type:"shower",
        quantity:1,
    },
    {
        id :'e7',
        productName:'CARROT FACE CREAM',
        price:3000,
        img:product7,
        type:"moisturizer",
        quantity:1,
    },
    {
        id :'e8',
        productName:'NUBAN FACE CREAM',
        price:3000,
        img:product8,
        type:"moisturizer",
        quantity:1,
    },
    {
        id :'e9',
        productName:'FACE TONER',
        price:3000,
        img:product9,
        type:"toner",
        quantity:1,
    },
    {
        id :'e10',
        productName:'AQUA SHOWER GEL',
        price:3000,
        img:product10,
        type:"shower",
        quantity:1,
    },
    {
        id :'e11',
        productName:'TONER',
        price:3000,
        img:product11,
        type:"toner",
        quantity:1,
    },
    {
        id :'e12',
        productName:'AQUA SERUM',
        price:3000,
        img:product12,
        type:"serum",
        quantity:1,
    },
    {
        id :'e13',
        productName:'TONER',
        price:3000,
        img:product13,
        type:"toner",
        quantity:1,
    },
    {
        id :'e14',
        productName:'MOISTURIZER',
        price:3000,
        img:product14,
        type:"moisturizer",
        quantity:1,
    },
    {
        id :'e15',
        productName:'V SERUM',
        price:3000,
        img:product15,
        type:"serum",
        quantity:1,
    },
    {
        id :'e16',
        productName:'SHOWER GEL',
        price:3000,
        img:product17,
        type:"shower",
        quantity:1,
    },
  ]

  export const testContext = createContext();
  let cart = []


  const Product = ({cartproducts,setCartProducts,setShowModal,beforePreloader, setBeforePreloader })=>{
    //CURRENT STATE FOR DISPLAY PRODUCTS IN THE PRODUCT ARRAY
    const [Storeproducts,setStoreProducts] = useState(products)
    //const[cartproducts,setCartProducts] = useState([])
    const[cartItem,setCartItem] = useState({})
    const[isCart,setIsCart] = useState(true)
    const[qty,setQty] = useState(1)
    const[amountOfProduct,setAmountOfProduct] = useState(0)
   
    const title = 'FACE / BODY'
    
    const cartHandler = (id,array,amnt,products)=>{
        if(cartproducts.some((item)=>item.id === id)){
            console.log(products)
            setAmountOfProduct(products.quantity+1)
            console.log(products.quantity++)
            console.log('already in cart')
        }
        else{
        let singleItem =  array.find((item)=>{
                return item.id === id
            })
        setCartItem((prevState)=>{
            return{...prevState,singleItem}
        })
        setCartProducts([...cartproducts,singleItem])
        setIsCart(!isCart)
        setAmountOfProduct(amnt)
      }
    }

  

    return(
            <Fragment>
                <testContext.Provider value={{Storeproducts,setStoreProducts,cartproducts,setCartProducts,qty,setQty,cartItem,setCartItem,amountOfProduct,setAmountOfProduct}}>
                
                    <div className = "full-container">
                    <div className="full-container-btns">
                        <h1>{title}</h1>
                        <AllButton />
                        <TonerButton />
                        <MoistureButton />           
                        <SerumButton />
                        <ShowerGelButton />
                    </div>
                    <div className = "product-container">
                        {Storeproducts.map((products,index,array)=>(
                            <div className="inner-Product-container" key={products.id}>
                                <img src={products.img} width="250" className = "inner-Product-container-img"></img>
                                <div className = "product-name">{products.productName}</div>
                                <div className="product-price">&#8358;{products.price}</div>
                               <div className = "add-to-cart-div" onClick = {()=>cartHandler(products.id,array,products.quantity,products)}> <a href="cart/link" className = "add-to-cart-btn">ADD TO CART</a></div>
                            </div>
                        ))}
                    </div>
                    </div>
                    <Cart setShowModal = {setShowModal} setBeforePreloader = {setBeforePreloader}/>
                </testContext.Provider>
              
            </Fragment>
        )
  }

  export default Product;