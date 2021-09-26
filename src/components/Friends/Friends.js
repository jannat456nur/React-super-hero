import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import './Friends.css'

const Friends = () => {
    const [friends, setFriends] = useState([])
    const [cart, setCart] = useState([])
    // const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./friends.JSON')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    const handleAddToCart = friend => {
        // console.log(friend?.taka)
        const newCart = [...cart, friend]
        setCart(newCart)
    }

    // const handleAddToCard = product => {
    //     console.log(product.name)
    //     const newCart = [...cart, product]
    //     setCart(newCart)
    // }
    return (
        <div className="row">
            <div className="col-mc-1">
                <Cart card={cart}></Cart>
            </div>
            <div className="col-md-11">
                <div className="product-container row">
                    <h3>Friends:{friends.length}</h3>
                    {
                        friends.map(friend => <Details
                            // key={friend.id}
                            details={friend}
                            handleAddToCart={handleAddToCart}
                        ></Details>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Friends;