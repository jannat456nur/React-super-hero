
import React from 'react';
import './Details.css'


const Details = (props) => {
    // console.log(props.details.name)
    //destructuring
    const { name, id, dep, img, taka } = props.details || {};

    return (
        //dynamically card menupulation
        <div className="col-md-4">
            <div className="card mb-3 bg " style={{ "maxwidth": "540px" }}>


                <img src={img} className="img-fluid rounded-start w-75 " alt="..." />

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Dep_{dep}</p>
                        <p className="card-text">Id_{id}</p>
                        <p className="card-text">Selected_{id}</p>
                        <p className="card-text"><small className="text-bold">Given_{taka}</small></p>
                        <p><i className="fab fa-whatsapp"> </i> <i className="fab fa-instagram"></i> <i className="fab fa-facebook-f"></i></p>

                        <button onClick={() => props.handleAddToCart(props.details)}
                            className="btn btn-secondary"> <i className="fas fa-dollar-sign"></i> Add Money</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;