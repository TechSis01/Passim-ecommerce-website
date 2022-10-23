
import{useContext,useState,useEffect} from 'react'
import { testContext } from './Products';
import {products} from './Products'
const ShowerGelButton = ()=>{
    const {Storeproducts,setStoreProducts} = useContext(testContext)
    const showGel = ()=>{
        let gel = products.filter((product)=>{
            return product.type === "shower"
        })
        setStoreProducts(gel)

    }
    return(
        <div>
            <button className="product-button" onClick = {showGel}>Shower Gel</button>
        </div>
    )
}

export default ShowerGelButton;