import{useContext,useState,useEffect} from 'react'
import { testContext } from './Products';
import {products} from './Products'
const AllButton = ({showToners,productArray})=>{
    const {Storeproducts,setStoreProducts} = useContext(testContext)
    const displayProducts = ()=>{
        setStoreProducts(products)
    }
    return(
        <div>
            <button className="product-button" onClick = {displayProducts}>All Products</button>
        </div>
    )
}

export default AllButton;