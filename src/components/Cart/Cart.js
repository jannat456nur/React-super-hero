import React from 'react';
import './Cart.css'

const Cart = props => {
    const { card } = props;
    let total = 0;
    for (const friend of card) {
        console.log(friend)
        total = total + friend?.taka;
        console.log(total)
    }
    return (
        <div>

            <h3 className="px-4">Total:{props.card.length}</h3>
            <h4 className="px-4">Total amount:{total.toFixed(2)}</h4>
            <h6 className="px-4">{props.name}</h6>
        </div>
    );
};

export default Cart;