
import React from 'react';
import Cart from '../Cart/Cart';
import './Details.css'

const Details = (props) => {
    const { name, id, dep, img, taka } = props.details;
    return (
        <div className="cart" >
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img className="image" src={img} alt="" />
                        <div class="card-body">
                            <h2>Name:{name}</h2>
                            <h2>Student Id:{id}</h2>
                            <h2>Dep:{dep}</h2>
                            <h2>Amount:{taka}</h2>
                            <button onClick={() => props.handleAddToCart(props.friend)}
                            >add to card</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <img className="image" src={img} alt="" />
            <div class="card-body">
                <h2>Name:{name}</h2>
                <h2>Student Id:{id}</h2>
                <h2>Dep:{dep}</h2>
                <h2>Amount:{taka}</h2>
                <button onClick={() => props.handleAddToCart(props.friend)}
                >add to card</button>
            </div> */}
        </div>
    );
};

export default Details;