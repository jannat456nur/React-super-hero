import React from 'react';
import './Cart.css'

const Cart = props => {
    console.log(props.cart)
    const { cart } = props;
    //Total calculation
    let total = 0;
    let nameF = [];
    for (const friend of cart) {
        console.log(friend)
        total = parseFloat(total) + friend?.taka;
        nameF = nameF + friend?.name;
        // console.log(total)
    }
    // const totalReducer = (previous, friend) = previous + friend.price;
    // const total = card.reduce(totalReducer, 0)
    return (
        <div>

            <h3 className="px-4">Total:{props.cart.length}</h3>
            <h4 className="px-4">Total amount:<i className="fas fa-dollar-sign"></i>{total.toFixed(2)}</h4>
            <h6 className="px-4">{nameF}</h6>
        </div>
    );
};

export default Cart;