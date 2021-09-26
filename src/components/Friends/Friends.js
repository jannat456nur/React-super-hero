import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import './Friends.css'

const Friends = () => {
    const [friends, setFriends] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./friends.JSON')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    const handleAddToCart = friend => {
        console.log(friends.name)
        const newCart = [...cart, friend]
        setCart(newCart)
    }
    return (
        <div className="friends-container">
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            <div className="details-container">
                <h3>rfghg:{friends.length}</h3>
                {
                    friends.map(friend => <Details
                        id={friend.key}
                        details={friend}
                        handleAddToCart={handleAddToCart}
                    ></Details>)
                }
            </div>
            {/* <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div> */}
        </div>
    );
};

export default Friends;