import{useContext,useState,useEffect} from 'react'
import { testContext } from './Products';
import {products} from './Products'
const SerumButton = ()=>{
    const{Storeproducts,setStoreProducts} = useContext(testContext)
    const showSerum = ()=>{
        let serum = products.filter((product)=>{
            return product.type === "serum"
        })
        setStoreProducts(serum)
        console.log(Storeproducts)

    }
    return(
        <div>
            <button className="product-button" onClick = {showSerum}>Serum</button>
        </div>
    )
}

export default SerumButton;