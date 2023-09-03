import Button from 'react-bootstrap/Button';
const CartButton = (props)=>{
    return(
        <div>
        <Button variant="primary" style={{float: 'right'}} onClick = {props.onClick}>My Cart</Button>
        
        </div>
    )
}
export default CartButton