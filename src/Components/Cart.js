import React,{useState,createContext,useContext,useRef,useReducer,Fragment,useEffect} from 'react'
import { testContext } from './Products';
import { globalVariable } from '../App';



const Cart = ({setShowModal,beforePreloader, setBeforePreloader })=>{
    const {cartproducts,amountOfProduct,setAmountOfProduct,setCartProducts,qty,setQty,cartItem,setCartItem} = useContext(testContext)
    const {cartVisible,setCartVisible,showModal,totalAmount,setTotalAmount} = useContext(globalVariable)
    const[isqty,setIsQty] = useState(true)
    //const[totalAmount,setTotalAmount] =useState(0)
    const[newState,setNewState] = useState(0)
   

    let result = 0
    //VARIABLE HERE CHECKS THE CART ARRAY AND TAKES OUT THE QUANTITY AND PRICE OF EACH ITEM AND THEN MULTIPLIES
    //THEM TOGETHER AND PUTS THEM INTO A NEW ARRAY CALLED TOTAL PRODUCTS
    let totalProducts = cartproducts.map((items)=>{
      let totalQuantity = (items.quantity * items.price)
      return (totalQuantity);
    })

    //THIS USEEFFECT MAKES SURE TO UPDATE THE TOTAL AMOUNT TO BE PAID WHEN QUANTITY OF ITEMS IS INCREASED
    //OR NEW ITEMS ARE ADDED IN TO THE CART

    //TOTAL PRODUCTS IS BASICALLY AN ARRAY THAT HOLD THE PRODUCT BETWEEN THE QUANTITY AND THE PRICE OF EACH ITEM
    //THE FUNCTION INSIDE THE USEEFFECT BASICALLY SUMS UP EVERYTHING TO A SINGLE VALUE GIVING US THE TOTAL AMOUNT OF ALL THE PRODUCTS IN THE CART
    useEffect(()=>{
        let sumOfPrices = totalProducts.forEach((item)=>{
            setTotalAmount(result += item)
         })
        
    },[cartproducts,amountOfProduct,newState])
              
   

    //FUNCTION  TO  INCREASE QUANTITY OF ITEM AND DECREASE THE NUMBER OF QUANTITY OF ITEMS
    const increaseHandler = (p,index)=>{
       function add(){
           let amount = p.quantity++
           return amount;
       }
       add()
       setIsQty(!isqty)
       setAmountOfProduct(p.quantity)
     
      
     }
     const decreaseHandler = (p,index)=>{
        function subtract(){
            if(p.quantity === 1){
                let amount = p.quantity
                return amount;
            }
            else{
                let amount = p.quantity--
                return amount;
            }
        }
        subtract()
        setIsQty(!isqty)
        setAmountOfProduct(p.quantity)
     }
     
     //THIS FUNCTION DELETES AN ITEM FROM THE CART WHEN YOU CLICK THE X-BUTTON
     //THE FIRST FUNCTION MAKES SURE THAT THE QUANTITY OF THAT ITEM GOES BACK TO 1 WHEN IT IS DELETED
     const deleteItem = (id)=>{
        function clear(){ 
           let singleItem = cartproducts.filter((item)=>{
            if(item.id === id ){
            }
            return item.quantity = 1
           })
        }
        clear()
        let newCartProducts = cartproducts.filter((item)=>item.id !== id)
        setCartProducts(newCartProducts)
     }

     //FUNCTION TO CLOSE THE CART CONTAINER
     const closeCartContainer = ()=>{
        setCartVisible(true)
     }


     //FUNCTION TO DISPLAY MODAL
     const showModalHandler = ()=>{
        setShowModal(false)
     }

     //FUNCTION TO CLEAR CART
     const clearCart = ()=>{
        localStorage.removeItem('products')
        localStorage.removeItem('total')
       setCartProducts([])
     
     }
    return(
        <Fragment>
            <div className = {`cart ${!cartVisible ? 'cart-visible' : ''}`}>
                <div className = "close-btn" onClick = {closeCartContainer}>Close</div>
                {cartproducts.length === 0 && (<p>No Items added to cart</p>)}
                {cartproducts.length > 0 && cartproducts.map((p,index)=>(
                    <div className = "cart-item" key={p.id}>
                        <img src={p.img} width="100" id="cart-img"></img>
                         <div className="name-qty-container">
                                <div>{p.productName}</div>
                            <div className="qty-box">
                                <div onClick = {()=>decreaseHandler(p,index)} className = "quantity-changer">-</div>
                                <div>{p.quantity}</div>
                                <div onClick = {()=>increaseHandler(p,index)} className = "quantity-changer">+</div>
                            </div>
                        </div>
                        <div className="price">&#8358;{p.price}</div>
                        <div onClick = {()=>deleteItem(p.id)} ><i className="fa-solid fa-xmark" title="remove this item"></i></div>
                    </div>
                ))}
                 {cartproducts.length > 0 && (
                <div>
                    <div id="total-box">TOTAL:&#8358; {totalAmount}</div>
                    <button className = "checkout-btn" onClick = {showModalHandler}>Proceed to Checkout</button>
                    <button className = "checkout-btn" onClick = {clearCart}>Clear Cart</button>
                 </div>
                 )}
            </div>
        </Fragment>
    )
}
//<div>TOTAL:{totalAmount}</div>

export default Cart;