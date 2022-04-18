import React from 'react';



const Service = (props) => {
    const {name,img,price,description} = props.service;
    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
        <div id='experts' className="card " style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price:${price}</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary'>Haire Now</button>
                </div>
        </div>

    </div>
    );
};

export default Service;