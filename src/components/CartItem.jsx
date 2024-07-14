import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../store/cartSlice'

const CartItem = ({product}) => {
    const {image, price, name} = product
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.cartItems)
    const indexIn = items?.findIndex(item => item.id === product.id)
    const isInCart = (indexIn !== -1 && items[indexIn].quantity >= 1) ? true : false
    const quantity = isInCart ? items[indexIn].quantity : 0

  return (
    <div className="cart-item">
        <div className="cartitem-img">
            <img src={image} alt="" />
        </div>
        <div className="cart-details">
            <div className="title mb-2 mb-lg-0">{name}</div>
            <div className="mb-2 mb-lg-0">${price * quantity}</div>
            {/* <button onClick={() => dispatch(remove(product))}>Remove</button> */}
            <div className="add-remove mb-2 mb-lg-0">
            <button onClick={() => dispatch(remove(product))}>-</button><span className="mx-1">{quantity}</span><button onClick={() => dispatch(add(product))}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem