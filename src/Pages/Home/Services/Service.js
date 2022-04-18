import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Service = (props) => {
    const navigate =  useNavigate();
    const {name, id, img,price,description} = props.service;

    const handleToChackOut = () =>{
        navigate('/chackout')
    }

    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4'>
        <div id='experts' className="card " style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price:${price}</p>
                <p className="card-text">{description}</p>
            
                        <button className='btn btn-primary' onClick={ handleToChackOut}>Haire Now</button>
                </div>
        </div>

    </div>
    );
};

export default Service;