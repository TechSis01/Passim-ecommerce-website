import mastercard from '../images/mastercard.png'
import visa from '../images/visa.png'
import verve from '../images/verve.png'
import{useState,useRef,useContext} from 'react'
import { Fragment } from "react";
import { globalVariable } from '../App';
const ModalCard = ({showModal,setShowModal,cartproducts,setCartProducts})=>{
    const {isCheckedOut,setIsCheckedOut,isSuccessful,setIsSuccessful} = useContext(globalVariable)
    const[isMasterCard,setIsMasterCard] = useState(true)
    const[isVisaCard,setIsVisaCard] = useState(true)
    const[isVerveCard,setIsVerveCard] = useState(true)
    const userRef = useRef(null)
    const cardNumRef = useRef(null)
    const cvvRef = useRef(null)
    const expRef = useRef(null)
    const[isValid,setIsValid] = useState(false)
    const[isNameValid,setIsNameValid] = useState(false)
    const[isCardValid,setIsCardValid] = useState(false)
    const[isCvvValid,setIsCvvValid] = useState(false)
    const[isExpValid,setIsExpValid] = useState(false)
    const selectMasterCard = ()=>{
        setIsMasterCard(false)
        setIsVerveCard(true)
        setIsVisaCard(true)

    }
    const selectVisaCard = ()=>{
        setIsVisaCard(false)
        setIsVerveCard(true)
        setIsMasterCard(true)
    }
    const selectVerveCard = ()=>{
        setIsVerveCard(false)
        setIsVisaCard(true)
        setIsMasterCard(true)
    }

    const closeModal = ()=>{
        setShowModal(true)
       
    }
    const newUser = ()=>{
        let firstName = userRef.current.value
        if(firstName.trim().length === 0){
            setIsNameValid(true)
        }
        else if(firstName.trim().length >  0){
            setIsNameValid(false)
        }
    }
    const newCardNum = ()=>{
        let atmCardNum = cardNumRef.current.value
        if(atmCardNum.trim().length === 0 || isNaN(atmCardNum)){
            setIsCardValid(true)
        }
        else if(atmCardNum.trim().length > 0){
            setIsCardValid(false)
        }
    }
    const newCvv = ()=>{
        let cvvCardNum = cvvRef.current.value
        if(cvvCardNum.trim().length === 0 || isNaN(cvvCardNum)){
            setIsCvvValid(true)
        }
        else if(cvvCardNum.trim().length > 0){
            setIsCvvValid(false)
        }
    }
    const newExp = ()=>{
        let expCardNum = expRef.current.value
        if(expCardNum.trim().length === 0 || isNaN(expCardNum)){
            setIsExpValid(true)
        }
        else if(expCardNum.trim().length > 0){
            setIsExpValid(false)
        }
    }
    const checkOut = (e)=>{
        e.preventDefault();
        setIsSuccessful(true)
           // setShowModal(true)
          setIsCheckedOut(true)
            localStorage.removeItem('products')
            localStorage.removeItem('total')
            setCartProducts([])
    }
    
    return(
        <Fragment>
            <div className = "card-details">
                <div className = "close-modal-btn" onClick = {closeModal}><i className="fa-solid fa-xmark modal-xmark" title="remove this item"></i></div>
                <h4>Card Details</h4>
                <em>Select your card type below</em>
                <h5>Card Type</h5>

                   {!isMasterCard &&
                   <div className='chosen-card'> 
                        <img src={mastercard} width = "40"></img>
                   </div>}
                   {!isVisaCard && 
                   <div className='chosen-card'>
                        <img src={visa} width = "40"></img>
                    </div>}
                   {!isVerveCard && 
                   <div className='chosen-card'>
                        <img src={verve} width = "50"></img>
                    </div>}
                    <div className = "payment-cards-container">
                        <div  onClick = {selectMasterCard}>
                            <img src={mastercard} alt="mastercard" className="payment-cards"></img>
                        </div>
                        <div  onClick = {selectVisaCard}>
                            <img src={visa} alt="visacard" className="payment-cards"></img>
                        </div>
                        <div  onClick={selectVerveCard}>
                            <img src={verve} alt="vervecard" className="payment-cards"></img>
                        </div>
                </div>
                <form onSubmit={checkOut}>
                    <div className="modal-input-container">
                        <label>Name on Card</label>
                        {isNameValid && <p className = "error">please input valid name</p>}
                        <input type="text" className="input input-1" ref={userRef} onChange = {newUser}></input>
                    </div>
                    <div className="modal-input-container">
                        <label>Card Number</label>
                        {isCardValid && <p className = "error">please input valid number</p>}
                        <input type="text" className="input input-1"  ref = {cardNumRef} onChange = {newCardNum}></input>
                    </div>
                    <div className = "cvv-exp-date-container">
                        <div className="modal-input-container">
                            <label>CVV</label>
                            {isCvvValid && <p className = "error2">please enter a valid number</p>}
                            <input type="password" className="input input-2"  ref = {cvvRef} onChange = {newCvv}></input>
                        </div>
                        <div className="modal-input-container expiry-date">
                            <label>EXP</label>
                            {isExpValid && <p className = "error2">please enter a valid number</p>}
                            <input type="text" placeholder="mm/yy" className="input input-2" ref={expRef} onChange = {newExp}></input>
                        </div>
                    </div>

                    <button className = {`checkout-btn2 `}onClick = {checkOut}>Checkout</button>
                    {/* {isValid && <p >Thank you for shopping with Passim.Delivery takes 4-5 days please be patient with us.</p>} */}
                </form>
            </div>
        </Fragment>
    )
}

export default ModalCard;