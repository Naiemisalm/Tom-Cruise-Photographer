import React from 'react';
import { useNavigate } from 'react-router-dom';



const Service = (props) => {
    const navigate =  useNavigate();
    const {name, id, img,price,description} = props.service;

    const handleToChackOut = (id) => {
        navigate('/chackout')
    }

    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
        <div id='experts' className="card " style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price:${price}</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary' onClick={ () => handleToChackOut (id)}>Haire Now</button>
                </div>
        </div>

    </div>
    );
};

export default Service;