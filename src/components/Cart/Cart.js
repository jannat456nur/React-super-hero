import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = { props };
    // let total = 0;
    // for (const friend of cart) {
    //     total = total + friend.taka;
    // }
    return (
        <div className="">
            <h3>Total:</h3>
            {/* <h3>Total:{props.cart.length}</h3> */}

        </div>
    );
};

export default Cart;