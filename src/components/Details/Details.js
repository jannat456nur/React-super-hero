
import React from 'react';
import './Details.css'


const Details = (props) => {
    console.log(props.details.name)
    //Distrucring
    const { name, id, dep, img, taka } = props.details;

    return (
        <div className="col-md-4">
            {/* <div className="col-md-6">


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


            </div> */}
            {/* Show friends dinamically */}
            <div class="card mb-3 " style={{ "max-width": "540px" }}>


                <img src={img} class="img-fluid rounded-start w-75" alt="..." />

                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Dep_{dep}</p>
                        <p class="card-text">Id_{id}</p>
                        <p class="card-text"><small class="text-muted">Given_{taka}</small></p>
                        <p><i class="fab fa-whatsapp"> </i> <i class="fab fa-instagram"></i> <i class="fab fa-facebook-f"></i>
                        </p>
                        <button onClick={() => props.handleAddToCart(props.friend)}
                            className="btn btn-secondary"> <i class="fas fa-dollar-sign"></i> Add Money</button>

                    </div>
                </div>

            </div>
            {/* <div class="card mb-3" style={{ "max-width": "540px" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">Dep_{dep}</p>
                            <p class="card-text">Id_{id}</p>
                            <p class="card-text"><small class="text-muted">Given_{taka}</small></p>
                            <button onClick={() => props.handleAddToCart(props.friend)}
                                className="btn btn-secondary"> <i class="fas fa-dollar-sign"></i> Add Money</button>
                        </div>
                    </div>
                </div>
            </div> */}


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