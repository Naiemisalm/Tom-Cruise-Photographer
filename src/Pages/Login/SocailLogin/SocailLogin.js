import React from 'react';
import {useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.int';
import google from '../../../images/social/download.png'
import github from '../../../images/social/github.png'


const SocailLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1,  error1] = useSignInWithGithub(auth);
    

    let errorElement;

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message} </p>
      }
      if(user || user1){
        navigate('/home')
      }

    return (
        <div className='container mx-auto w-50' >
           <div className='d-flex align-items-center'>
           <div style={{height:'1px'}} className='bg-primary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
           </div>
           <div>
                <p>{errorElement}</p>
               <button className='btn btn-info d-block mx-auto w-50 my-2'>
               <img src={google} alt="" />
                  <span className='px-2' onClick={()=>{signInWithGoogle()}}> Google Sign In</span>
                   </button>
               <button className='btn btn-info d-block mx-auto w-50 my-2'>
               <img src={github} alt="" />
                   <span className='px-2' onClick={() =>{signInWithGithub()}}>Github Sin In</span>
                   </button>
           </div>
        </div>
    );
};

export default SocailLogin;