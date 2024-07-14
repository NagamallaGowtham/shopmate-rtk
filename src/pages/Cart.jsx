import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const Cart = () => {
    const count = useSelector(state => state.cart.count)
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((acc, int) => acc + (int.price * int.quantity), 0)

  return (
    <div className='cart-items mt-4 mb-4'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2>Cart Items: {count} / ${totalPrice}</h2>
                </div>
            </div>
            <div className="row">
                {
                    cartItems.map(product => (
                        <div className="col-12" key={product.id}>
                            <CartItem product={product} />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Cart