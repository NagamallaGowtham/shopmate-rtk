import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../store/cartSlice'

const Card = ({product}) => {
    const {image, price, name} = product
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.cartItems)
    // const isInCart = items.some(item => item.id === product.id)
    const indexIn = items?.findIndex(item => item.id === product.id)
    const isInCart = (indexIn !== -1 && items[indexIn].quantity >= 1) ? true : false
    const quantity = isInCart ? items[indexIn].quantity : 0

    // const handleClick = () => {
    //      isInCart ? dispatch(remove(product)) : dispatch(add(product))
    // }

  return (
    <div className='card'>
        <div className="card-img">
            <img src={image} alt="" />
        </div>
        <div className="card-body-footer">
            <div className="card-body">
                <h2 className="title">{name}</h2>
            </div>
            <div className="card-footer">
                <div className="rate"><strong>${price}</strong></div>
                {
                    isInCart ? (
                        <div className="add-remove">
                            <button onClick={() => dispatch(remove(product))}>-</button><span className="mx-1">{quantity}</span><button onClick={() => dispatch(add(product))}>+</button>
                        </div>
                    ) : (
                        <div className="single-add">
                            <button onClick={() => dispatch(add(product))}>Add</button>
                        </div>
                    )
                }
                {/* <button onClick={handleClick}>{isInCart ? 'Remove' : 'Add'}</button> */}
            </div>
        </div>
    </div>
  )
}

export default Card