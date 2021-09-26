import React from 'react';
import './Cart.css'

const Cart = props => {
    const { card } = props;
    //Total calculation
    let total = 0;
    for (const friend of card) {
        // console.log(friend)
        total = total + friend?.taka;
        // console.log(total)
    }
    // const totalReducer = (previous, friend) = previous + friend.price;
    // const total = card.reduce(totalReducer, 0)
    return (
        <div>

            <h3 className="px-4">Total:{props.card.length}</h3>
            <h4 className="px-4">Total amount:<i className="fas fa-dollar-sign"></i>{total.toFixed(2)}</h4>
            <h6 className="px-4">{props.name}</h6>
        </div>
    );
};

export default Cart;