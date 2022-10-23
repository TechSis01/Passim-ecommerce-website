
import{Fragment,useContext,createContext,useEffect} from 'react'
import ModalCard from './ModalCard';
import { globalVariable } from '../App';
const Modal = ({cartproducts,setCartProducts,totalAmount,setTotalAmount,showModal,setShowModal})=>{ 
const {isCheckedOut,setIsCheckedOut,isSuccessful,setIsSuccessful} = useContext(globalVariable)
    
    useEffect(()=>{
        if(isSuccessful === true){
            setTimeout(()=>{
                window.location.reload();
            },1000)
        }
    },[isSuccessful])


   const closeSecondModal = ()=>{
    setShowModal(true)
   }


   
    return(
        <Fragment>
            <div>
                <div className = {`modal-container ${!showModal ? 'display-modal' : 'remove-modal'}`} >
                    {isSuccessful && <div className='modal-content thankyou-msg'>
                          <div className = "close-second-modal-btn" onClick = {closeSecondModal}></div>
                        <div><i class="fa-solid fa-check"></i></div>
                        <div>Transaction Successful</div>
                    </div>}
                    {!isCheckedOut && <div className = "modal-content">
                        <div className = "order-summary">
                            <h1>Order Summary</h1>
                            {cartproducts.map((product)=>(
                                <div className="order-summary-products">
                                    <img src={product.img} alt="skincare-product" className="modal-product-image"></img>
                                    <div>
                                        <div>{product.productName}</div>
                                        <div>Quantity : {product.quantity}</div>
                                        <div>&#8358; {product.price}</div>
                                    </div>
                                </div>
                            ))}
                {cartproducts.length > 0 && (
                <div>
                    <div id="total-box">TOTAL:&#8358; {totalAmount}</div>
                 </div>
                 )}
                        </div>
                     <ModalCard showModal = {showModal} setShowModal = {setShowModal} cartproducts = {cartproducts} setCartProducts = {setCartProducts}/>
                    </div>}
                </div>
            </div>
        </Fragment>
    )
}

export default Modal;