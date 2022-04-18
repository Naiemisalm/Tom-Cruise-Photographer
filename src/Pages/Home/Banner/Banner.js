import React from 'react';
import './Banner.css'
import {Link, useNavigate } from 'react-router-dom';

import { Carousel } from 'react-bootstrap';
import banner from '../../../images/banner/banner.png'
import banner1 from '../../../images/banner/banner1.png'
import banner2 from '../../../images/banner/banner2.png'

const Banner = () => {
  const navigate = useNavigate()
  const handleServices = () => {
    console.log('cliked')
    navigate('/services')
  }
  return (
    
        <Carousel className = ' conatainer mt-5 img' >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>I'm Tom Cruise</h3>
            <p> I am profesional weding photographeer</p>
            <button onClick={handleServices} className='btn btn-primary text-white'>My Services</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>I'm Tom Cruise</h3>
            <p> I am profesional event photographeer.</p>
            <button as={Link} to='/services' onClick={handleServices} className='btn btn-primary text-white'>My Services</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>I'm Tom Cruise</h3>
            <p>
            I am profesional tour photographeer.
            </p>
            <button onClick={handleServices} className='btn btn-primary text-white'>My Services</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
  
    );
};

export default Banner;