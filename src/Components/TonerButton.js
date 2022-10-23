import{useContext,useState,useEffect} from 'react'
import { testContext } from './Products';
import {products} from './Products'
const TonerButton = ({showToners,productArray})=>{
    const {Storeproducts,setStoreProducts} = useContext(testContext)
    const displayToners = ()=>{
        let toners =products.filter((product)=>{
            return product.type === "toner"
        })
        setStoreProducts(toners)
    }
    return(
        <div>
            <button className="product-button" onClick = {displayToners}>Toner</button>
        </div>
    )
}

export default TonerButton;