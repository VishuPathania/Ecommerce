import CartButton from "../Button/CartButton"
import { CartitemList } from "./CartItems"
import { useState } from "react"
import './CartElements.css'
const CartElements =(props)=>{
    const [isCartOpen, setIsCartOpen] = useState(false);

    const cartList = CartitemList.map(cartitem=>(
        <li key={cartitem.id} className = 'card'>
            <div >
                <div className="card-header">
                    <h4>{cartitem.title}</h4>
                </div>
                <img src={cartitem.imageUrl} alt="na"/>
                <div className="card-body">
                    
                    <p>kimat:{cartitem.price}</p>
                    <h6>quantity:{cartitem.quantity}</h6>
                    <button>Remove</button>
                </div>
            </div>
            
            

        </li>
        
    ))
    return(
        <div style={{float:"right"}}>
            <button onClick={props.onClick} style={{float: 'right'}}>❌</button>
            {cartList}
            
        </div>
    )
}
export default CartElements