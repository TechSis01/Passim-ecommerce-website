import{useContext,useState,useEffect} from 'react'
import { testContext } from './Products';
import {products} from './Products'
const MoistureButton = ({showMoisturizer,productArr})=>{
    const {Storeproducts,setStoreProducts} = useContext(testContext)
    const displayMoisture = ()=>{
        let moisturizer = products.filter((product)=>{
            return product.type == "moisturizer"
        })
      setStoreProducts(moisturizer)
    }
    return(
        <div>
            <button className="product-button" onClick = {displayMoisture}>Moisturizer</button>
        </div>
    )
}

export default MoistureButton;