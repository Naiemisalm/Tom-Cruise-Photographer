import React, { useEffect, useState } from 'react';
import Service from './Service';

const services = [
    {
        "id": 1,
        "name": "Weeding_photography",
        "price": 499,
        "img": "https://d3btuubl2bvm9d.cloudfront.net/images/c88634e73b2511e3b6330e2f866a9102/1466172010005-web.jpg",
        "description": " I am profesional weding photographeer"
    },
    {
        "id": 2,
        "name": "Event_photography",
        "price": 599,
        "img": "https://s3-ap-southeast-1.amazonaws.com/bengkel/wp-content/uploads/2017/07/01215029/3x2-Videographer-700x466.jpg",
        "description": " I am profesional event photographeer"
    },
    {
        "id": 3,
        "name": "Tour_photography",
        "price": 399,
        "img": "https://media.istockphoto.com/photos/the-perfect-vantage-point-picture-id546763388?b=1&k=20&m=546763388&s=170667a&w=0&h=Bm6lnXKzyCtJJNAjzxYuQ0RalndwQAQQ0AxsyGGHzJI=",
        "description": " I am profesional tour photographeer"
    }
]
const Services = () => {


    return (
        <div className='container'>
            <h3 className='text-center text-primary mt-4' > My Works </h3>
            <div className="row">
                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;