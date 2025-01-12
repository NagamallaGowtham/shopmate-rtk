import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const count = useSelector((state) => state.cart.count)
  return (
    <header>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd', padding: '20px 0'}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">ShopMate</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </li>
                    </ul>
                    <div className="cart-items">
                        <NavLink className="nav-link" to="/cart"><strong>Cart: {count}</strong></NavLink>
                    </div>
                </div>
            </div>
            </nav>
    </header>
  )
}

export default Header